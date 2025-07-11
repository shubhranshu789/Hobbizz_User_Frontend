"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Reply } from "lucide-react"

// Sample comments data
const initialComments = [
  {
    id: 1,
    author: {
      name: "Alex Rivera",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    content:
      "This is so inspiring! I've been wanting to try oil painting for ages but have been intimidated. Your experience makes me want to finally give it a go!",
    date: "2 days ago",
    likes: 8,
    isLiked: false,
  },
  {
    id: 2,
    author: {
      name: "Sophia Williams",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    content:
      "Great post! I had a similar experience when I first started with oils. The fat over lean rule was something I had to learn the hard way after my first painting cracked. Do you have any specific brand of oils you'd recommend for beginners?",
    date: "1 day ago",
    likes: 5,
    isLiked: false,
  },
  {
    id: 3,
    author: {
      name: "Professor Martinez",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    content:
      "Excellent reflection on your first experience, Emma! I'm proud of how you embraced the process and weren't afraid to make adjustments. Looking forward to seeing your progress in the next workshop!",
    date: "1 day ago",
    likes: 12,
    isLiked: false,
  },
]

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLike = (commentId: number) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          }
        }
        return comment
      }),
    )
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newCommentObj = {
        id: comments.length + 1,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content: newComment,
        date: "Just now",
        likes: 0,
        isLiked: false,
      }

      setComments([...comments, newCommentObj])
      setNewComment("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="space-y-8">
      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Your Avatar" />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 resize-none"
            rows={3}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={!newComment.trim() || isSubmitting} className="bg-blue-600 hover:bg-blue-700">
            {isSubmitting ? "Posting..." : "Post Comment"}
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
              <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{comment.author.name}</h4>
                  <span className="text-xs text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <button
                  className={`flex items-center gap-1 ${
                    comment.isLiked ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => handleLike(comment.id)}
                >
                  <Heart className="h-4 w-4" fill={comment.isLiked ? "currentColor" : "none"} />
                  <span>
                    {comment.likes} {comment.likes === 1 ? "Like" : "Likes"}
                  </span>
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
                  <Reply className="h-4 w-4" />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
