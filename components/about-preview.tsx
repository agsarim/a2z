"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Award, BookOpen, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const credentials = [
  {
    icon: Award,
    title: "MPhil Cybersecurity",
    subtitle: "National Defence University",
    color: "text-blue-500",
  },
  {
    icon: BookOpen,
    title: "BE Telecommunications",
    subtitle: "NUST - Top Engineering University",
    color: "text-green-500",
  },
  {
    icon: Users,
    title: "LinkedIn Certified",
    subtitle: "Marketing Professional",
    color: "text-purple-500",
  },
]

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                Meet Your Strategic Partner
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Digital Marketing Strategist &<span className="text-blue-600"> AI Implementation Expert</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Syed Saqib Mumtaz Hashmi stands at the forefront of digital book marketing and AI-powered publishing
                solutions. With over a decade of experience transforming authors into bestselling success stories, Saqib
                combines deep technical expertise with proven marketing strategies that deliver measurable results.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${credential.color}`}
                  >
                    <credential.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{credential.title}</div>
                    <div className="text-sm text-slate-600">{credential.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View Full Biography
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Image
                  src="/images/headshot2-hq.jpg"
                  alt="Syed Saqib Mumtaz Hashmi - Digital Marketing Expert"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />

                {/* Floating Achievement Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-xs text-slate-600">Years Experience</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-2xl font-bold text-green-600">91</div>
                  <div className="text-xs text-slate-600">Countries Served</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
