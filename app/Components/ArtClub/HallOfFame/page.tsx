import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Eye, GraduationCap, Heart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HallOfFame() {
  const honorees = [
    {
      id: 1,
      name: "Gond Art Masters",
      origin: "Madhya Pradesh, India",
      achievement:
        "Contemporary tribal art form using dots, lines, and vibrant colors to create intricate patterns depicting flora, fauna, and spiritual beliefs of the Gond community.",
      category: "Traditional Art",
      year: "Ancient - Present",
      image: "/placeholder.svg?height=300&width=300",
      color: "bg-teal-500",
    },
    {
      id: 2,
      name: "Tanjore Painting Artists",
      origin: "Tamil Nadu, India",
      achievement:
        "Classical South Indian painting style known for rich colors, gold leaf work, and gem-studded surfaces depicting Hindu deities and mythological themes.",
      category: "Classical Art",
      year: "16th Century - Present",
      image: "/placeholder.svg?height=300&width=300",
      color: "bg-orange-500",
    },
    {
      id: 3,
      name: "Phad Painting Storytellers",
      origin: "Rajasthan, India",
      achievement:
        "Narrative scroll painting tradition depicting epic stories of folk heroes and deities, painted on cloth using natural colors and traditional techniques.",
      category: "Folk Art",
      year: "Ancient - Present",
      image: "/placeholder.svg?height=300&width=300",
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "Madhubani Artists",
      origin: "Bihar, India",
      achievement:
        "Traditional folk art characterized by intricate geometric patterns, vibrant colors, and mythological themes, painted using natural dyes and pigments.",
      category: "Folk Art",
      year: "Ancient - Present",
      image: "/placeholder.svg?height=300&width=300",
      color: "bg-blue-500",
    },
    {
      id: 5,
      name: "Warli Tribal Artists",
      origin: "Maharashtra, India",
      achievement:
        "Ancient tribal art form using simple geometric shapes to depict daily life, nature, and folklore of the Warli tribe in white pigment on mud walls.",
      category: "Tribal Art",
      year: "Ancient - Present",
      image: "/placeholder.svg?height=300&width=300",
      color: "bg-amber-600",
    },
    {
      id: 6,
      name: "Kalamkari Craftsmen",
      origin: "Andhra Pradesh, India",
      achievement:
        "Hand-painted or block-printed cotton textile art featuring natural dyes and depicting mythological stories, floral motifs, and epic narratives.",
      category: "Textile Art",
      year: "Ancient - Present",
      image: "/placeholder.svg?height=300&width=300",
      color: "bg-rose-500",
    },
  ]

  const pillars = [
    {
      icon: Eye,
      title: "Visual Discovery",
      description:
        "Explore high-quality images and detailed descriptions of traditional art forms from across cultures.",
    },
    {
      icon: GraduationCap,
      title: "Educational Content",
      description:
        "Learn about the history, techniques, and cultural significance of each art form through expert insights.",
    },
    {
      icon: Heart,
      title: "Cultural Preservation",
      description:
        "Support the preservation of traditional art forms and connect with contemporary artists carrying forward these legacies.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-slate-800">Hall of Fame</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#gallery" className="text-slate-600 hover:text-slate-900 transition-colors">
                Gallery
              </Link>
              <Link href="#artists" className="text-slate-600 hover:text-slate-900 transition-colors">
                Artists
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </Link>
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">Traditional Art Heritage</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Discover the rich tapestry of traditional art forms that have shaped our cultural identity through
              centuries of artistic expression and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Explore Gallery
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Art Forms Collection */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Art Forms Collection</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our curated selection of traditional art forms, each telling a unique story of cultural heritage
              and artistic mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honorees.map((honoree) => (
              <Card
                key={honoree.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <div className={`h-64 ${honoree.color} relative overflow-hidden`}>
                    <Image
                      src={honoree.image || "/placeholder.svg"}
                      alt={honoree.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 text-slate-800 px-2 py-1 rounded-md text-xs font-medium">
                      {honoree.category}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-800">{honoree.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-medium">Origin: {honoree.origin}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{honoree.achievement}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">{honoree.year}</span>
                    <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Preserve & Appreciate</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our mission is to preserve traditional art forms and make them accessible to art enthusiasts worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors">
                  <pillar.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-slate-300">Art Forms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-slate-300">Artists Featured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">15</div>
              <div className="text-slate-300">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-slate-300">Years of Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-bold">Hall of Fame</span>
              </div>
              <p className="text-slate-400 text-sm">
                Preserving and celebrating traditional art forms for future generations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Art History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Techniques
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cultural Context
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Social Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Hall of Fame. All rights reserved. Celebrating cultural heritage
              worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
