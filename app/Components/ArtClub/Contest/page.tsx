"use client"

<<<<<<< HEAD
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
=======


type Submission = {
  _id: string
  title: string
  contest: string
  description: string
  imageUrl: string
}

import type React from "react"
import { useState, useEffect , useRef} from "react"
import axios from "axios"
import { Trophy, Plus, Users, Award, Upload, Medal, Download, ChevronLeft, ChevronRight } from "lucide-react"
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Trophy, Calendar, Users, Eye } from "lucide-react"
import { useRouter } from 'next/navigation';

<<<<<<< HEAD
import Navbar from "../Navbar/page"
import Footer from "../../Footer/page"

// import "../../../Components/ArtClub/Contest/ContestResult"

interface Competition {
  _id: string
  title: string
  desc: string
  pic: string
  isLive: boolean
}

export default function CompetitionsPage() {
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCompetitions()
  }, [])

  const fetchCompetitions = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/allCompitition`, {
        headers: {
          // "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch competitions")
      }

      const data = await response.json()
      setCompetitions(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
=======


export default function HomePage() {
  const [dragActive, setDragActive] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [contest, setContest] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // ✅ useEffect must be here, outside return
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);



const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageURL);
    } else {
      setPreviewUrl(null);
    }
  };
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contest || !title || !description || !file) {
      alert("All fields are required")
      return
    }
    const formData = new FormData()
    formData.append("contest", contest)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("file", file)
    try {
      const res = await axios.post("http://localhost:5000/contest", formData)
      alert("Submitted successfully!")
      setSubmissions((prev) => [...prev, res.data.data])
    } catch (err) {
      console.error("Error submitting entry", err)
      alert("Submission failed")
    }
  }

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/contest")
        setSubmissions(res.data.data)
      } catch (err) {
        console.error("Failed to fetch submissions", err)
      }
    }
    fetchSubmissions()
  }, [])

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-2">Error loading competitions</div>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={fetchCompetitions}>Try Again</Button>
        </div>
      </div>
    )
  }


  const router = useRouter();

  const handleClickSubmitId = (id: any) => {
    // router.push(`/Components/DISTRICT/AddActivities/ViewCompitions/ParticularCompition?id=${id}`);
  };
  const handleClickSubmitId2 = (id: any) => {
    router.push(`/Components/ArtClub/Contest/ParticularCompitition?id=${id}`);
  };
  const handleClickSubmitId3 = (id: any) => {
    router.push(`/Components/ArtClub/Contest/ContestResult?id=${id}`);
  };




  return (

    <div>
      <Navbar />
      <div style={{ marginTop: "0px" }} className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-yellow-500 mr-2" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Competitions
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover exciting competitions and showcase your skills. Join live events or explore upcoming challenges.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold">{competitions.length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Competitions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-2xl font-bold">{competitions.filter((c) => c.isLive).length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Live Now</p>
              </CardContent>
            </Card>
            {/* <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-2xl font-bold">{competitions.filter((c) => !c.isLive).length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Upcoming</p>
              </CardContent>
            </Card> */}
          </div>

          {/* Competitions Grid */}
          {competitions.length === 0 ? (
            <div className="text-center py-12">
              <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No competitions found</h3>
              <p className="text-muted-foreground">Check back later for new competitions!</p>
            </div>
<<<<<<< HEAD
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {competitions.map((competition) => (
                <Card
                  key={competition._id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={competition.pic || "/placeholder.svg?height=200&width=400"}
                      alt={competition.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      {competition.isLive ? (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white animate-pulse">
                          <div className="h-2 w-2 bg-white rounded-full mr-1" />
                          Live
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                          Upcoming
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
=======
          </div>

          {/* Pagination */}
          
        </div>
      </section>

      {/* Submit Entry Section */}
      <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Submit Your Entry</h2>
            <p className="text-lg text-gray-600">Upload your artwork and join the competition</p>
          </div>
  <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12 space-y-6">
  {/* Contest Selection */}
  <div>
    <Label htmlFor="contest" className="text-base font-medium">
      Contest Selection
    </Label>
    <Select onValueChange={setContest}>
      <SelectTrigger className="h-12 mt-2 transition-all duration-200 hover:border-sky-300">
        <SelectValue placeholder="Select contest" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Digital Art Masterpiece">Digital Art Masterpiece</SelectItem>
        <SelectItem value="Photography Challenge">Photography Challenge</SelectItem>
        <SelectItem value="Traditional Art Revival">Traditional Art Revival</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Entry Title */}
  <div>
    <Label htmlFor="title" className="text-base font-medium">
      Entry Title
    </Label>
    <Input
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Give your artwork a title"
      className="h-12 mt-2 transition-all duration-200 hover:border-sky-300 focus:border-sky-400"
    />
  </div>

  {/* Description */}
  <div>
    <Label htmlFor="description" className="text-base font-medium">
      Description
    </Label>
    <Textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Describe your artwork and inspiration"
      className="min-h-32 mt-2 resize-none transition-all duration-200 hover:border-sky-300 focus:border-sky-400"
    />
  </div>

  {/* File Upload with Preview */}
  <div>
    <Label className="text-base font-medium">Upload Artwork</Label>
    <div
      className={`mt-2 border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 cursor-pointer ${
        dragActive
          ? "border-sky-400 bg-sky-50 scale-105"
          : "border-gray-300 hover:border-gray-400 hover:scale-102"
      }`}
      onClick={() => fileInputRef.current?.click()}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-lg text-gray-600 mb-2">
        Drag and drop your file here, or click to browse
      </p>
      <p className="text-sm text-gray-500">Supports: JPG, PNG, PDF (Max 10MB)</p>

      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*,application/pdf"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0] || null
          setFile(selectedFile)
          if (selectedFile && selectedFile.type.startsWith("image/")) {
            const preview = URL.createObjectURL(selectedFile)
            setPreviewUrl(preview)
          } else {
            setPreviewUrl(null)
          }
        }}
        className="hidden"
      />

      {previewUrl && (
        <div className="mt-6">
          <p className="text-gray-600 mb-2">Image Preview:</p>
          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-xs mx-auto rounded border border-gray-300 shadow"
          />
        </div>
      )}
    </div>
  </div>

  {/* Submit Button */}
  <Button
    type="submit"
    className="w-full bg-sky-400 hover:bg-sky-500 text-white py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
  >
    <Upload className="w-5 h-5 mr-2" />
    Submit Entry
  </Button>
</form>

      {/* Contest Results Section */}
      <section id="results" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contest Results</h2>
            <p className="text-lg text-gray-600">Celebrating our talented winners and their amazing works</p>
          </div>

          {/* Winner Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {winners.map((winner) => (
              <Card
                key={winner.place}
                className={`${winner.bgColor} ${winner.borderColor} border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${winner.badgeColor} flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110`}
                  >
                    {winner.place === 1 && <Trophy className="w-8 h-8 text-white" />}
                    {winner.place === 2 && <Medal className="w-8 h-8 text-white" />}
                    {winner.place === 3 && <Award className="w-8 h-8 text-white" />}
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {competition.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">{competition.desc}</CardDescription>
                  </CardHeader>

                  {/* <CardContent className="pt-0">
                    <div className="flex gap-2">
                      <Button className="flex-1" variant={competition.isLive ? "default" : "outline"}>
                        <Eye className="h-4 w-4 mr-2" />
                        {competition.isLive ? "Join Live" : "View Details"}
                      </Button>
                    </div>
                  </CardContent> */}
                  <CardContent className="pt-0">
                    <div className="flex gap-2" style={{ flexDirection: "column" }}>

                      <Button onClick={() => { handleClickSubmitId2(competition._id) }} className="flex-1" variant={competition.isLive ? "default" : "outline"}>
                        <Eye className="h-4 w-4 mr-2" />
                        Participate
                      </Button>

                      <Button onClick={() => { handleClickSubmitId3(competition._id) }} className="flex-1" variant={competition.isLive ? "default" : "outline"}>
                        <Eye className="h-4 w-4 mr-2" />
                        Result
                      </Button>

                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>


      <Footer/>
    </div>
  )
}
