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
      const res = await fetch("http://localhost:5000/dancehalloffame", {
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
      const res = await fetch("http://localhost:5000/dancehalloffamegetallpost");
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
          Dance Hall of Fame
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
