"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react"
import Image from "next/image"

export function BookMarketingHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4a00e005_1px,transparent_1px),linear-gradient(to_bottom,#4a00e005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-fast -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-fast delay-500"></div>
      </div>

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
              <TrendingUp className="w-4 h-4" />
              Book Marketing Services
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Turn Your Published Book Into a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bestselling Business Asset
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Publishing your book is just the beginning. Our proven marketing strategies transform published authors
                into bestselling brands that generate consistent revenue and build lasting reader communities.
              </p>
            </div>

            {/* Body Text */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              The harsh reality of modern publishing is that even the most brilliantly written books can languish in
              obscurity without strategic marketing. With over 4 million books published annually, standing out requires
              more than great content - it demands sophisticated marketing strategies that understand platform
              algorithms, reader psychology, and the complex dynamics of digital book discovery. Our book marketing
              services have generated over $1 million in sales for authors across diverse genres, turning unknown
              writers into recognized authorities in their fields. We don't just run ads; we build comprehensive
              marketing ecosystems that create sustainable, long term success for serious authors who are ready to treat
              their writing as a business.
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
                <DollarSign className="mr-2 w-5 h-5" />
                View Pricing
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
                alt="Dynamic visualization showing book sales growth, social media engagement, and bestseller rankings with upward trending arrows and success metrics."
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end justify-center p-6">
                <p className="text-center text-slate-300 text-sm">
                  Dynamic visualization showing book sales growth, social media engagement, and bestseller rankings.
                </p>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 left-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-teal-300 flex items-center gap-2 border border-teal-500/30"
            >
              <DollarSign className="w-4 h-4" /> Revenue Growth
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 right-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-blue-300 flex items-center gap-2 border border-blue-500/30"
            >
              <TrendingUp className="w-4 h-4" /> Bestseller Status
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
