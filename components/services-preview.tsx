"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Bot, Target, Rocket, ArrowRight, Zap } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI-Powered Book Marketing",
    tagline: "Leverage AI to Dominate Amazon's Algorithm",
    description:
      "Harness the power of ChatGPT, Gemini, and MidJourney to create compelling content, optimize listings, and automate your marketing campaigns for maximum visibility and sales.",
    features: ["AI Content Generation", "Algorithm Optimization", "Automated Campaigns", "Performance Analytics"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Target,
    title: "Amazon PPC Management",
    tagline: "Turn Ad Spend Into Bestseller Status",
    description:
      "Our data-driven PPC strategies have generated over $1 million in sales for authors. We optimize every dollar to maximize your return on investment and accelerate your path to bestseller rankings.",
    features: ["Advanced Targeting", "Bid Optimization", "ROI Maximization", "Competitor Analysis"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Rocket,
    title: "Complete Publishing Solutions",
    tagline: "From Manuscript to Marketplace Success",
    description:
      "End-to-end publishing services including formatting, cover design, SEO optimization, and strategic launch planning that positions your book for immediate market impact.",
    features: ["Professional Design", "SEO Optimization", "Launch Strategy", "Global Distribution"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
]

export function ServicesPreview() {
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
            <Zap className="w-4 h-4" />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Transform Your Publishing Journey with
            <span className="text-blue-600"> Expert Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From AI-powered marketing to complete publishing services, we provide the comprehensive solutions you need
            to achieve bestseller status and build a sustainable author business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="space-y-4">
                      <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-3">{service.tagline}</p>
                        <p className="text-slate-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full group bg-transparent">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">Ready to Accelerate Your Success?</h3>
              <p className="text-xl text-blue-100">
                Schedule a free consultation to discover which services will deliver the best results for your specific
                goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
