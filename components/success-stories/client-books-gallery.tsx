"use client"

import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Star, X, Maximize2, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const clientBooks = [
  {
    id: 1,
    title: "Amazon Way",
    author: "Success Story",
    cover: "/images/Books/amazon way.JPG",
    results: "#1 Bestseller Ranking",
    genre: "Business Success",
    description:
      "Achieved #1 bestseller status on Amazon through strategic marketing and optimization. This book provided a comprehensive guide to navigating the Amazon ecosystem for aspiring authors.",
    externalLink: "#",
  },
  {
    id: 2,
    title: "Gavin Coyle",
    author: "Safety Leadership",
    cover: "/images/Books/Gavin.jpg",
    results: "#1 Category Bestseller",
    genre: "Business/Safety",
    description:
      "Dominated the safety category with expert positioning and targeted campaigns. Gavin's insights redefined industry standards for workplace safety.",
    externalLink: "#",
  },
  {
    id: 3,
    title: "Nicole's Success",
    author: "Personal Achievement",
    cover: "/images/Books/NICOLE.jpg",
    results: "Top 5 Bestseller",
    genre: "Personal Development",
    description:
      "Reached top 5 in personal development through compelling storytelling and audience engagement. Nicole's journey inspired thousands to unlock their full potential.",
    externalLink: "#",
  },
  {
    id: 4,
    title: "Best Seller Laeh",
    author: "Publishing Success",
    cover: "/images/Books/best seller Laeh.JPG",
    results: "Multiple #1 Rankings",
    genre: "Self-Help",
    description:
      "Secured multiple #1 rankings across different categories with strategic launch planning. Laeh's self-help guide became a cornerstone for personal growth.",
    externalLink: "#",
  },
  {
    id: 5,
    title: "Best Seller Claudia",
    author: "Business Excellence",
    cover: "/images/Books/best seller claudia.PNG",
    results: "Consistent Bestseller",
    genre: "Business Leadership",
    description:
      "Maintained consistent bestseller status through ongoing optimization and audience building. Claudia's leadership principles are now a benchmark in the corporate world.",
    externalLink: "#",
  },
  {
    id: 6,
    title: "Power of Face Reading",
    author: "Specialized Expertise",
    cover: "/images/Books/best seller power of facereading.JPG",
    results: "Top Category Performance",
    genre: "Specialized Knowledge",
    description:
      "Excelled in specialized knowledge category with unique positioning and expert authority. This book brought ancient wisdom to a modern audience.",
    externalLink: "#",
  },
  {
    id: 7,
    title: "Books of Enoch",
    author: "Historical Success",
    cover: "/images/Books/books of enoch.JPG",
    results: "Historical Bestseller",
    genre: "Historical/Religious",
    description:
      "Achieved bestseller status in historical and religious categories through authentic storytelling. A deep dive into ancient texts made accessible to contemporary readers.",
    externalLink: "#",
  },
  {
    id: 8,
    title: "David's Achievement",
    author: "Author Success",
    cover: "/images/Books/david.JPG",
    results: "Bestseller Status",
    genre: "Business/Personal",
    description:
      "Reached bestseller status by combining personal experience with business expertise. David's candid account resonated with a broad audience seeking practical advice.",
    externalLink: "#",
  },
  {
    id: 9,
    title: "Don's Leadership",
    author: "Executive Excellence",
    cover: "/images/Books/don.JPG",
    results: "Top 10 Ranking",
    genre: "Leadership/Business",
    description:
      "Broke into top 10 leadership rankings with executive-focused content and strategic positioning. Don's book became a go-to resource for aspiring leaders.",
    externalLink: "#",
  },
  {
    id: 10,
    title: "Gifted Success",
    author: "Talent Recognition",
    cover: "/images/Books/gifted.JPG",
    results: "Consistent Sales Growth",
    genre: "Personal Development",
    description:
      "Sustained consistent sales growth through ongoing audience development and content optimization. This book helped readers discover and harness their unique talents.",
    externalLink: "#",
  },
  {
    id: 11,
    title: "Jason's Journey",
    author: "Transformation Story",
    cover: "/images/Books/jason.JPG",
    results: "Bestseller Achievement",
    genre: "Business/Transformation",
    description:
      "Achieved bestseller status through compelling transformation narrative and authentic storytelling. Jason's personal journey offered a blueprint for profound change.",
    externalLink: "#",
  },
  {
    id: 12,
    title: "Mike Swigunski",
    author: "International Success",
    cover: "/images/Books/mike swigunski.JPG",
    results: "Global Bestseller",
    genre: "International Business",
    description:
      "Reached global bestseller status with international market positioning and cross-cultural appeal. Mike's expertise in global markets proved invaluable.",
    externalLink: "#",
  },

 
  {
    id: 15,
    title: "New Release Success",
    author: "Launch Excellence",
    cover: "/images/Books/new release.PNG",
    results: "New Release #1",
    genre: "Launch Strategy",
    description:
      "Achieved #1 new release status through expertly orchestrated launch campaign and timing. A perfect example of a successful market entry.",
    externalLink: "#",
  },
  {
    id: 16,
    title: "Nicole's Second Success",
    author: "Repeat Achievement",
    cover: "/images/Books/nicole2.jpg",
    results: "Multiple Bestsellers",
    genre: "Consistent Excellence",
    description:
      "Demonstrated consistent excellence with multiple bestseller achievements across different projects. Nicole's continued success is an inspiration.",
    externalLink: "#",
  },
  {
    id: 17,
    title: "Top New Release",
    author: "Market Leader",
    cover: "/images/Books/top new release.JPG",
    results: "Market Dominance",
    genre: "Market Leadership",
    description:
      "Established market leadership position through strategic new release positioning and competitive analysis. This book set the standard in its category.",
    externalLink: "#",
  },
  {
    id: 18,
    title: "Chair Yoga Best Seller",
    author: "Niche Excellence",
    cover: "/images/Books/yoga chair best seller.JPG",
    results: "Niche #1 Bestseller",
    genre: "Health/Fitness",
    description:
      "Dominated the health and fitness niche with specialized expertise and targeted audience engagement. This unique guide resonated with a dedicated community.",
    externalLink: "#",
  },
]

