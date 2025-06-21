"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, MessageSquare, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Exploring Color Theory in Digital Art",
    slug: "exploring-color-theory-in-digital-art",
    excerpt: "Understanding the fundamentals of color theory and how to apply them in your digital artwork.",
    image: "/placeholder.svg?height=600&width=800",
    author: "Alex Rivera",
    date: "June 7, 2025",
    category: "Digital Art",
    comments: 15,
  },
  {
    id: 2,
    title: "Sculpture Techniques for Beginners",
    slug: "sculpture-techniques-for-beginners",
    excerpt: "A guide to getting started with basic sculpture techniques using accessible materials.",
    image: "/placeholder.svg?height=600&width=800",
    author: "Sophia Williams",
    date: "June 5, 2025",
    category: "Sculpture",
    comments: 8,
  },
  {
    id: 3,
    title: "My Photography Journey: From Smartphone to DSLR",
    slug: "my-photography-journey-from-smartphone-to-dslr",
    excerpt: "Personal reflections on transitioning from casual smartphone photography to more professional equipment.",
    image: "/placeholder.svg?height=600&width=800",
    author: "Jamal Thompson",
    date: "June 3, 2025",
    category: "Photography",
    comments: 12,
  },
  {
    id: 4,
    title: "Mixed Media Collage Workshop Recap",
    slug: "mixed-media-collage-workshop-recap",
    excerpt:
      "Highlights and techniques learned from our recent mixed media workshop with visiting artist Elena Rodriguez.",
    image: "/placeholder.svg?height=600&width=800",
    author: "Priya Patel",
    date: "May 30, 2025",
    category: "Mixed Media",
    comments: 6,
  },
  {
    id: 5,
    title: "Watercolor Landscapes: Tips and Tricks",
    slug: "watercolor-landscapes-tips-and-tricks",
    excerpt: "Improve your watercolor landscape paintings with these practical techniques and approaches.",
    image: "/placeholder.svg?height=600&width=800",
    author: "Michael Chen",
    date: "May 28, 2025",
    category: "Painting",
    comments: 10,
  },
  {
    id: 6,
    title: "Creating Digital Illustrations with Procreate",
    slug: "creating-digital-illustrations-with-procreate",
    excerpt: "A beginner's guide to using Procreate for digital illustrations on iPad.",
    image: "/placeholder.svg?height=600&width=800",
    author: "Zoe Johnson",
    date: "May 25, 2025",
    category: "Digital Art",
    comments: 14,
  },
]

export default function BlogPostGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogPosts.map((post) => (
        <motion.div
          key={post.id}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setHoveredId(post.id)}
          onMouseLeave={() => setHoveredId(null)}
          whileHover={{ y: -5 }}
        >
          <Link href={`/post/${post.slug}`} className="block">
            <div className="relative overflow-hidden aspect-video">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredId === post.id ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare size={14} className="mr-1" />
                  <span>{post.comments}</span>
                </div>
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
