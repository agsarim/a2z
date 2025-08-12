"use client"

import { Button } from "@/components/ui/button"
import { Mic, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MediaHero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative container mx-auto px-6 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm font-medium">
              <Mic className="w-4 h-4" /> Speaking & Media
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Keynotes & <span className="text-blue-400">Interviews</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Expert insights on AI marketing, digital publishing, and building authority in the creator economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://www.youtube.com/watch?v=HBSFFRLZVmI" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="w-4 h-4 mr-2" /> Watch Featured Talk
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent"
                >
                  Book Speaking Engagement
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                  src="/images/speaking.jpg"
                  alt="Professional speaking engagement"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
