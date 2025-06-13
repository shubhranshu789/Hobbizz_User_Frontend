import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-slate-900 font-bold">C</span>
              </div>
              <span className="font-bold text-xl">Club News</span>
            </div>
            <p className="text-slate-300 text-sm">
              Keeping our community informed and engaged with the latest updates and stories.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/latest" className="text-slate-300 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-slate-300 hover:text-white transition-colors">
                  Featured Stories
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-slate-300 hover:text-white transition-colors">
                  News Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Club News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
