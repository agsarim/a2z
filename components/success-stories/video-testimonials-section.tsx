"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Youtube } from "lucide-react"
import { useState } from "react"

const videoTestimonials = [
  {
    id: "video1",
    title: "Gavin Coyle",
    description:
      "Author Gavin Coyle describes How we were able to help his book 'Workplace Safety On A Budget' . Our Marketing Strategy was to focus on Amazon PPC ads and Using Linkedin Ads to reach Health Safety Officials and CEOs / Founders. ",
    youtubeId: "B3y1zgU45Ps",
  },
  {
    id: "video2",
    title: "Byron Tully ",
    description:
      "Byron Tully is one of our most successful authors. We have been working with him for more then a year and brought his book to next level by running and optimizing Amazon PPC ads for him.  ",
    youtubeId: "FU4NZbTWCek",
  },
  {
    id: "video3",
    title: "Leah Gail",
    description: `Success story from our bestselling author Leah Gail. We made our author Leah Gail a "Bestselling Author" by focusing primarily on Amazon PPC ads and targeting different marketplaces. Her book "Extraordinary Women In History: 70 Remarkable Women Who Made a Difference, Inspired & Broke Barriers" has become a bestseller many times consistently.`,
    youtubeId: "NzZxVK5cwak",
  },
  {
    id: "video4",
    title: "Darren",
    description: `Darren, author of "ONLY for the SERIOUS - PERMANENT Weight Loss", shares his first-hand experience with our expert book marketing services.`,
    youtubeId: "HRDbtPqZ7nI",
  },
]

export function VideoTestimonialsSection() {
  const [activeVideoId, setActiveVideoId] = useState(videoTestimonials[0].youtubeId)
  const [activeVideoTitle, setActiveVideoTitle] = useState(videoTestimonials[0].title)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Youtube className="w-4 h-4" />
            Video Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Hear Directly From Our <span className="text-red-600">Successful Authors</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch inspiring stories and firsthand accounts of how our strategies have helped authors achieve their
            publishing and business goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-lg bg-slate-900 text-white">
              <CardContent className="p-6">
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold mb-2">{activeVideoTitle}</h3>
                <p className="text-slate-300 text-sm">
                  {videoTestimonials.find((v) => v.youtubeId === activeVideoId)?.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Playlist */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">More Testimonials</h3>
                <div className="space-y-4">
                  {videoTestimonials.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
                        activeVideoId === video.youtubeId
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-900"
                      }`}
                      onClick={() => {
                        setActiveVideoId(video.youtubeId)
                        setActiveVideoTitle(video.title)
                      }}
                    >
                      <PlayCircle className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{video.title}</h4>
                        <p className="text-sm text-slate-600">{video.description.substring(0, 50)}...</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
