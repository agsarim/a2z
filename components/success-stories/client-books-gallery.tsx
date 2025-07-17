"use client"

import { motion } from "framer-motion"
import { BookOpen, Star } from "lucide-react"
import Image from "next/image"

const clientBooks = [
  {
    id: 1,
    title: "The Leadership Book",
    author: "Brenda Bence",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Multiple #1 Bestseller Rankings",
    genre: "Business Leadership",
  },
  {
    id: 2,
    title: "Safety First: A CEO's Guide",
    author: "Gavin Coyle",
    cover: "/placeholder.svg?height=300&width=200",
    results: "#1 Category Bestseller (Safety)",
    genre: "Business/Safety",
  },
  {
    id: 3,
    title: "Publishing Secrets Revealed",
    author: "Albert Griesmayr",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Consistent Bestseller Rankings",
    genre: "Publishing/Business",
  },
  {
    id: 4,
    title: "Consulting Mastery",
    author: "Uma Vanka",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Achieved Consistent Sales Targets",
    genre: "Business/Consulting",
  },
  {
    id: 5,
    title: "The Mindful Leader",
    author: "Jane Doe",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Top 5 in Personal Development",
    genre: "Self-Help",
  },
  {
    id: 6,
    title: "Healthy Habits, Happy Life",
    author: "John Smith",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Increased Sales by 200%",
    genre: "Health & Fitness",
  },
  {
    id: 7,
    title: "Echoes of the Past",
    author: "Emily White",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Reached Top 10 in Historical Fiction",
    genre: "Fiction",
  },
  {
    id: 8,
    title: "AI for Business Growth",
    author: "David Green",
    cover: "/placeholder.svg?height=300&width=200",
    results: "Generated 100+ Consulting Leads",
    genre: "Technical/Business",
  },
]

export function ClientBooksGallery() {
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
            <BookOpen className="w-4 h-4" />
            Our Bestselling Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Showcasing Our Clients' <span className="text-blue-400">Published Success</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore a gallery of books we've helped transform into bestsellers and industry-leading assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {clientBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={`${book.title} by ${book.author}`}
                width={200}
                height={300}
                className="w-full h-auto object-cover aspect-[2/3] group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-white">{book.title}</h3>
                  <p className="text-sm text-slate-300">{book.author}</p>
                  <div className="flex items-center justify-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="text-sm font-semibold">{book.results}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Genre: {book.genre}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
