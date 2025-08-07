"use client"

import { motion } from "framer-motion"
import { Globe, Mic, Award } from "lucide-react"
import Image from "next/image"

const speakingStats = [
  { icon: Mic, value: "100+", label: "Talks & Workshops", color: "text-green-400" },
  { icon: Globe, value: "30+", label: "Cities Spoke In", color: "text-blue-400" },
  { icon: Award, value: "15+", label: "Media Features", color: "text-yellow-400" },
  { icon: Globe, value: "91+", label: "Countries Impacted", color: "text-purple-400" },
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
            <Mic className="w-4 h-4" />
            Media & speaking
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sharing what I learn
            <span className="text-blue-400"> on stages and screens</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I speak about AI for marketers, book-to-business strategy, and creator-led growth. Here are a few highlights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {speakingStats.map((stat, index) => (
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
              <h3 className="text-2xl font-bold mb-6">Recent topics</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-slate-300">
                {["AI for marketers (practical playbooks)", "Amazon algorithm deep-dive", "Book-to-business funnels", "Creator-led growth systems", "Authority building in public", "Data-driven decision making"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Media Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/tv-talksho.jpg", alt: "TV talk show" },
                { src: "/images/tv-talkshow2.jpg", alt: "TV interview" },
                { src: "/images/speaking.jpg", alt: "Speaking on stage" },
                { src: "/images/training3.jpg", alt: "Workshop" },
              ].map((m, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-800">
                  <Image src={m.src} alt={m.alt} width={600} height={400} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
