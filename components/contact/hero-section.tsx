import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Image Suggestion: Professional photo of Saqib in consultation setting with books, charts, and marketing materials visible */}
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Professional consultation setting"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="container relative z-10 grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        {/* Left side: Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Ready to Transform Your Book Into a Bestselling Business Asset?
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl leading-relaxed">
            Schedule a free, no-obligation strategy call today. Get a custom action plan and discover how we can help you achieve your author goals.
            </p>
          </div>
        </div>

        {/* Right side: Contact Form and Calendar */}
        <div className="flex flex-col items-center justify-center space-y-8 rounded-lg bg-white/10 p-8 shadow-lg backdrop-blur-sm border border-white/20">
          <h2 className="text-3xl font-bold text-center">Schedule Your Consultation</h2>
          <form className="w-full space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="book-title" className="text-white">
                Book Title and Genre
              </Label>
              <Input
                id="book-title"
                placeholder="e.g., The Great Novel, Sci-Fi"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="challenges" className="text-white">
                Current Marketing Challenges
              </Label>
              <Textarea
                id="challenges"
                placeholder="Describe your challenges..."
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals" className="text-white">
                Goals and Timeline
              </Label>
              <Textarea
                id="goals"
                placeholder="What are your goals and desired timeline?"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500 min-h-[100px]"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-method" className="text-white">
                  Preferred Contact Method
                </Label>
                <Input
                  id="contact-method"
                  placeholder="e.g., Email, Phone, Zoom"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="best-time" className="text-white">
                  Best Time for Consultation
                </Label>
                <Input
                  id="best-time"
                  placeholder="e.g., Mon 2 PM EST"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <Button className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 transition-colors" type="submit">
              Submit Pre-Consultation Form
            </Button>
          </form>
          <div className="w-full pt-4">
            <h3 className="text-xl font-semibold mb-4 text-center">Calendar Integration</h3>
            <div className="h-80 w-full rounded-md bg-gray-700 flex items-center justify-center text-gray-300 text-center p-4">
              {
                "{ Embedded scheduling calendar showing available consultation times with automatic time zone detection and confirmation system }"
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
