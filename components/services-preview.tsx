"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, TrendingUp, Zap, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: BookOpen,
    title: "Book Publishing",
    tagline: "From Manuscript to Marketplace Success",
    description:
      "Professional publishing services that handle the technical details so you can focus on sharing your message. We've successfully published over 7,500 authors across 91 countries.",
    features: ["Professional Formatting", "Cover Design", "Global Distribution", "Quality Assurance"],
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/services/book-publishing",
  },
  {
    icon: TrendingUp,
    title: "Book Marketing",
    tagline: "Turn Your Published Book Into a Bestselling Business Asset",
    description:
      "AI-powered marketing strategies that dominate Amazon's algorithm and build thriving author brands. Our services have generated over $1 million in sales for authors.",
    features: ["AI-Powered Campaigns", "Amazon Optimization", "Brand Building", "Sales Analytics"],
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    href: "/services/book-marketing",
  },
  {
    icon: Zap,
    title: "Digital Marketing",
    tagline: "AI-Powered Marketing That Creates Industry Leaders",
    description:
      "Cutting-edge digital marketing services that leverage AI and data-driven strategies to expand your reach and establish you as an authority in your field.",
    features: ["AI Marketing Tools", "Platform Optimization", "Content Strategy", "Performance Tracking"],
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/services/digital-marketing",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    tagline: "Master AI-Powered Marketing Through Hands-On Training",
    description:
      "Comprehensive training programs that teach the exact AI-powered strategies used to generate millions in sales. Learn through hands-on workshops and ongoing mentorship.",
    features: ["Live Workshops", "AI Tools Training", "Mentorship Programs", "Certification"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/training",
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
                        Learn More
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
