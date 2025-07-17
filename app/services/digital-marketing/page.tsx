import { DigitalMarketingHero } from "@/components/services/digital-marketing/hero"
import { CoreDigitalMarketingServices } from "@/components/services/digital-marketing/core-services"
import { MarketingProcessWorkflow } from "@/components/services/digital-marketing/marketing-process-workflow"
import { ToolsTech } from "@/components/services/digital-marketing/tools-tech"
import { PricingPackages } from "@/components/services/digital-marketing/pricing-packages" // Re-added import
import { CtaSection } from "@/components/services/digital-marketing/cta-section"

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      <DigitalMarketingHero />
      <CoreDigitalMarketingServices />
      <MarketingProcessWorkflow />
      <ToolsTech />
      <PricingPackages /> {/* Re-added section */}
      <CtaSection />
    </main>
  )
}
