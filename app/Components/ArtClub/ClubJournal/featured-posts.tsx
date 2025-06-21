"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample featured posts data
const featuredPosts = [
  {
    id: 1,
    title: "My First Oil Painting Experience",
    slug: "my-first-oil-painting-experience",
    excerpt: "Sharing my journey into oil painting and the techniques I learned during our club's workshop.",
    image: "/placeholder.svg?height=600&width=1200",
    author: "Emma Thompson",
    date: "June 10, 2025",
    category: "Painting",
  },
  {
    id: 2,
    title: "Behind the Scenes: Annual Exhibition Preparation",
    slug: "behind-the-scenes-annual-exhibition-preparation",
    excerpt: "A look at how our club members prepare their artwork for the upcoming annual exhibition.",
    image: "/placeholder.svg?height=600&width=1200",
    author: "David Wilson",
    date: "June 8, 2025",
    category: "Exhibition",
  },
]

export default function FeaturedPosts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredPosts.map((post) => (
        <motion.div
          key={post.id}
          className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setHoveredId(post.id)}
          onMouseLeave={() => setHoveredId(null)}
          whileHover={{ y: -8 }}
        >
          <Link href={`/post/${post.slug}`} className="block">
            <div className="relative overflow-hidden aspect-[16/9]">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredId === post.id ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <User size={14} className="mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>

                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0 h-auto group">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <motion.div
                className="w-full h-0.5 bg-blue-600 mt-6"
                initial={{ width: 0 }}
                animate={{ width: hoveredId === post.id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
