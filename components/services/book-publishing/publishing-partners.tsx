"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import Image from "next/image"

const partners = [
  { name: "Amazon KDP", logo: "/placeholder.svg?height=60&width=120" },
  { name: "IngramSpark", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Apple Books", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Kobo", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Barnes & Noble", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Google Play Books", logo: "/placeholder.svg?height=60&width=120" },
  { name: "OverDrive", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Smashwords", logo: "/placeholder.svg?height=60&width=120" },
]

export function PublishingPartners() {
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
            Our Global Network
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Extensive Distribution Through
            <span className="text-blue-400"> Trusted Partners</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We partner with leading global platforms and distributors to ensure your book reaches readers in every
            corner of the world, maximizing your visibility and sales potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 flex items-center justify-center shadow-lg"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} Logo`}
                width={120}
                height={60}
                className="h-12 object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
