import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/seo/structured-data"

export const metadata = pageMetadata("/about")

import { AboutHero } from "@/components/about/about-hero"
import { JourneyTimeline } from "@/components/about/journey-timeline"
import { CredentialsSection } from "@/components/about/credentials-section"
import { PersonalMission } from "@/components/about/personal-mission"
import { ExpertiseShowcase } from "@/components/about/expertise-showcase"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageStructuredData path="/about" />
      <AboutHero />
      <ExpertiseShowcase />
      <JourneyTimeline />
      <CredentialsSection />
      <PersonalMission />
    </main>
  )
}
