import { AboutHero } from "@/components/about/about-hero"
import { JourneyTimeline } from "@/components/about/journey-timeline"
import { CredentialsSection } from "@/components/about/credentials-section"
import { MediaPresence } from "@/components/about/media-presence"
import { PersonalMission } from "@/components/about/personal-mission"
import { ExpertiseShowcase } from "@/components/about/expertise-showcase"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <ExpertiseShowcase />
      <JourneyTimeline />
      <CredentialsSection />
      <MediaPresence />
      <PersonalMission />
    </main>
  )
}
