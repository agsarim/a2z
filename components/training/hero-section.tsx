"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { PlayCircle, BookOpen, Lightbulb } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Dynamic video montage showing workshop sessions, student interactions, and success celebrations, with overlay graphics highlighting key learning outcomes."
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            Workshops & Training
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Master AI-Powered Book Marketing Through{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hands-On Training & Mentorship
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Join 1,000+ authors who have transformed their marketing skills through our comprehensive training
              programs. Learn the exact strategies that have generated over $1 million in book sales.
            </p>
          </div>

          {/* Body Text */}
          <p className="text-lg text-slate-400 leading-relaxed">
            Knowledge without application remains theoretical. That's why our training programs go beyond surface-level
            tips to provide deep, practical education that transforms how authors approach digital marketing. Whether
            you're a complete beginner or an experienced marketer looking to master AI-powered strategies, our workshops
            provide the hands-on experience and ongoing support you need to achieve sustainable success.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our training methodology combines proven marketing principles with cutting-edge AI tools, delivered through
            interactive workshops that ensure you not only learn the concepts but can implement them effectively. Every
            participant leaves with actionable strategies, practical tools, and the confidence to execute
            professional-level marketing campaigns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              <BookOpen className="mr-2 w-5 h-5" />
              Explore Training Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Intro Video
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
