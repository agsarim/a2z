"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle, DollarSign } from "lucide-react"

const pricingTiers = [
  {
    name: "Free Consultancy",
    perfectFor: "Quick insights and to see if we're a good fit",
    investment: "Free",
    whatsIncluded: [
      "30-minute discovery call",
      "Initial assessment of your goals",
      "Brief overview of potential strategies",
      "Q&A session to address your top questions",
    ],
    timeline: "30 minutes",
    buttonText: "Book a Free Call",
    highlight: false,
  },
  {
    name: "1-Hour Consultancy",
    perfectFor: "In-depth strategy and actionable advice",
    investment: "$160",
    whatsIncluded: [
      "60-minute deep-dive strategy session",
      "Detailed analysis of your project or brand",
      "Actionable roadmap with next steps",
      "Personalized recommendations for tools and resources",
      "Follow-up email with key takeaways",
    ],
    timeline: "1 hour",
    buttonText: "Book a Session",
    highlight: true,
  },
]

export function PublishingPricingPackages() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <DollarSign className="w-4 h-4" />
            Flexible Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">            
            Consultancy
            <span className="text-blue-600"> Options</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the consultancy option that best fits your needs, from a quick chat to a deep-dive strategy
            session.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col justify-between border-0 shadow-lg transition-all duration-300 ${
                  tier.highlight ? "bg-blue-600 text-white shadow-xl scale-105" : "bg-white text-slate-900"
                }`}
              >
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className={`text-2xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"} mb-2`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      Perfect for: {tier.perfectFor}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-5xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                        {tier.investment}
                      </span>
                    </div>
                    <p className={`text-sm ${tier.highlight ? "text-blue-100" : "text-slate-600"} mb-4`}>
                      Timeline: {tier.timeline}
                    </p>
                    <ul className="space-y-3 text-left mt-6">
                      {tier.whatsIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? "text-white" : "text-blue-600"}`}
                          />
                          <span className={`${tier.highlight ? "text-blue-100" : "text-slate-700"}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="p-8 pt-0">
                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.highlight
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {tier.buttonText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
