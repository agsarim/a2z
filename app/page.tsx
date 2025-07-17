import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { FeaturedSuccess } from "@/components/featured-success"
import { GlobalPresence } from "@/components/global-presence"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedSuccess />
      <GlobalPresence />
    </main>
  )
}
