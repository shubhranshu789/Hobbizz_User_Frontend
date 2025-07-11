<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Navbar/page"

import Footer from "../../Footer/page";
import { useRouter } from 'next/navigation';


// import "../../../Components/ArtClub/ClubJournal/ParticularArtJournal"

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  imageUrl?: string;
  tags: string[];
  isFeatured: boolean;
  publishedAt: string;
}


const ClubNewsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Other",
    author: "",
    imageUrl: "",
    tags: "",
    isFeatured: false,
  });
  const router = useRouter();


  const handleClickSubmitId = (id: any) => {
    router.push(`/Components/ArtClub/ClubJournal/ParticularArtJournal?id=${id}`);
  };


  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Input Change Handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.content || !formData.category) {
      toast.error(" Please fill all required fields!");
      return;
    }

    const newsData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubjournal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(" News Posted Successfully!");
        setFormData({
          title: "",
          content: "",
          category: "Other",
          author: "Art Club Team",
          imageUrl: "",
          tags: "",
          isFeatured: false,
        });
        fetchNews(); // refresh after post
      } else {
        toast.error(" Failed: " + data.message);
      }
    } catch (error: any) {
      toast.error(" Error: " + error.message);
    }
  };

  // Fetch News  here
  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubjpurnalviewallpost`);
      const data = await res.json();

      if (res.ok) {
        setNewsList(data.data);
      } else {
        toast.error(" Failed to fetch news: " + data.message);
      }
    } catch (error: any) {
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{ padding: "2px" }}>
      <Navbar />

      <div className="relative bg-gradient-to-br from-[#BCDAFB] via-white to-[#E2ECFF] h-[450px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Decorative SVG blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

        {/* Content */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 drop-shadow-md z-10">
          Art Club Journal
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl z-10">
          Stay updated with the latest announcements, achievements, and press coverage.
        </p>
      </div>

      {/* Form Section */}


      {/* <hr style={{ margin: "40px 0" }} /> */}

      {/* News Feed Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🗞️ Club Journal
        </h2> */}

        {loading ? (
          <p className="text-center text-gray-500">Loading news...</p>
        ) : newsList.length === 0 ? (
          <p className="text-center text-gray-500">No Journal found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((news) => (
              <div
                key={news._id}
                className="relative group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Featured Badge */}
                {news.isFeatured && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    🌟 Featured
                  </div>
                )}

                {/* Image Section */}
                {news.imageUrl && (
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      onClick={() => {handleClickSubmitId(news._id)}}
                      src={news.imageUrl}
                      alt="News"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Category:</strong> {news.category}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Author:</strong> {news.author}
                  </p>

                  <p className="text-gray-700 text-sm mt-2 mb-4 line-clamp-3">
                    {news.content}
                  </p>

                  {/* Tags */}
                  {news.tags?.length > 0 && (
                    <div className="mb-4">
                      {news.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto text-xs text-gray-400">
                    🕒 {new Date(news.publishedAt).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Footer */}
        <Footer />
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default ClubNewsForm;
=======
"use client"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import BlogPostGrid from "../ClubJournal/blog-post-grid"
import FeaturedPosts from "../ClubJournal/comment-section"
import CategoryFilter from "../ClubJournal/category-filter"
// import "../../../Components/ArtClub/ClubJournal/files"
import {
    useRouter 
}
from "next/navigation"
export default function ClubJournal() {
    const router = useRouter()
    const gotoGeneralNewPost = ()=>{
        router.push("../../../Components/ArtClub/ClubJournal/files")
    } 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Club <span className="text-blue-200">Journal</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Share your artistic journey, creative process, and insights with our community
            </p>
            <span onClick={()=>{
                gotoGeneralNewPost()
            }}>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 font-medium">
                <PlusCircle className="mr-2 h-5 w-5" />
                Create New Post
              </Button>
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
        <FeaturedPosts postSlug={""} />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Blog Posts */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
              <CategoryFilter />
            </div>
            <BlogPostGrid />
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-80 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4">Search Posts</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by keyword..."
                  className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {[
                  { name: "Painting", count: 12 },
                  { name: "Digital Art", count: 8 },
                  { name: "Sculpture", count: 5 },
                  { name: "Photography", count: 10 },
                  { name: "Mixed Media", count: 7 },
                ].map((category) => (
                  <div key={category.name} className="flex justify-between items-center group">
                    <Link
                      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-700 hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-200"
                    >
                      {category.name}
                    </Link>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Watercolor",
                  "Portrait",
                  "Abstract",
                  "Landscape",
                  "Tutorial",
                  "Process",
                  "Inspiration",
                  "Technique",
                  "Color Theory",
                  "Composition",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase()}`}
                    className="bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-800 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
