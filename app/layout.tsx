import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { canIndex, pageMetadata, siteName, siteUrl } from "@/lib/seo"
import { SiteStructuredData } from "@/components/seo/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: siteName, url: `${siteUrl}/about` }],
  creator: siteName,
  publisher: siteName,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }, { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: canIndex,
    follow: canIndex,
    googleBot: { index: canIndex, follow: canIndex, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    ...(process.env.BING_SITE_VERIFICATION && { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }),
  },
}

export const viewport: Viewport = { themeColor: "#0f172a", width: "device-width", initialScale: 1 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteStructuredData />
        <Navigation />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1 pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
