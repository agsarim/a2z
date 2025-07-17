"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, CheckCircle } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    client: "Brenda Bence",
    title: "Global Leadership Expert",
    image: "/placeholder.svg?height=80&width=80",
    challenge:
      "Established leadership coach needed to expand book sales and reach new audiences through digital marketing.",
    strategy: [
      "Comprehensive Amazon PPC campaign optimization",
      "LinkedIn thought leadership content strategy",
      "Email marketing automation for lead nurturing",
      "Cross-platform social media integration",
    ],
    results: [
      "Multiple #1 Amazon Bestseller rankings",
      "300% increase in monthly book sales",
      "150% growth in email subscriber base",
      "Expanded speaking opportunities and consulting inquiries",
    ],
    timeline: "12-month comprehensive marketing campaign",
    successFactors: [
      "Consistent content creation that demonstrated expertise",
      "Strategic keyword targeting that reached ideal readers",
      "Integration of book marketing with broader business goals",
      "Long-term commitment to building author platform",
    ],
    testimonial:
      '"I have worked with Syed for the past year, as he helped me advertise one of our books on Amazon. Syed was devoted to doing what he could to help the book achieve good sales. In terms of actual sales revenues, there were ups and downs throughout the year - and Syed had warned me that would likely be the case. But now, the year of focus and attention has paid off, and the book has achieved strong sales and multiple bestseller status. I am grateful to Syed for his attention and suggestions!"',
  },
  {
    client: "Greg Stephens",
    title: "Personal Development Author",
    image: "/placeholder.svg?height=80&width=80",
    challenge:
      "New author needed to establish credibility and achieve bestseller status in competitive personal development market.",
    strategy: [
      "Strategic book launch campaign with coordinated timing",
      "Influencer outreach and collaboration strategy",
      "Amazon algorithm optimization for sustained rankings",
      "Content marketing that built thought leadership",
    ],
    results: [
      "#1 Amazon Bestseller in multiple categories",
      "Featured in major podcasts and media outlets",
      "Built engaged social media following of 10,000+ readers",
      "Developed speaking career based on book success",
    ],
    timeline: "6-month intensive launch and growth campaign",
    successFactors: [
      "Pre-launch audience building that created immediate momentum",
      "Strategic partnerships that expanded reach",
      "High-quality content that encouraged organic sharing",
      "Consistent engagement with reader community",
    ],
    testimonial:
      '"Working with Saqib was a game-changer for my book launch. His expertise in Amazon\'s algorithm and social media strategy helped me hit #1 bestseller status faster than I thought possible. Highly recommend!"',
  },
]

export function MarketingCaseStudies() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Real-World Results:
            <span className="text-green-600"> Transforming Authors into Bestsellers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore detailed breakdowns of how our strategic book marketing campaigns have propelled authors to the top
            of their categories and built sustainable author businesses.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Content - Client Info & Testimonial */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Client Header */}
                      <div className="flex items-start gap-4">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.client}
                          width={80}
                          height={80}
                          className="rounded-full"
                          unoptimized
                        />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                          <p className="text-slate-600">{study.title}</p>
                          <div className="flex items-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="relative">
                        <Quote className="w-8 h-8 text-blue-500 mb-4" />
                        <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                          {study.testimonial}
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content - Strategy & Results */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Challenge & Strategy</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </p>
                  <h5 className="text-lg font-semibold text-slate-800 mb-3">Strategy Implemented:</h5>
                  <ul className="space-y-2">
                    {study.strategy.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">Results Achieved</h4>
                  <ul className="space-y-3 mb-6">
                    {study.results.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <div className="font-semibold">Timeline:</div>
                    <div className="text-slate-300 text-sm">{study.timeline}</div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="font-semibold">Key Success Factors:</div>
                    <ul className="space-y-2">
                      {study.successFactors.map((factor, factorIndex) => (
                        <li key={factorIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
