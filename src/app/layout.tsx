// Next
import { Metadata } from "next"

// React
import { ReactNode } from "react"

// Theme
import ThemeRegistry from "@/components/ThemeRegistry"

// Fonts
import { Protest_Guerrilla } from "next/font/google"
import { Bebas_Neue } from "next/font/google"

// Global Styles
import "@/app/globals.css"

const protest = Protest_Guerrilla({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-protest",
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Full-Clip",
  description:
    "Design, disrupt, repeat. Full-Clip isn’t here to blend in. We’re redefining the online game scene, one mechanic at a time. Players first. Innovation always. And giveaways that slap.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${protest.variable} ${bebas.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
