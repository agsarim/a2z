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

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-12">
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
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Gain the skills to thrive as an author. Our hands-on training programs teach the exact AI-powered strategies that have generated over $1 million in sales.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                <BookOpen className="mr-2 w-5 h-5" />
                Explore Training Programs
              </Button>
              <a href="/contact" className="inline-block">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                  Book Free Consultation
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-xl">
              <Image
                src="/images/training2.jpg?height=400&width=600"
                alt="Training workshop environment showing interactive sessions, AI tools demonstrations, and student engagement"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end justify-center p-6">
                <p className="text-center text-slate-300 text-sm">
                  Interactive training sessions with hands-on AI marketing tools
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
              <Lightbulb className="w-4 h-4" /> Live Training
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 right-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-purple-300 flex items-center gap-2 border border-purple-500/30"
            >
              <BookOpen className="w-4 h-4" /> Practical Skills
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
