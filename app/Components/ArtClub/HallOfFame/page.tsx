<<<<<<< HEAD
"use client"

import { useState, useEffect , Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Tag, CheckCircle, XCircle, Loader2, Award } from "lucide-react"
import Image from "next/image"

import Navbar from "../Navbar/page"

import Footer from "../../Footer/page"

interface HallOfFameItem {
  _id: string
  pic: string
  uploadedBy: {
    _id: string
    name: string
    email: string
  }
  isApproved: boolean
  isHallofFame: boolean
  activityId: string
  activityTitle: string
  category: string
  createdAt: string
  updatedAt: string
}

export default function WrappedPage() {
  return (
    <Suspense>
      <HallOfFame />
    </Suspense>
  )
}

 function HallOfFame() {
  const [hallOfFameItems, setHallOfFameItems] = useState<HallOfFameItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "approved" | "pending">("all")

  const fetchHallOfFame = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hall-of-fame`)
      if (!response.ok) {
        throw new Error("Failed to fetch Hall of Fame data")
      }
      const data = await response.json()
      setHallOfFameItems(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHallOfFame()
  }, [])

  const filteredItems = hallOfFameItems.filter((item) => {
    if (filter === "approved") return item.isApproved
    if (filter === "pending") return !item.isApproved
    return true
  })

  const approvedCount = hallOfFameItems.filter((item) => item.isApproved).length
  const pendingCount = hallOfFameItems.filter((item) => !item.isApproved).length

  // Show loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mr-2 text-primary" />
            <span>Loading Hall of Fame...</span>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-red-500 mb-4">Error: {error}</p>
            <Button onClick={fetchHallOfFame} variant="outline">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (

    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Hall of Fame
            </h1>
            <Award className="h-8 w-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating the most outstanding submissions and achievements from our community
          </p>
        </div>

        {/* Stats and Filters */}
        {/* <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{hallOfFameItems.length}</div>
                  <div className="text-sm text-muted-foreground">Total Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
                  <div className="text-sm text-muted-foreground">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{pendingCount}</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="sm">
                  All
                </Button>
                <Button
                  variant={filter === "approved" ? "default" : "outline"}
                  onClick={() => setFilter("approved")}
                  size="sm"
                >
                  Approved
                </Button>
                <Button
                  variant={filter === "pending" ? "default" : "outline"}
                  onClick={() => setFilter("pending")}
                  size="sm"
                >
                  Pending
                </Button>
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* Hall of Fame Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item._id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={item.pic || "/placeholder.svg"}
                      alt={item.activityTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Status Badge */}
                  {/* <div className="absolute top-3 right-3">
                    <Badge
                      variant={item.isApproved ? "default" : "secondary"}
                      className={`${
                        item.isApproved ? "bg-green-500 hover:bg-green-600" : "bg-orange-500 hover:bg-orange-600"
                      } text-white`}
                    >
                      {item.isApproved ? <CheckCircle className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
                      {item.isApproved ? "Approved" : "Pending"}
                    </Badge>
                  </div> */}

                  {/* Hall of Fame Badge */}
                  {item.isHallofFame && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary hover:bg-primary-600 text-white">
                        <Trophy className="h-3 w-3 mr-1" />
                        Hall of Fame
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-1">{item.activityTitle}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Tag className="h-3 w-3" />
                    <span className="capitalize">{item.category}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* Uploader Info */}
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary text-sm">
                          {item.uploadedBy?.name?.charAt(0).toUpperCase() || "?"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.uploadedBy?.name || "Unknown User"}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.uploadedBy?.email || ""}</p>
                      </div>
                    </div>

                    {/* Date Info */}
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>Added {new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                      {item.updatedAt !== item.createdAt && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>Updated {new Date(item.updatedAt).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Items Found</h3>
              <p className="text-muted-foreground">
                {filter === "all" ? "No items in the Hall of Fame yet." : `No ${filter} items found.`}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer/>
    </div>

  )
}
=======
"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface HallOfFameItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  origin: string;
  publishedAt?: string;  
  createdAt?: string;   
}

const HallOfFameForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Other",
    origin: "",
    imageUrl: "",
  });

  const [items, setItems] = useState<HallOfFameItem[]>([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.category  ) {
      toast.error(" Please fill all required fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/halloffame", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Item Added Successfully!");
        setFormData({ title: "", description: "", category: "Other", origin: "", imageUrl: "" });
        fetchItems();
      } else {
        toast.error("Failed: " + data.message);
      }
    } catch (error: any) {
      toast.error("Error: " + error.message);
    }
  };

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/halloffamegetallpost");
      const data = await res.json();
      if (res.ok) setItems(data.data || []);
      else toast.error(data.message || "Error fetching data");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div style={{ padding: "2px" }}>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {" "}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Hall of Fame</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-black-500 hover:text-black-800">
                Cabinet
              </a>
              <a href="#" className="text-black-500 hover:text-black-800">
                Constitution
              </a>
              <a href="#" className="text-black-500 hover:text-black-800">
                Legacy
              </a>
              <a href="#" className="text-black-500 hover:text-black-800">
                Heritage
              </a>
              <a href="#" className="text-black-500 hover:text-black-800">
                Calendar
              </a>
              <a href="#" className="text-black-500 hover:text-black-800">
                Library
              </a>
              <a href="#" className="text-black-500 hover:text-black-800">
                Journal
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-[#BCDAFB] h-[400px] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Club Hall of Fame
        </h1>
        <p className="text-md sm:text-lg text-gray-700 max-w-xl">
          Celebrating outstanding students, alumni, and contributors who have
          made exceptional impact in our community
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-center text-2xl font-bold text-blue-400 mb-2">
          Nominate a Member
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Know someone who deserves recognition? Submit a nomination for our
          Hall of Fame.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nominee Name
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter nominee's full name"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="Select" disabled>
                  Select category
                </option>
                <option value="Traditional Art">Traditional Art</option>
                <option value="Modern Art">Modern Art</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Photography">Photography</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Origin */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Origin / Artist
            </label>
            <input
              type="text"
              name="origin"
              placeholder="Enter origin or artist's name"
              value={formData.origin}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Nomination
            </label>
            <textarea
              name="description"
              placeholder="Describe why this person deserves recognition..."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows={3}
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "hobbizz");
                  data.append("cloud_name", "dvg17xl1i");

                  try {
                    const res = await fetch(
                      "https://api.cloudinary.com/v1_1/dvg17xl1i/image/upload",
                      { method: "POST", body: data }
                    );

                    const uploadResult = await res.json();
                    if (uploadResult.secure_url) {
                      setFormData((prev) => ({
                        ...prev,
                        imageUrl: uploadResult.secure_url,
                      }));
                      toast.success("Image uploaded successfully!");
                    } else {
                      toast.error("Image upload failed!");
                    }
                  } catch (err) {
                    toast.error("Error uploading image");
                    console.error(err);
                  }
                }
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-semibold text-sm py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Submit Nomination
          </button>
        </form>
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* Hall of Fame Feed */}
       <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🏆 Hall of Fame</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-center text-gray-500">No items found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => {
              const dateString = item.publishedAt || item.createdAt;
              return (
                <div key={item._id} className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 mb-1"><strong>Category:</strong> {item.category}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Origin:</strong> {item.origin}</p>
                    <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                    <p className="mt-2 text-xs text-gray-400">
                      🕒 {dateString ? new Date(dateString).toLocaleString() : "Date not available"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>


      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default HallOfFameForm;
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
