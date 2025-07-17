"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Edit, Layout, BookOpen } from "lucide-react"

const workflowPhases = [
  {
    phase: "Phase 1",
    title: "Manuscript Preparation & Analysis",
    duration: "Week 1",
    icon: FileText,
    color: "bg-blue-500",
    steps: [
      "Manuscript Review & Assessment: Our publishing team conducts a comprehensive review of your manuscript to identify any formatting issues, structural concerns, or optimization opportunities that could impact your book's marketplace performance.",
      "Market Positioning Analysis: We analyze your book's genre, target audience, and competitive landscape to develop a strategic approach to positioning, pricing, and marketing that maximizes your chances of success.",
      "Publishing Strategy Development: Based on your goals, budget, and timeline, we create a customized publishing plan that outlines every step from manuscript to marketplace, ensuring nothing is overlooked.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Design & Development",
    duration: "Week 2-3",
    icon: Edit,
    color: "bg-green-500",
    steps: [
      "Professional Cover Design: Our design team creates compelling book covers that not only capture your book's essence but also follow proven marketplace conventions that drive clicks and conversions.",
      "Interior Formatting & Layout: Professional typesetting and layout design that ensures your book looks polished and professional across all formats, from ebook readers to print editions.",
      "Metadata Optimization: Strategic development of your book's title, subtitle, description, and keywords to maximize discoverability and appeal to your target audience.",
    ],
  },
  {
    phase: "Phase 3",
    title: "Publication & Distribution",
    duration: "Week 3-4",
    icon: Layout,
    color: "bg-purple-500",
    steps: [
      "Platform Setup & Configuration: We handle all technical aspects of setting up your book across multiple publishing platforms, ensuring optimal settings for maximum reach and revenue.",
      "Quality Assurance Testing: Comprehensive testing across all formats and platforms to ensure your book displays correctly and provides an excellent reader experience.",
      "Distribution Network Activation: Your book goes live across our extensive distribution network, making it available to readers worldwide through major retailers and libraries.",
    ],
  },
  {
    phase: "Phase 4",
    title: "Launch Support & Optimization",
    duration: "Week 4-6",
    icon: BookOpen,
    color: "bg-orange-500",
    steps: [
      "Launch Coordination: We coordinate your book's official launch to maximize initial visibility and momentum, including timing optimization and platform-specific strategies.",
      "Performance Monitoring: Ongoing monitoring of your book's performance across all platforms with regular reports and optimization recommendations.",
      "Post-Launch Optimization: Continuous refinement of your book's metadata, pricing, and positioning based on real world performance data and market feedback.",
    ],
  },
]

export function PublishingProcessWorkflow() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Layout className="w-4 h-4" />
            Our Publishing Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            A Clear Path from Manuscript to
            <span className="text-purple-600"> Published Book</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined four-phase workflow guides you through every step of the publishing journey, ensuring a
            smooth, efficient, and successful transformation of your manuscript into a published book.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-300 hidden lg:block"></div>

          <div className="space-y-16">
            {workflowPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Phase Number */}
                <div className="flex-shrink-0 relative lg:w-1/2 flex justify-center lg:justify-end">
                  <div
                    className={`w-20 h-20 rounded-full ${phase.color} flex items-center justify-center text-white shadow-lg z-10`}
                  >
                    <phase.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-200 text-6xl font-bold opacity-20 z-0">
                    {phase.phase.replace("Phase ", "")}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 lg:w-1/2">
                  <Card className="h-full border-0 shadow-xl bg-white">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {phase.phase}
                          </span>
                          <span className="text-sm font-semibold text-blue-600">{phase.duration}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                        <ul className="space-y-3">
                          {phase.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-600">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
