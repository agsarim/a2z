"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm font-medium">
              <Zap className="w-4 h-4" />
              AI-Powered Marketing Solutions
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your Book Into a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bestseller
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Join 7,500+ authors who've achieved bestseller status through our proven digital marketing strategies.
                From manuscript to marketplace dominance - we make publishing dreams reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Get Your Free Marketing Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-sm">91+ Countries Served</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm">$1M+ Revenue Generated</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">Live Performance Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">7,500+</div>
                    <div className="text-slate-400 text-sm">Authors Published</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">30+</div>
                    <div className="text-slate-400 text-sm">#1 Bestsellers</div>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="space-y-3">
                  <div className="text-slate-300 text-sm">Revenue Growth Trend</div>
                  <div className="space-y-2">
                    {[85, 92, 78, 96, 88, 94].map((value, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-xs text-slate-500 w-8">Q{index + 1}</div>
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          ></motion.div>
                        </div>
                        <div className="text-xs text-slate-400 w-8">{value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
