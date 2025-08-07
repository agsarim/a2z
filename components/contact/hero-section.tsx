import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { CheckCircle2, Mail, Calendar, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/training3.jpg"
          alt="Professional consultation setting"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl grid gap-10 md:grid-cols-2 px-4">
        {/* Left side: Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Let&apos;s talk about your next growth move
          </h1>
          <p className="max-w-[46ch] text-lg text-slate-200">
            Share a bit about your goals and I&apos;ll come prepared with practical next steps. No pressure—just a helpful
            conversation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-200 text-sm">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 30+ #1 bestsellers</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clients in 91+ countries</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 20+ years experience</div>
          </div>
          <div className="flex items-center gap-4 pt-2 text-slate-300 text-sm">
            <div className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> saqib@a2zpublishing.com</div>
            <div className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> Weekdays, 9 AM – 6 PM</div>
          </div>
        </div>

        {/* Right side: Contact Form and Calendar */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-sm border border-white/20">
          <h2 className="text-2xl font-bold text-center">Request a free consultation</h2>
          <form id="hero-section-form" className="w-full space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input id="name" placeholder="Your name" required className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" placeholder="you@example.com" type="email" required className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project" className="text-white">Project or Book</Label>
              <Input id="project" placeholder="e.g., Book launch, Course growth, Leadgen" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">What would you like to achieve?</Label>
              <Textarea id="message" placeholder="Share context, links, and timelines" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-[110px]" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-method" className="text-white">Preferred contact method</Label>
                <Input id="contact-method" placeholder="Email, Phone, Zoom" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="best-time" className="text-white">Best time</Label>
                <Input id="best-time" placeholder="e.g., Mon 2 PM" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              </div>
            </div>
            <Button className="w-full py-3 text-base bg-blue-600 hover:bg-blue-700 transition-colors" type="submit">
              Submit request <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          <div className="w-full pt-2">
            <div className="h-56 w-full rounded-md bg-gray-700/60 flex items-center justify-center text-gray-300 text-center p-4">
              Scheduling calendar embed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
