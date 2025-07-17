"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Layout, Globe, Settings, CheckCircle } from "lucide-react"

const platformCategories = [
  {
    icon: BookOpen,
    title: "Publishing Platforms",
    description: "Key platforms for global distribution and direct sales.",
    tools: [
      "Amazon KDP: Kindle Direct Publishing for eBooks and Print-on-Demand paperbacks/hardcovers",
      "IngramSpark: Global distribution to bookstores, libraries, and online retailers",
      "Apple Books: Reach readers on Apple devices worldwide",
      "Kobo Writing Life: Access to Kobo's global eBook and audiobook market",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Layout,
    title: "Design & Formatting Tools",
    description: "Industry-standard software for professional book design and layout.",
    tools: [
      "Adobe InDesign: Professional interior layout and print-ready file creation",
      "Adobe Photoshop & Illustrator: High-quality cover design and graphic elements",
      "Vellum: Beautiful eBook and print book formatting for Mac users",
      "Calibre: eBook conversion and management for various formats",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Settings,
    title: "Editing & Quality Assurance",
    description: "Advanced tools to ensure manuscript perfection and consistency.",
    tools: [
      "Grammarly Business: AI-powered grammar and style checking",
      "ProWritingAid: Comprehensive writing analysis and editing suggestions",
      "Microsoft Word: Track changes and collaborative editing for manuscripts",
      "Plagiarism Checkers: Ensuring originality and content integrity",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Globe,
    title: "Legal & Administrative",
    description: "Tools and resources for ISBN, copyright, and metadata management.",
    tools: [
      "Bowker (MyIdentifiers): Official source for ISBNs in the US",
      "Copyright Office: Registration for intellectual property protection",
      "ONIX Feed Generators: Standardized metadata for book industry partners",
      "Royalty Tracking Software: Monitoring sales and earnings across platforms",
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export function PlatformsTech() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4" />
            Our Technology Stack
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Industry-Leading Tools for
            <span className="text-green-600"> Flawless Publishing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We leverage a robust suite of professional software and platforms to ensure every aspect of your book's
            creation and distribution is handled with precision and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{category.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-600">{tool}</span>
                        </div>
                      ))}
                    </div>
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
