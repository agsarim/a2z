"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Rocket } from "lucide-react"
import Image from "next/image"

export function BookPublishingHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-800 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,200,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,200,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
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
              <BookOpen className="w-4 h-4" />
              Book Publishing Services
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                From Manuscript to Marketplace: Professional Publishing That Positions You for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Success
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Transform your manuscript into a professionally published book with our comprehensive publishing
                services. We handle every technical detail while you focus on what matters most - sharing your message
                with the world.
              </p>
            </div>

            {/* Body Text */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              The journey from completed manuscript to published book can feel overwhelming, especially when you're
              navigating the complex landscape of modern publishing options. Traditional publishing routes often involve
              lengthy delays, limited creative control, and reduced profit margins, while self-publishing can seem
              technically daunting for authors who want to focus on writing rather than learning complex publishing
              systems. Our comprehensive publishing services bridge this gap by providing professional-grade publishing
              support that maintains your creative control and profit margins while ensuring your book meets the highest
              industry standards. We've successfully published over 7,500 authors across 91 countries, creating books
              that not only look professional but are strategically positioned for marketplace success from day one.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Start Your Publishing Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              >
                <Rocket className="mr-2 w-5 h-5" />
                View Our Portfolio
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
                alt="Professional montage showing the publishing process from manuscript to finished books in multiple formats (ebook, paperback, hardcover)."
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end justify-center p-6">
                <p className="text-center text-slate-300 text-sm">
                  Professional montage showing the publishing process from manuscript to finished books in multiple
                  formats (ebook, paperback, hardcover).
                </p>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 left-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-indigo-300 flex items-center gap-2 border border-indigo-500/30"
            >
              <BookOpen className="w-4 h-4" /> Manuscript Ready
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 right-1/4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-blue-300 flex items-center gap-2 border border-blue-500/30"
            >
              <Rocket className="w-4 h-4" /> Launch Success
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
