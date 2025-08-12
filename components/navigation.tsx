"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Syed", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Book Publishing", href: "/services/book-publishing" },
      { name: "Book Marketing", href: "/services/book-marketing" },
      { name: "Workshops & Training", href: "/training" },
    ],
  },
  { name: "Success Stories", href: "/success-stories" },
    { name: "Media", href: "/media" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimerRef = useRef<number | null>(null)
  const pathname = usePathname()
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }
  const openDropdown = (name: string) => {
    clearCloseTimer()
    setActiveDropdown(name)
  }
  const scheduleCloseDropdown = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => setActiveDropdown(null), 160)
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className={`mx-auto max-w-6xl px-4 pt-3 transition-all ${scrolled ? "pb-2" : "pb-4"}`}>
        <div className="flex items-center justify-between">
          {/* Left: Brand chip */}
          <Link href="/" className="hidden sm:flex items-center">
            <div className="rounded-full ring-1 ring-slate-200 bg-white/80 backdrop-blur shadow-sm px-3 py-1.5 flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md" />
              <span className="font-medium text-slate-900 text-sm">Syed Saqib Mumtaz Hashmi</span>
            </div>
          </Link>
          <Link href="/" className="sm:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md shadow-sm" />
          </Link>

          {/* Center: Pill Nav */}
          <div className="hidden lg:block flex-1">
            <motion.div
              initial={false}
              animate={{
                paddingLeft: scrolled ? 10 : 12,
                paddingRight: scrolled ? 10 : 12,
                paddingTop: scrolled ? 6 : 8,
                paddingBottom: scrolled ? 6 : 8,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="mx-auto max-w-4xl rounded-full ring-1 ring-slate-200 bg-white/80 backdrop-blur shadow-sm"
            >
              <div className="flex items-center justify-center gap-0.5">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setHovered(item.name)
                        if (item.dropdown) openDropdown(item.name)
                      }}
                      onMouseLeave={() => {
                        setHovered(null)
                        if (item.dropdown) scheduleCloseDropdown()
                      }}
                    >
                      {item.dropdown ? (
                        <>
                          <button
                            className={`relative px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-colors ${isActive ? "text-blue-700" : "text-slate-700"}`}
                            aria-haspopup="menu"
                            aria-expanded={activeDropdown === item.name}
                          >
                            {(hovered === item.name || isActive) && (
                              <motion.div
                                layoutId="navPill"
                                className="absolute inset-0 rounded-full bg-blue-600/10 border border-blue-200"
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                              />
                            )}
                            {item.name}
                            <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : "rotate-0"}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
                                onMouseEnter={clearCloseTimer}
                                onMouseLeave={scheduleCloseDropdown}
                              >
                                {item.dropdown.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link href={item.href} className="relative px-3 py-1.5 rounded-full text-sm font-medium text-slate-700">
                          {(hovered === item.name || isActive) && (
                            <motion.div
                              layoutId="navPill"
                              className="absolute inset-0 rounded-full bg-blue-600/10 border border-blue-200"
                              transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            />
                          )}
                          <span className={`${isActive ? "text-blue-700" : "group-hover:text-blue-700"} relative z-10`}>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  )
                })}
                {/* CTA inside pill */}
                <div className="pl-1">
                  <Link href="/contact">
                    <button className="px-3.5 py-1.5 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      Work with me
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur pb-3 overflow-hidden"
          >
            <div className="px-4 pt-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="py-1">
                  <Link
                    href={item.href}
                    className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block py-1 text-sm text-slate-600 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Work with me</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
