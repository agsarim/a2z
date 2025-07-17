"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Palette, Layout, Globe, CheckCircle } from "lucide-react"
import Image from "next/image"

const publishingServices = [
  {
    id: "editing",
    title: "Manuscript Assessment & Professional Editing",
    icon: PenTool,
    overview:
      "Ensure your manuscript is polished, professional, and error-free with our comprehensive editing services, tailored to enhance clarity, flow, and impact.",
    included: [
      "Developmental Editing: Big-picture feedback on plot, character, and structure",
      "Copyediting: Line-by-line review for grammar, spelling, punctuation, and consistency",
      "Proofreading: Final check for any remaining errors before publication",
      "Manuscript Assessment: Expert evaluation of your book's market readiness and potential",
    ],
    results: [
      "Improved readability and narrative coherence",
      "Elimination of grammatical errors and typos",
      "Enhanced author credibility and reader satisfaction",
      "Increased chances of positive reviews and sales",
    ],
  },
  {
    id: "design",
    title: "Captivating Cover Design & Interior Formatting",
    icon: Palette,
    overview:
      "Make a powerful first impression with a professionally designed cover and a beautifully formatted interior that meets industry standards and captivates readers.",
    included: [
      "Custom Cover Design: Unique, genre-appropriate covers that stand out on digital shelves and attract your target audience",
      "Ebook Formatting: Flawless conversion for Kindle, Kobo, Apple Books, and other major platforms",
      "Print Book Formatting: Professional layout for paperback and hardcover, optimized for print-on-demand services",
      "Image Optimization: Ensuring all images and graphics are high-resolution and properly integrated",
    ],
    results: [
      "Visually stunning book that attracts readers",
      "Seamless reading experience across all devices",
      "Compliance with all major retailer specifications",
      "Increased perceived value and professionalism of your book",
    ],
  },
  {
    id: "distribution",
    title: "Global Distribution & ISBN/Copyright Registration",
    icon: Globe,
    overview:
      "Reach readers worldwide and protect your intellectual property with our comprehensive distribution and registration services, ensuring your book is available everywhere and legally secure.",
    included: [
      "Amazon KDP Setup: Optimized listing and distribution on the world's largest bookstore",
      "IngramSpark Distribution: Access to thousands of online retailers, bookstores, and libraries globally",
      "ISBN Assignment: Official identification number for your book, essential for retail distribution",
      "Copyright Registration: Legal protection for your work, securing your rights as the author",
      "Library & Academic Distribution: Opportunities to place your book in educational institutions",
    ],
    results: [
      "Maximum global reach for your book",
      "Legal protection and ownership of your content",
      "Availability across all major sales channels",
      "Simplified process for complex publishing requirements",
    ],
  },
]

export function CorePublishingServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Layout className="w-4 h-4" />
            Our Core Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Solutions for
            <span className="text-blue-600"> Professional Publishing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From meticulous editing and stunning design to global distribution and legal protection, we provide
            end-to-end services to bring your book to life and to market.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {publishingServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem value={service.id} className="mb-4 border-b-0">
                <AccordionTrigger className="flex items-center gap-4 p-6 bg-slate-100 rounded-xl shadow-sm hover:bg-slate-200 transition-all duration-300 text-left">
                  <service.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900 flex-1">{service.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 mt-4">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Overview & Included */}
                        <div className="space-y-8">
                          <p className="text-lg text-slate-700 leading-relaxed">{service.overview}</p>

                          <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-slate-800">What's Included:</h4>
                            <ul className="space-y-3">
                              {service.included.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                  <span className="text-slate-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-8 bg-white rounded-xl p-8 shadow-md border border-slate-200">
                          <h4 className="text-xl font-semibold text-slate-800">Results You Can Expect:</h4>
                          <ul className="space-y-3">
                            {service.results.map((item, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <span className="text-slate-700 font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <Image
                              src="/placeholder.svg?height=300&width=500"
                              alt={`Visualization for ${service.title}`}
                              width={500}
                              height={300}
                              className="w-full h-auto rounded-lg object-cover"
                              unoptimized
                            />
                            <p className="text-center text-slate-500 text-sm mt-2">
                              {service.id === "editing" && "Before/after examples of edited manuscripts."}
                              {service.id === "design" && "Mockups of stunning book covers and interior layouts."}
                              {service.id === "distribution" && "Global distribution network map."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
