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
      "Publishing support from positioning and Amazon optimisation through to a launch plan that suits your book and audience.",
    features: ["A to Z Services for Publishing", "Positioning", "Amazon SEO / PPC Ads", "Book Launch Strategy "],
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    href: "/services/book-publishing",
  },
  {
    icon: Rocket,
    title: "Growth Marketing Advisory",
    tagline: "Campaigns built around the right priorities",
    description:
      "Marketing strategy, campaign management, and reporting that help you decide what to keep, improve, or stop.",
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
      "Workshops and one-to-one support that help people apply useful marketing skills to their own work.",
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
      "Speaking topics include AI in marketing, digital publishing, book promotion, and building a credible public presence.",
    features: ["Keynote Addresses", "Panel Discussions", "Workshops", "Media Interviews"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/contact",
  },
]

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-24">
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
                        Publishing, marketing, and training built around the work in front of you.

          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      Clear support for authors and teams who need a practical next step, not another presentation.

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
              <h3 className="text-3xl font-bold">Start with the question that matters most</h3>
              <p className="text-xl text-blue-100">We can talk through the brief, the audience, and what a useful first move looks like.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Start a conversation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/success-stories">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Read client stories                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
