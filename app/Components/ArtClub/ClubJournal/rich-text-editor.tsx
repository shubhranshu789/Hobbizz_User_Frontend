"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  ImageIcon,
  LinkIcon,
  Quote,
} from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false)

  // In a real implementation, this would handle actual rich text formatting
  // For this demo, we're just showing the UI elements

  return (
    <div className={`border rounded-lg overflow-hidden ${isFocused ? "ring-2 ring-blue-500" : ""}`}>
      {/* Toolbar */}
      <div className="bg-gray-50 border-b p-2 flex flex-wrap gap-1">
        <div className="flex items-center gap-1 mr-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heading2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1 mr-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Underline className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1 mr-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1 mr-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ListOrdered className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <LinkIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Quote className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Editor Area */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-4 min-h-[300px] focus:outline-none"
        placeholder="Start writing your blog post here..."
      />
    </div>
  )
}
