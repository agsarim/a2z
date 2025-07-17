"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Printer, Monitor, Search, Palette } from "lucide-react"
import Image from "next/image"

const qualityStandards = [
  {
    category: "Technical Excellence",
    description:
      "Every book we publish undergoes rigorous quality control processes to ensure professional standards across all formats and platforms.",
    subCategories: [
      {
        title: "Print Quality Standards:",
        icon: Printer,
        color: "text-blue-600",
        items: [
          "High-resolution cover and interior design optimized for professional printing",
          "Proper margins, spacing, and typography that meets industry standards",
          "Color accuracy and consistency across different printing methods",
          "Binding and durability considerations for long-term reader satisfaction",
        ],
      },
      {
        title: "Digital Quality Standards:",
        icon: Monitor,
        color: "text-green-600",
        items: [
          "Responsive formatting that adapts to different screen sizes and reading devices",
          "Optimized file sizes for fast download and smooth reading experience",
          "Interactive table of contents and navigation features",
          "Compatibility testing across major ebook platforms and devices",
        ],
      },
    ],
  },
  {
    category: "Marketplace Optimization",
    description: "Beyond technical quality, we ensure your book is strategically positioned for marketplace success.",
    subCategories: [
      {
        title: "SEO Optimization:",
        icon: Search,
        color: "text-purple-600",
        items: [
          "Keyword-rich titles and descriptions that improve search visibility",
          "Category selection that maximizes discoverability within your genre",
          "Competitive pricing strategies based on market analysis",
          "Review and rating optimization strategies",
        ],
      },
      {
        title: "Visual Appeal:",
        icon: Palette,
        color: "text-yellow-600",
        items: [
          "Cover designs that stand out in crowded marketplace thumbnails",
          "Professional author photos and branding materials",
          "Consistent visual identity across all marketing materials",
          "Genre-appropriate design elements that appeal to target readers",
        ],
      },
    ],
  },
]

export function QualityShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Quality Assurance Standards
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Uncompromising Quality for
            <span className="text-blue-600"> Every Published Book</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our rigorous quality control processes ensure technical excellence and strategic marketplace positioning for
            every book we publish.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {qualityStandards.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-slate-50 to-blue-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.category}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{category.description}</p>
                  <div className="space-y-8">
                    {category.subCategories.map((sub, subIndex) => (
                      <div key={subIndex}>
                        <div className="flex items-center gap-3 mb-4">
                          <sub.icon className={`w-6 h-6 ${sub.color}`} />
                          <h4 className="text-xl font-semibold text-slate-800">{sub.title}</h4>
                        </div>
                        <ul className="space-y-3">
                          {sub.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery / Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visualizing Our Quality</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                See the difference professional publishing makes with examples of our work and quality comparisons.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Before/after examples of manuscript transformation"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover shadow-md mb-2"
                    unoptimized
                  />
                  <p className="text-sm text-slate-500">Before/after examples of manuscript transformation.</p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Gallery of published book covers across different genres"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover shadow-md mb-2"
                    unoptimized
                  />
                  <p className="text-sm text-slate-500">Gallery of published book covers across different genres.</p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Quality comparison charts showing professional vs. amateur publishing"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover shadow-md mb-2"
                    unoptimized
                  />
                  <p className="text-sm text-slate-500">
                    Quality comparison charts showing professional vs. amateur publishing.
                  </p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Distribution network map showing global reach"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover shadow-md mb-2"
                    unoptimized
                  />
                  <p className="text-sm text-slate-500">Distribution network map showing global reach.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
