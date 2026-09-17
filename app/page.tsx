import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/seo/structured-data"

export const metadata = pageMetadata("/")

import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { GlobalPresence } from "@/components/global-presence"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {TestimonialsCarousel} from "@/components/testimonials-carousel"

function SectionDivider() {
  return (
    <div className="w-full py-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  )
}

function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-white">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold">Let&apos;s build something you&apos;re proud to promote</h3>
              <p className="text-blue-100 mt-2 text-lg">Tell me what you are building and where it has become difficult.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Start a conversation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/success-stories">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Read client stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PageStructuredData path="/" />
      <HeroSection />
      <SectionDivider />
      <AboutPreview />
      <SectionDivider />
      <ServicesPreview />
      <SectionDivider />
      {/* <FeaturedSuccess /> */}
      <TestimonialsCarousel />
      <SectionDivider />
      <StatsSection />
      <GlobalPresence />
      <FinalCTA />
    </main>
  )
}
