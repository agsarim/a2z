"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Layout, Rocket, TrendingUp } from "lucide-react"

const workflowPhases = [
  {
    phase: "Phase 1",
    title: "Strategic Foundation",
    duration: "Week 1-2",
    icon: Search,
    color: "bg-blue-500",
    steps: [
      "Market Research & Analysis: Comprehensive analysis of your book's market position, competitor landscape, and audience demographics to identify the most profitable marketing opportunities.",
      "Brand Positioning Development: Create a compelling author brand that differentiates you from competitors and resonates with your ideal readers across all marketing channels.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Campaign Development",
    duration: "Week 3-4",
    icon: Layout,
    color: "bg-green-500",
    steps: [
      "Content Creation & Asset Development: Develop all necessary marketing materials, including ad copy, visual assets, landing pages, and email sequences using AI-powered tools and proven templates.",
      "Platform Setup & Integration: Configure advertising accounts, tracking systems, and automation tools to ensure seamless campaign execution and accurate performance measurement.",
    ],
  },
  {
    phase: "Phase 3",
    title: "Launch & Optimization",
    duration: "Week 5-8",
    icon: Rocket,
    color: "bg-purple-500",
    steps: [
      "Campaign Launch: Execute coordinated marketing campaigns across selected platforms with careful monitoring and real-time adjustments to maximize initial impact.",
      "Performance Optimization: Continuous testing, analysis, and refinement of campaigns based on performance data to improve results and reduce costs over time.",
    ],
  },
  {
    phase: "Phase 4",
    title: "Scale & Sustain",
    duration: "Ongoing",
    icon: TrendingUp,
    color: "bg-orange-500",
    steps: [
      "Growth Acceleration: Expand successful campaigns to additional platforms and markets while maintaining profitability and brand consistency.",
      "Long-term Strategy Development: Develop sustainable marketing systems that continue generating results with minimal ongoing intervention, allowing you to focus on writing and content creation.",
    ],
  },
]

export function MarketingProcessWorkflow() {
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
            Our Proven Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            A Systematic Approach to
            <span className="text-purple-600"> Bestseller Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our four-phase marketing workflow ensures every campaign is strategically planned, expertly executed, and
            continuously optimized for maximum impact and sustainable growth.
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
