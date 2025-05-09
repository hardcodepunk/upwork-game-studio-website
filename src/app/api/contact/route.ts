import { NextRequest, NextResponse } from "next/server"
import type { IncomingMessage } from "http"
import formidable from "formidable"
import nodemailer from "nodemailer"

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req: NextRequest) {
  const form = formidable({ keepExtensions: true })

  const result = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    form.parse(req as unknown as IncomingMessage, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })

  const { fields, files } = result
  const { name, email, message } = fields
  const cv = files.cv?.[0]

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: 465,
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
      to: "howl@hardcodepunk.be",
      subject: "New contact form submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Send error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
