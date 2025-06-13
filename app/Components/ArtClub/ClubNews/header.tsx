"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="font-bold text-xl">Club News</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-slate-800 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/latest" className="text-slate-800 hover:text-blue-600 transition-colors">
            Latest
          </Link>
          <Link href="/events" className="text-slate-800 hover:text-blue-600 transition-colors">
            Events
          </Link>
          <Link href="/gallery" className="text-slate-800 hover:text-blue-600 transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="text-slate-800 hover:text-blue-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4">
            <Link href="/" className="px-4 py-2 text-slate-800 hover:bg-slate-100" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/latest"
              className="px-4 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Latest
            </Link>
            <Link
              href="/events"
              className="px-4 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
