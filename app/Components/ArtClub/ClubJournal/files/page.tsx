"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ImageIcon, Loader2 } from "lucide-react"
import Link from "next/link"
import RichTextEditor from "../rich-text-editor"
import { useRouter } from "next/navigation"

export default function CreatePost() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [content, setContent] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to the blog post (in a real app, would redirect to the newly created post)
    router.push("/post/my-first-oil-painting-experience")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Journal
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h1 className="text-3xl font-bold mb-6">Create New Journal Entry</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter a descriptive title for your post" required className="text-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="digital-art">Digital Art</SelectItem>
                      <SelectItem value="sculpture">Sculpture</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="mixed-media">Mixed Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input id="tags" placeholder="e.g. watercolor, tutorial, process" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Short Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your post (will be displayed in previews)"
                  className="resize-none"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Featured Image</Label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center">
                    <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-1">Drag and drop an image, or click to browse</p>
                    <p className="text-xs text-gray-400">Recommended size: 1200 x 800px</p>
                  </div>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <RichTextEditor value={content} onChange={setContent} />
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t">
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    "Publish Post"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
