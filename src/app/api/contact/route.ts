import { NextRequest, NextResponse } from "next/server"
import formidable, { File as FormidableFile } from "formidable"
import nodemailer from "nodemailer"
import type { IncomingMessage } from "http"
import { Readable } from "stream"

import { escapeHtml } from "@/utils/security"

export const config = {
  api: {
    bodyParser: false,
  },
  runtime: "nodejs",
}

// ─── Basic Rate Limiter ───────────────────────────────
type RateEntry = { count: number; timestamp: number }
const rateMap = new Map<string, RateEntry>()
const RATE_LIMIT = 10 // requests
const WINDOW_MS = 60 * 1000 // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip) || { count: 0, timestamp: now }

  if (now - entry.timestamp < WINDOW_MS) {
    if (entry.count >= RATE_LIMIT) return true
    entry.count++
  } else {
    entry.count = 1
    entry.timestamp = now
  }

  rateMap.set(ip, entry)
  return false
}

// ─── Convert NextRequest to IncomingMessage ───────────
function toIncomingMessage(req: NextRequest): IncomingMessage {
  if (!req.body) throw new Error("Request body is null")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const readable = Readable.fromWeb(req.body as any)
  Object.assign(readable, {
    headers: Object.fromEntries(req.headers.entries()),
    method: req.method,
    url: req.nextUrl.pathname,
  })
  return readable as unknown as IncomingMessage
}

// ─── POST Handler ─────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown"
  if (isRateLimited(ip)) {
    console.warn(`🚫 Rate limit hit for IP: ${ip}`)
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
  }

  console.log("➡️ API route hit")

  const form = formidable({ keepExtensions: true })
  console.log("🧾 Formidable config set")

  const parsedReq = toIncomingMessage(req)

  const result = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    console.log("⏳ Parsing form")
    form.parse(parsedReq, (err, fields, files) => {
      if (err) {
        console.error("❌ Form parse error", err)
        reject(err)
      } else {
        console.log("✅ Form parsed")
        resolve({ fields, files })
      }
    })
  })

  const { fields, files } = result
  console.log("📦 Fields and files extracted:", fields, files)

  const name = Array.isArray(fields.name) ? fields.name[0] : fields.name
  const email = Array.isArray(fields.email) ? fields.email[0] : fields.email
  const message = Array.isArray(fields.message) ? fields.message[0] : fields.message
  const cv = files.cv?.[0] as FormidableFile | undefined

  if (!name || !email || !message) {
    console.warn("⚠️ Missing fields")
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
  }

  try {
    console.log("📤 Preparing email")
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    })

    const attachments = cv
      ? [
          {
            filename: cv.originalFilename || "cv.pdf",
            path: cv.filepath,
            contentType: "application/pdf",
          },
        ]
      : []

    await transporter.sendMail({
      from: `"Full Clip" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New contact form submission",
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
      attachments,
    })

    console.log("✅ Email sent")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Email send error", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
