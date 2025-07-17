"use client"

import { motion } from "framer-motion"
import { Globe, Users, TrendingUp, Award } from "lucide-react"

const regions = [
  { name: "North America", percentage: 40, clients: "3,000+" },
  { name: "Europe", percentage: 25, clients: "1,875+" },
  { name: "Asia-Pacific", percentage: 20, clients: "1,500+" },
  { name: "Other Regions", percentage: 15, clients: "1,125+" },
]

const globalStats = [
  {
    icon: Globe,
    value: "91+",
    label: "Countries Served",
    color: "text-blue-500",
  },
  {
    icon: Users,
    value: "7,500+",
    label: "Global Authors",
    color: "text-green-500",
  },
  {
    icon: TrendingUp,
    value: "$1M+",
    label: "Revenue Generated",
    color: "text-purple-500",
  },
  {
    icon: Award,
    value: "30+",
    label: "Bestsellers Created",
    color: "text-yellow-500",
  },
]

export function GlobalPresence() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Global Reach
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Authors
            <span className="text-blue-400"> Worldwide</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven strategies have helped authors achieve success across 91+ countries, establishing A2ZPublishing
            as a truly global leader in digital book marketing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Global Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {globalStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 rounded-xl p-6 text-center"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center ${stat.color}`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Client Distribution</h3>
              <div className="space-y-4">
                {regions.map((region, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{region.name}</span>
                      <span className="text-white font-semibold">{region.clients}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${region.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - World Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-center">Global Impact</h3>

                {/* Simplified World Map Representation */}
                <div className="relative h-64 bg-slate-700 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>

                  {/* Animated Dots for Global Presence */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 20}%`,
                      }}
                    ></motion.div>
                  ))}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-2">91+</div>
                      <div className="text-slate-300">Countries Served</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-300">
                    From New York to Tokyo, London to Sydney - our strategies work across cultures and markets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
