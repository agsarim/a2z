"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    title: "The Quantum Leap",
    author: "Dr. Evelyn Reed",
    category: "Science & Technology",
    image: "/placeholder.svg?height=400&width=300",
    description: "A complex non-fiction manuscript transformed into an elegant, accessible book for a mainstream audience.",
    link: "#",
  },
  {
    title: "Chronicles of Aethel",
    author: "Leo Vance",
    category: "Fantasy Fiction",
    image: "/placeholder.svg?height=400&width=300",
    description: "Complete publishing suite, including custom cover illustration, interior design, and multi-format distribution.",
    link: "#",
  },
  {
    title: "The Chef's Garden",
    author: "Maria Flores",
    category: "Cookbook & Lifestyle",
    image: "/placeholder.svg?height=400&width=300",
    description: "A visually-rich cookbook with complex layout requirements, delivered flawlessly in print and digital.",
    link: "#",
  },
]

export function FeaturedPublishingProjects() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Publishing Portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We take pride in every book we publish, ensuring each one meets the highest standards of quality and
            professionalism.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={`Book cover for ${project.title}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-purple-600 font-semibold mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <Button variant="outline" className="w-full">
                      View Project Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
