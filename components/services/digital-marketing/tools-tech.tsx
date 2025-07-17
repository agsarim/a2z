"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, BarChart2, Settings, CheckCircle } from "lucide-react"

const toolCategories = [
  {
    icon: Brain,
    title: "AI-Powered Marketing Stack",
    description: "Leveraging cutting-edge artificial intelligence for content creation and optimization.",
    tools: [
      "ChatGPT & Gemini: Advanced copywriting and content optimization",
      "MidJourney: Visual content creation and graphic design",
      "Jasper AI: Long-form content development and blog writing",
      "Canva Pro: Professional design templates and brand consistency",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart2,
    title: "Analytics & Optimization Tools",
    description: "Data-driven insights for continuous performance tracking and strategic refinement.",
    tools: [
      "Amazon Brand Analytics: Deep insights into customer behavior and market trends",
      "Google Analytics 4: Comprehensive website and traffic analysis",
      "Facebook Analytics: Social media performance tracking and audience insights",
      "Custom Dashboards: Proprietary reporting systems for real-time campaign monitoring",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Settings,
    title: "Automation & Efficiency Tools",
    description: "Streamlining workflows and maximizing productivity through intelligent automation.",
    tools: [
      "Zapier Integration: Automated workflows that connect multiple platforms",
      "Email Marketing Automation: Sophisticated drip campaigns and reader nurturing sequences",
      "Social Media Scheduling: Automated content distribution across multiple platforms",
      "CRM Integration: Customer relationship management and lead tracking systems",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function ToolsTech() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4" />
            Our Technology Stack
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Cutting-Edge Tools for
            <span className="text-green-600"> Maximum Impact</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We utilize a sophisticated blend of AI-powered platforms, advanced analytics, and robust automation tools to
            ensure your marketing campaigns are efficient, effective, and future-proof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{category.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-600">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
