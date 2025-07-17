"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle, DollarSign } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter Publishing Package",
    perfectFor: "First-time authors and budget-conscious writers",
    investment: "$497",
    whatsIncluded: [
      "Professional Manuscript Formatting: Interior layout design optimized for both print and digital formats",
      "Basic Cover Design: Eye-catching cover that follows genre conventions and marketplace best practices",
      "ISBN Assignment: Professional ISBN registration for your book",
      "Amazon KDP Setup: Complete account setup and book listing optimization",
      "Basic SEO Optimization: Keyword-optimized title, subtitle, and description for improved discoverability",
      "Distribution Setup: Publication across major platforms including Amazon, Barnes & Noble, and Apple Books",
    ],
    timeline: "2-3 weeks from manuscript submission to publication",
    buttonText: "Get Started",
    highlight: false,
  },
  {
    name: "Professional Publishing Package",
    perfectFor: "Serious authors building a long-term publishing business",
    investment: "$997",
    whatsIncluded: [
      "Everything in Starter Package, Plus:",
      "Premium Cover Design: Custom cover design with multiple concepts and revisions",
      "Advanced Formatting: Enhanced interior design with custom chapter headers and professional typography",
      "Comprehensive SEO Strategy: In-depth keyword research and optimization across all book metadata",
      "Multi-Format Publishing: Ebook, paperback, and hardcover editions",
      "Extended Distribution: Publication across 40+ global platforms and bookstores",
      "Author Website Setup: Basic author website with book showcase and contact information",
      "Launch Strategy Consultation: 1-hour strategy session for optimal book launch timing and approach",
    ],
    timeline: "3-4 weeks from manuscript submission to publication",
    buttonText: "Choose Plan",
    highlight: true,
  },
  {
    name: "Bestseller Publishing Package",
    perfectFor: "Authors serious about achieving bestseller status and building authority",
    investment: "$1,997",
    whatsIncluded: [
      "Everything in Professional Package, Plus:",
      "Premium Design Suite: Custom cover design, interior formatting, and branded marketing materials",
      "Comprehensive Market Analysis: Detailed competitor research and market positioning strategy",
      "Advanced SEO & Metadata Optimization: Professional copywriting for all book descriptions and metadata",
      "Multi-Language Considerations: Formatting and setup for potential international markets",
      "Author Brand Development: Professional author bio, headshots coordination, and brand messaging",
      "Launch Campaign Planning: Detailed 90-day launch strategy with marketing calendar",
      "Ongoing Support: 3 months of post-publication support and optimization",
    ],
    timeline: "4-6 weeks from manuscript submission to publication",
    buttonText: "Contact for Enterprise",
    highlight: false,
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
            Complete Publishing
            <span className="text-blue-600"> Packages</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the package that best fits your publishing goals, from foundational support to comprehensive
            bestseller positioning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
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
