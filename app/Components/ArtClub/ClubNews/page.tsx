<<<<<<< HEAD
import Image from "next/image"
import Link from "next/link"
import { Eye, GraduationCap, Heart } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Club News & Updates</h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          Stay informed with the latest news, events, and stories from our community. Discover the rich tapestry of
          activities that shape our club's identity.
        </p>
      </section>

      {/* Featured News Section */}
      <section className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-6">Featured Stories</h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
          Explore our curated selection of the most impactful stories and events from our club, each highlighting unique
          achievements and memorable moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* News Item 1 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Annual Exhibition Success"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Annual Exhibition Success</h3>
              <p className="text-sm text-slate-500 mb-3">Location: Main Gallery</p>
              <p className="text-slate-700 mb-4">
                Our annual exhibition attracted record attendance with over 500 visitors exploring the diverse
                collection of artworks.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Workshop Series Launch"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Workshop Series Launch</h3>
              <p className="text-sm text-slate-500 mb-3">Location: Studio B</p>
              <p className="text-slate-700 mb-4">
                Our new workshop series focusing on traditional techniques has been fully booked within 48 hours of
                announcement.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Artist of the Month"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Artist of the Month</h3>
              <p className="text-sm text-slate-500 mb-3">Featured: Maya Johnson</p>
              <p className="text-slate-700 mb-4">
                Celebrating the achievements of Maya Johnson, whose innovative approach to traditional art forms has
                gained international recognition.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-10 px-4 bg-slate-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-6">Recent Updates</h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
          The latest news and announcements from our club activities and community engagements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Update 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3">New Gallery Opening</h3>
            <p className="text-sm text-slate-500 mb-3">June 20, 2025</p>
            <p className="text-slate-700">
              We're excited to announce the opening of our new gallery space dedicated to emerging artists.
            </p>
          </div>

          {/* Update 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3">Summer Program Registration</h3>
            <p className="text-sm text-slate-500 mb-3">June 15, 2025</p>
            <p className="text-slate-700">
              Registration for our summer program is now open with early bird discounts available until June 30.
            </p>
          </div>

          {/* Update 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3">Community Art Project</h3>
            <p className="text-sm text-slate-500 mb-3">June 10, 2025</p>
            <p className="text-slate-700">
              Join our community art project and contribute to a collaborative installation that will be displayed in
              the city center.
            </p>
          </div>
        </div>
      </section>

      {/* Club Initiatives */}
      <section className="py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">Club Initiatives</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          {/* Initiative 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Eye className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="font-bold text-xl mb-3">News Coverage</h3>
            <p className="text-slate-600">
              Comprehensive coverage of club events, member achievements, and community impact stories.
            </p>
          </div>

          {/* Initiative 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <GraduationCap className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="font-bold text-xl mb-3">Educational Content</h3>
            <p className="text-slate-600">
              Informative articles about club history, member spotlights, and educational resources.
            </p>
          </div>

          {/* Initiative 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Heart className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="font-bold text-xl mb-3">Community Engagement</h3>
            <p className="text-slate-600">
              Highlighting opportunities for members to participate in club activities and community service.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Stay Updated</h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
=======
"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    author: "Art Club Team",
    imageUrl: "",
    tags: "",
    isFeatured: false,
  });

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
      const res = await fetch("http://localhost:5000/clubnews", {
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
      const res = await fetch("http://localhost:5000/clubnewsviewallpost");
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
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {" "}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Art Club</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Cabinet
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Constitution
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Legacy
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Heritage
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Calendar
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Library
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Journal
              </a>
              <a href="#" className="text-gray-400">
                News
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-[#BCDAFB] h-[400px] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Art Club News
        </h1>
        <p className="text-md sm:text-lg text-gray-700 max-w-xl">
          Stay updated with latest announcements, achievements, and press
          coverage
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto mt-8 px-6 py-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          📰 Post Art Club News
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="News Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              name="content"
              placeholder="News Content"
              rows={2}
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Achievements">Achievements</option>
                <option value="Notices">Notices</option>
                <option value="Events">Events</option>
                <option value="Press Coverage">Press Coverage</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        // setSelectedFile(file); // Store for later use (optional)

        // Upload to Cloudinary
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "hobbizz");
        data.append("cloud_name", "dvg17xl1i");

        try {
          const res = await fetch("https://api.cloudinary.com/v1_1/dvg17xl1i/image/upload", {
            method: "POST",
            body: data,
          });

          const uploadResult = await res.json();

          if (uploadResult.url) {
            setFormData((prev) => ({
              ...prev,
              imageUrl: uploadResult.url,
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
    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                placeholder="e.g. painting, sketch, culture"
                value={formData.tags}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-1">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              className="form-checkbox text-blue-600"
            />
            <span className="text-sm text-gray-700">Mark as Featured</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Post News
          </button>
        </form>
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* News Feed Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🗞️ Club News Feed
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading news...</p>
        ) : newsList.length === 0 ? (
          <p className="text-center text-gray-500">No news found.</p>
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
        <footer className="bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Art Club</h3>
                <p className="text-gray-300 text-sm">
                  Fostering creativity and artistic expression through community
                  engagement and education.
                </p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Cabinet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Constitution
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Legacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Heritage
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Journal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Contact</h4>
                <p className="text-gray-300 text-sm">artclub@school.edu</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <div className="flex justify-center items-center space-x-4">
                {/* <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-4 h-4" />
              </button> */}
                {/* <span className="text-sm">1 / 2</span> */}
                {/* <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button> */}
              </div>
            </div>
          </div>
        </footer>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default ClubNewsForm;
>>>>>>> e0b5f0305757c4775e6567bb4b78c9e165bc9f8a
