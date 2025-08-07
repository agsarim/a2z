"use client"

import { motion } from "framer-motion"
import { Calendar, Rocket, Mic, Award } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: "20+",
    label: "Years of Experience",
    description: "Marketing, publishing, and growth leadership",
    color: "text-blue-500",
  },
  {
    icon: Rocket,
    value: "300+",
    label: "Campaigns Launched",
    description: "Full-funnel, data-driven execution",
    color: "text-purple-500",
  },
  {
    icon: Award,
    value: "30+",
    label: "#1 Bestsellers",
    description: "Amazon categories across regions",
    color: "text-yellow-500",
  },
  {
    icon: Mic,
    value: "100+",
    label: "Talks & Workshops",
    description: "Keynotes, trainings, and panels",
    color: "text-green-500",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">By the numbers</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A snapshot of the outcomes I&apos;ve helped create through hands-on execution, training, and mentorship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="text-center space-y-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
