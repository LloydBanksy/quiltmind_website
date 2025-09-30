import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quiltmind: Niche Famous",
  description: "Quiltmind: Niche Famous",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Quiltmind: Niche Famous",
    description: "Quiltmind: Niche Famous",
    images: [
      {
        url: "/linkedin-analytics.webp",
        width: 1200,
        height: 630,
        alt: "Executive reviewing LinkedIn analytics dashboard",
      },
    ],
  },
  x: {
    card: "summary_large_image",
    title: "Quiltmind: Niche Famous",
    description: "Quiltmind: Niche Famous",
    images: ["/linkedin-analytics.webp"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-gradient-to-b from-black to-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
