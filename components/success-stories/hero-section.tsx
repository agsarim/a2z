"use client"

import { motion } from "framer-motion"
import { Star, Award, TrendingUp, CheckCircle, Trophy, Sparkles, Zap, Rocket, Crown } from "lucide-react"

// Array of icons to use for the background pattern
const backgroundIcons = [Star, Award, TrendingUp, CheckCircle, Trophy, Sparkles, Zap, Rocket, Crown]

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements (existing blur circles) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full"></div>
      </div>

      {/* New Dynamic Background Pattern (conic gradient) */}
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,_var(--tw-gradient-stops))] from-indigo-950/50 via-purple-950/50 to-fuchsia-950/50 opacity-30"></div>

      {/* Icon Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => {
          const Icon = backgroundIcons[i % backgroundIcons.length]
          const size = Math.random() * (60 - 30) + 30 // Random size between 30px and 60px
          const top = Math.random() * 100
          const left = Math.random() * 100
          const delay = Math.random() * 5 // Random animation delay
          const animation = Math.random() > 0.5 ? "animate-float-slow" : "animate-pulse-slow"
          const opacity = Math.random() * (0.15 - 0.05) + 0.05 // Random opacity between 0.05 and 0.15

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: opacity, scale: 1 }}
              transition={{ duration: 1, delay: delay }}
              className={`absolute ${animation}`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                color: `rgba(255, 255, 255, ${opacity})`, // White icons with varying opacity
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          )
        })}
      </div>

      {/* Main Content - now full width and centered, with higher z-index */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto" // Centered and max-width for readability
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 text-yellow-300 text-sm font-medium">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Real Authors, Real Results,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real Success Stories
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Discover how authors from around the world have transformed their publishing dreams into bestselling
              reality through our proven marketing strategies and comprehensive support.
            </p>
          </div>

          {/* Body Text */}
          <p className="text-lg text-slate-400 leading-relaxed">
            Success in publishing isn't about luck or connections - it's about implementing proven strategies with
            consistent execution and expert guidance. Our clients represent diverse genres, backgrounds, and experience
            levels, but they all share one common trait: the commitment to treating their writing as a serious business
            worthy of professional marketing investment.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            The following success stories represent just a fraction of the authors we've helped achieve their publishing
            goals. Each story demonstrates different aspects of our comprehensive approach, from first-time authors
            achieving unexpected success to established writers breaking through to new levels of recognition and
            revenue.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
