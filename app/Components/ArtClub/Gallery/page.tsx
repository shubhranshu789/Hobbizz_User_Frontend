"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  // Fetch all images
  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/viewgallerypost");
      setImages(res.data || []);
    } catch (err) {
      console.error("Error fetching images:", err);
      toast.error("Error fetching images");
    }
  };

  // Upload file to Cloudinary
  const uploadToCloudinary = async () => {
    if (!selectedFile) return null;
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "hobbizz");
    // data.append("cloud_name", "dvg17xl1iE");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dvg17xl1i/image/upload",
        { method: "POST", body: data }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error.message);
      }

      const result = await res.json();
      console.log("Cloudinary response:", result);
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      toast.error(`Upload failed: ${error.message}`);
      return null;
    }
  };

  // Add image to DB
  const addImage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!title || !selectedFile) {
      toast.error("Title & image are required");
      return;
    }

    const uploadedUrl = await uploadToCloudinary();
    if (!uploadedUrl) return;

    try {
      const res = await axios.post("http://localhost:5000/gallerypost", {
        title,
        imageUrl: uploadedUrl,
      });

      console.log("New image data:", res.data.data);
      setImages((prev) => [res.data.data, ...prev]);
      setTitle("");
      setSelectedFile(null);
      toast.success("Image Added Successfully!");
    } catch (err) {
      console.error("Error adding image to DB:", err);
      toast.error("Error saving image to DB");
    }
  };

  return (
    <div className= "padding: 2px" >
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {" "}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Club Gallery</h1>
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

      <div className="h-[300px] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Club Gallery
        </h1>
        <p className="text-md sm:text-lg text-gray-700 max-w-xl">
          Explore our collection of memories, achievements, and creative works
          from club events, exhibitions, and activities throughout the years.
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Upload Image
      </h1>

      {/*  Form Section */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-10">
        <form onSubmit={addImage} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title:
            </label>
            <input
              className="border w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Beautiful Sunrise"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload image file:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="border w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md w-full transition duration-200 cursor-pointer"
          >
            Add to Gallery
          </button>
        </form>
      </div>

      {/* Gallery Images */}
      <div className="min-h-screen p-8">
        {/* <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">🎨 Art Gallery</h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((img) => (
            <div
              key={img._id}
              className="overflow-hidden rounded-sm shadow-xl hover:scale-105 transition transform duration-300"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-60 object-cover"
              />
              <h2 className="text-center font-medium bg-white py-2 text-gray-800 truncate">
                {img.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Footer */}
        <footer className="bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Club Gallery</h3>
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
              </div>
            </div>
          </div>
        </footer>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Gallery;
