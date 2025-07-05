'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cover 2 Cover', href: '/blog' },
    { name: 'Curiosity', href: '/curiosity' },
    { name: 'Indie Apps', href: '/apps' },
    { name: 'About', href: '/about' }
  ]

  return (
    <div className="min-h-screen bg-[#fefefe] text-[#2b2b2b]">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg text-[#2b2b2b] hover:text-[#008080] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden absolute right-4 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-[#2b2b2b] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-[#2b2b2b] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-[#2b2b2b] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-4 py-2 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-3 text-[#2b2b2b] hover:text-[#008080] hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="pt-8 pb-8 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span>Made with</span>
          <span className="text-[#008080]">🧐</span>
          <span>curiosity by</span>
          <a href="https://github.com/thacuriousbuilder" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline font-medium">
            thacuriousbuilder
          </a>
        </div>
      </footer>
    </div>
  )
}