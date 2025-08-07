"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Type, Book, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Palette,
    title: "Bespoke Cover Design",
    description: "We create stunning, genre-specific book covers that capture attention and entice readers. From minimalist designs to intricate illustrations, our artists bring your vision to life.",
  },
  {
    icon: Type,
    title: "Expert Interior Formatting",
    description: "A seamless reading experience is crucial. We provide professional typesetting and layout design for both print and digital formats, ensuring your book is beautiful inside and out.",
  },
  {
    icon: Book,
    title: "Multi-Format Conversion",
    description: "Reach readers on every platform. We handle the technical conversion to all major formats, including ebook (ePub, Mobi), paperback, and hardcover.",
  },
  {
    icon: Globe,
    title: "Global Distribution Setup",
    description: "We navigate the complexities of global distribution, setting up your book on major platforms like Amazon KDP, IngramSpark, and Apple Books to maximize your reach.",
  },
]

export function PublishingServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Publishing Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a suite of à la carte services to bring your manuscript to the world with the highest level of
            professionalism and care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Request a Custom Publishing Quote
          </Button>
        </motion.div>
      </div>
    </section>
  )
}