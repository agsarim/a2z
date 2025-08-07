"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, BarChart2, Megaphone, Users } from "lucide-react"

const expertiseAreas = [
  {
    icon: Target,
    title: "Amazon PPC Mastery",
    description: "We design and manage hyper-targeted Amazon advertising campaigns that maximize visibility and ROI.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Analytics",
    description: "Our strategies are informed by deep data analysis to ensure every marketing dollar is spent effectively.",
  },
  {
    icon: Megaphone,
    title: "Social Media Engagement",
    description: "We build and nurture engaged reader communities across all major social platforms.",
  },
  {
    icon: Users,
    title: "Author Platform Building",
    description: "We focus on long-term strategies that build your brand and create sustainable success.",
  },
]

export function OurExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Core Expertise</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our book marketing success is built on a foundation of deep expertise in the areas that matter most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
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
                      <area.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{area.title}</h3>
                  </div>
                  <p className="text-slate-600">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}