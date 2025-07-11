"use client";
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion"
=======
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<<<<<<< HEAD
import Navbar from "../Navbar/page"
import Footer from "../../Footer/page"


const Gallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const sizeVariants = [
    "col-span-1 row-span-2", // tall
    "col-span-2 row-span-1", // wide
    "col-span-1 row-span-1", // square
    "col-span-2 row-span-2", // large
    "col-span-1 row-span-3", // very tall
  ]

  const heightVariants = ["h-48", "h-56", "h-64", "h-72", "h-80", "h-96"]

  useEffect(() => {
    fetchImages();
  }, []);

  // Fetch all images
  const fetchImages = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/viewgallerypost`);
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

=======
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

>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
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
<<<<<<< HEAD
      toast.error(`Upload failed`);
=======
      toast.error(`Upload failed: ${error.message}`);
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
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
<<<<<<< HEAD
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/gallerypost`, {
=======
      const res = await axios.post("http://localhost:5000/gallerypost", {
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
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
<<<<<<< HEAD
    <div className="padding: 2px" >
      <Navbar />

      <div className="relative bg-gradient-to-br from-[#BCDAFB] via-white to-[#E2ECFF] h-[450px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Decorative SVG blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

        {/* Content */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 drop-shadow-md z-10">
          Art Club Gallery
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl z-10">
          Stay updated with the latest announcements, achievements, and press coverage.
        </p>
      </div>


      {/* Gallery Images */}
      <div className="min-h-screen p-8">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8">
         


          {/* Masonry Grid Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {images.map((img, index) => {
                // Assign random height for masonry effect
                const randomHeight = heightVariants[Math.floor(Math.random() * heightVariants.length)]

                return (
                  <motion.div
                    key={img._id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="break-inside-avoid mb-6 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                      {/* Image container with overlay */}
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={img.imageUrl}
                          alt={img.title}
                          className={`w-full ${randomHeight} object-cover transition-transform duration-700 group-hover:scale-110`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />

                        {/* Gradient overlay on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        />

                        {/* Floating title on hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="absolute bottom-4 left-4 right-4"
                        >
                          <h3 className="text-white font-semibold text-lg drop-shadow-lg">{img.title}</h3>
                        </motion.div>
                      </div>

                      {/* Bottom section with title */}
                      <div className="p-4 bg-white">
                        <motion.h2
                          className="text-center font-medium text-gray-800 truncate group-hover:text-purple-600 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {img.title}
                        </motion.h2>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>






          {/* Floating background elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -150, 0],
                y: [0, 100, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </div>





      <div>
        {/* Footer */}
        <Footer />
      </div>

=======
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

>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

<<<<<<< HEAD
export default Gallery;
=======
export default Gallery;
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