export function ClientBooksGallery() {
  const [selectedBook, setSelectedBook] = useState<
    (typeof clientBooks)[0] | null
  >(null)

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
            Showcasing Our Clients'{" "}
            <span className="text-blue-400">Published Success</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore a gallery of books we've helped transform into bestsellers
            and industry-leading assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <div
                className="relative rounded-lg overflow-hidden bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedBook(book)}
                role="button"
                tabIndex={0}
              >
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 w-full flex justify-between items-center">
                      <div className="text-white">
                        <h3 className="font-bold text-xl leading-tight">
                          {book.title}
                        </h3>
                        <p className="text-base text-slate-300">
                          {book.author}
                        </p>
                      </div>
                      <div className="bg-blue-500 text-white p-2 rounded-full">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-400">
                      {book.genre}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <span className="text-xs font-semibold">
                        {book.results}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {book.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TOP/BOTTOM MODAL LAYOUT */}
        <AnimatePresence>
          {selectedBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedBook(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-slate-800 rounded-xl shadow-2xl overflow-hidden max-w-3xl w-full mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full z-20 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Vertical layout container */}
                <div className="flex flex-col">
                  {/* Image Section (Top) */}
                  <div className="relative w-full aspect-video bg-black/20">
                    <Image
                      src={selectedBook.cover}
                      alt={`${selectedBook.title} by ${selectedBook.author}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                      unoptimized
                    />
                  </div>

                  {/* Details Section (Bottom) */}
                  <div className="p-6 sm:p-8">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-1">
                          {selectedBook.title}
                        </h2>
                        <p className="text-lg text-slate-300">
                          {selectedBook.author}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full text-sm font-semibold">
                          <Star className="w-4 h-4 fill-yellow-400" />
                          {selectedBook.results}
                        </span>
                        <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                          {selectedBook.genre}
                        </span>
                      </div>

                      <p className="text-slate-300 leading-relaxed text-base pt-2">
                        {selectedBook.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <a
                        href={selectedBook.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        View Full Story <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}