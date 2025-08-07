"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Check, FileText, Target, BarChart2, Award } from "lucide-react"

const workflowSteps = [
  {
    icon: FileText,
    title: "Step 1: Discovery & Strategy",
    description: "We start by diving deep into your manuscript, target audience, and market landscape to build a winning strategy.",
    details: [
      "Comprehensive manuscript analysis",
      "Audience persona development",
      "Competitive landscape review",
      "Custom launch roadmap creation",
    ],
  },
  {
    icon: Target,
    title: "Step 2: Brand & Platform Building",
    description: "We craft a compelling author brand and optimize your online presence to attract and engage your ideal readers.",
    details: [
      "Author brand identity design",
      "Amazon A+ content creation",
      "Social media platform optimization",
      "Email list setup and lead magnet",
    ],
  },
  {
    icon: BarChart2,
    title: "Step 3: Campaign Execution & Growth",
    description: "We launch and manage data-driven marketing campaigns that drive visibility, traffic, and sales.",
    details: [
      "Targeted Amazon PPC advertising",
      "Social media content marketing",
      "Influencer outreach and collaboration",
      "Continuous performance optimization",
    ],
  },
  {
    icon: Award,
    title: "Step 4: Bestseller & Beyond",
    description: "We focus on hitting key milestones and leveraging success to build long-term author equity.",
    details: [
      "Bestseller rank tracking and pushes",
      "Reader review and engagement campaigns",
      "Cross-promotional opportunities",
      "Building a sustainable author business",
    ],
  },
]

export function ProjectWorkflow() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Proven Path to Success</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every successful book launch follows a strategic path. Here’s a look at our four-phase process for turning
            a manuscript into a market leader.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}