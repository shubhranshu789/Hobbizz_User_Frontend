"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CategoryFilter() {
  const [category, setCategory] = useState("all")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {category === "all" ? "All Categories" : category}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
          <DropdownMenuRadioItem value="all">All Categories</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Painting">Painting</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Digital Art">Digital Art</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Sculpture">Sculpture</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Photography">Photography</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mixed Media">Mixed Media</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
