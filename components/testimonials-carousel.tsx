"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Daniel Jackman",
    title:
      "Certified Chair, Entrepreneur with multi-national company experience | Board member/Independent Director | Finance expert",
    linkedin: "https://www.linkedin.com/in/daniel-jackman-03956b2/",
    service: "Marketing Consulting",
    rating: 5.0,
    date: "July 14, 2025",
    testimonial:
      "We have worked with Syed for over 3 years. His work specializes on Amazon ads for our English, German and Spanish language editions in multiple Amazon markets. If you publish your books on Amazon, Syed can help you market your books effectively to reach a great audience and thus greater sales.",
    avatar: "/images/male.png",
  },
  {
    name: "Yasmin Elahi",
    title: "Author",
    linkedin: "https://www.linkedin.com/in/yasmin-elahi-a7421151/",
    service: "Social Media Marketing",
    rating: 5.0,
    date: "November 7, 2023",
    testimonial:
      "It was really a pleasure to interact with Syed Saqib Mumtaz. He knows his job well, is polite, patient and very Cooperative. I had approached him for the Promotion of my book on Facebook and the way he guided me was beyond excellent. Saqib is a valuable name in the field of promoting reading and guiding writers to strive for excellence. I will highly recommend him if you want value for your money.",
    avatar: "/images/male.png",
  },
  {
    name: "Kévin Romanteau",
    title: "Event-Driven | Investor | Finance Author",
    linkedin: "https://www.linkedin.com/in/kevinromanteau/",
    service: "Marketing Strategy",
    rating: 5.0,
    date: "August 19, 2023",
    testimonial:
      "I had the pleasure to counsel Syed for launching my book and can confidently say that he is dedicated and well-qualified.",
    avatar: "/images/male.png",
  },
  {
    name: "Gavin Coyle CMIOSH I MBS",
    title:
      "CEO I Safety Recruitment Specialist & Business Expert | Podcast Host at I'm the Gaffer Construction Business Podcast | Board Advisor & Thought leader | Amazon Author | EHS software shareholder",
    linkedin: "https://www.linkedin.com/in/gavincoyleceo/",
    service: "Digital Marketing",
    rating: 5.0,
    date: "January 20, 2023",
    testimonial:
      "Syed is amazing, he is a true expert in his field. He is always available and makes great recommendations to help make your book No 1 in its category. He also plays a vital role in managing how your book receives traffic to amazon. Highly recommended",
       avatar: "/images/male.png",

  },
  {
    name: "Brenda Bence",
    title:
      "High-Stakes C-Suite Succession & Leadership Coach/Advisor | Trusted by Boards, CEOs & ELTs of the World's Most Influential Corporations | Experience Across 6 Continents | Harvard MBA",
    linkedin: "https://www.linkedin.com/in/brendabence/",
    service: "Digital Marketing",
    rating: 5.0,
    date: "November 20, 2022",
    testimonial:
      "I have worked with Syed for the past year, as he helped me advertise one of our books on Amazon. Syed was devoted to doing what he could to help the book achieve good sales. In terms of actual sales revenues, there were ups and downs throughout the year - and Syed had warned me that would likely be the case. But now, the year of focus and attention has paid off, and the book has achieved strong sales and multiple bestseller status. I am grateful to Syed for his attention and suggestions!",
    avatar: "/images/male.png",

  },
  {
    name: "Leah Stockford",
    title: "Music Marketing Consultant / Author",
    linkedin: "https://www.linkedin.com/in/leah-stockford-1459ab71/",
    service: "Digital Marketing",
    rating: 5.0,
    date: "November 13, 2022",
    testimonial:
      "Have been working with Saqib for over a year now on Amazon Advertising for my books. Saqib has helped me become a number 1 bestseller frequently and continue to help grow my business. Would highly recommend.",
        avatar: "/images/male.png",

  },
]

export  function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover how we've helped authors and businesses achieve remarkable success through strategic marketing and
            expert guidance.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-500" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-300 text-xs font-medium mb-4">
                        {currentTestimonial.service}
                      </div>
                      <blockquote className="text-xl text-slate-300 italic mb-6 leading-relaxed">
                        {currentTestimonial.testimonial}
                      </blockquote>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={currentTestimonial.avatar || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                        unoptimized
                      />
                      <div>
                        <p className="font-semibold text-white text-lg">{currentTestimonial.name}</p>
                        <p className="text-slate-400 text-sm mb-2 max-w-md">{currentTestimonial.title}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-slate-400 text-sm">• {currentTestimonial.date}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
                    >
                      <a
                        href={currentTestimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="w-full bg-slate-700 rounded-full h-1">
              <motion.div
                className="bg-blue-500 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-slate-400 text-sm mt-2">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
