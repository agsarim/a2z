"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "7,500+",
    label: "Authors Published",
    description: "Successful authors across all genres",
    color: "text-blue-400",
  },
  {
    icon: Award,
    value: "30+",
    label: "#1 Bestsellers Created",
    description: "Top rankings achieved",
    color: "text-yellow-400",
  },
  {
    icon: TrendingUp,
    value: "$1M+",
    label: "Revenue Generated",
    description: "For our clients worldwide",
    color: "text-green-400",
  },
  {
    icon: Globe,
    value: "91+",
    label: "Countries Reached",
    description: "Global marketplace presence",
    color: "text-purple-400",
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Results Across the Globe</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our data-driven approach has consistently delivered exceptional results for authors worldwide, establishing
            A2ZPublishing as a leader in digital book marketing.
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
