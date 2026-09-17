import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Syed Saqib Mumtaz — Marketing & Publishing",
    short_name: "Saqib Mumtaz",
    description: "Book marketing, publishing, digital strategy, and training with Syed Saqib Mumtaz.",
    start_url: "/",
    scope: "/",
    display: "browser",
    lang: "en",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}
