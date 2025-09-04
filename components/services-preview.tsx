"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, Rocket, Mic, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: BookOpen,
    title: "Publishing Strategy & Launch",
    tagline: "From positioning to #1 bestseller",
    description:
      "End-to-end publishing guidance: positioning, Amazon optimization, and launch playbooks tailored to your goals.",
    features: ["A to Z Services for Publishing", "Positioning", "Amazon SEO / PPC Ads", "Book Launch Strategy "],
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    href: "/services/book-publishing",
  },
  {
    icon: Rocket,
    title: "Growth Marketing Advisory",
    tagline: "Designing systems that scale sustainably",
    description:
      "Full-funnel strategy, performance marketing, and analytics to turn attention into revenue without burning your brand.",
    features: ["Funnel design", "PPC ads", "Analytics and audit", "Growth Marketing Advisory"],
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/services/digital-marketing",
  },
  
  {
    icon: GraduationCap,
    title: "Training & Mentorship",
    tagline: "Upskill your team with hands-on learning",
    description:
      "Workshops and mentorship programs that teach the exact systems I use to drive growth, with actionable templates and tools.",
    features: ["Live Webinar", "Live / Physical Workshops", "Mentoring Sessions", "Online Consultancy"],
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/training",
  },
  {
    icon: Mic,
    title: "Keynote Addresses and Media",
    tagline: "Keynotes, panels, and interviews",
    description:
      "Topics include AI for marketers, Digital book publishing and marketing, creator-led growth, and building authority and branding in public and online.",
    features: ["Keynote Addresses", "Panel Discussions", "Workshops", "Media Interviews"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/contact",
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
            What I do
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Practical strategy, built-for-you systems, and hands-on enablement—so you can launch, grow, and lead.

          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      "Tired of marketing plans that never get off the ground? I build practical strategies, done-for-you systems, and hands-on guidance—so your books and brand don’t just launch, they grow and keep winning."

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                    <Link href={service.href}>
                      <Button variant="outline" className="w-full group bg-transparent">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
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
              <h3 className="text-3xl font-bold">Get clarity. Get results</h3>
              <p className="text-xl text-blue-100">Share your goals, and I’ll map out the fastest way to achieve them.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Book a free consult
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/success-stories">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  See How Others Succeeded                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
