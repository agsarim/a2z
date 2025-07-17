"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export function DigitalMarketingHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/50"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-4 pt-16 pb-12">
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
              Digital Marketing Services
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI-Powered Digital Marketing That Turns Authors Into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Industry Leaders
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Leverage cutting-edge artificial intelligence and proven digital strategies to dominate Amazon's
                algorithm, expand your global reach, and build a sustainable author business that generates consistent
                revenue.
              </p>
            </div>

            {/* Body Text */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              In today's rapidly evolving digital landscape, traditional marketing approaches are no longer sufficient
              to achieve breakthrough success. The publishing industry has been transformed by artificial intelligence,
              algorithm changes, and shifting consumer behaviors that require sophisticated, data-driven strategies to
              navigate effectively. Saqib's digital marketing services represent the next generation of author
              promotion, combining advanced AI tools with deep platform expertise to create marketing campaigns that
              don't just generate sales - they build lasting author brands that continue to grow and evolve with the
              market.
            </p>

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
                <TrendingUp className="mr-2 w-5 h-5" />
                View Success Stories
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Image/Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Modern digital workspace with AI tools and analytics dashboards"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end justify-center p-6">
                <p className="text-center text-slate-300 text-sm">
                  Visualizing AI-powered marketing automation and analytics.
                </p>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 left-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-blue-300 flex items-center gap-2 border border-blue-500/30"
            >
              <Zap className="w-4 h-4" /> AI Insights
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 right-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-purple-300 flex items-center gap-2 border border-purple-500/30"
            >
              <TrendingUp className="w-4 h-4" /> Growth Metrics
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
