"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Saqib", href: "/about" },
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
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg"></span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900">Saqib Mumtaz Hashmi</div>
              <div className="text-xs text-slate-600">Digital Marketing Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-blue-600 hover:bg-blue-700">Schedule Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="space-y-2 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-slate-600 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Consultation</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
