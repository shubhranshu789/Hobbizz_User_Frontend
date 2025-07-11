<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Navbar/page"
import Footer from "../../Footer/page"

import { useRouter } from 'next/navigation';


// import "../../../Components/ArtClub/Heritage/ViewParticularHeritage"

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

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.category) {
      toast.error(" Please fill all required fields!");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/heritage`, {
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/heritagegetallpost`);
      const data = await res.json();
      if (res.ok) setItems(data.data || []);
      else toast.error(data.message || "Error fetching data");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClickSubmitId = (id: any) => {
    router.push(`/Components/ArtClub/Heritage/ViewParticularHeritage?id=${id}`);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div >
      <Navbar />

      <div className="relative bg-gradient-to-br from-[#BCDAFB] via-white to-[#E2ECFF] h-[450px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Decorative SVG blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

        {/* Content */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 drop-shadow-md z-10">
          Art Club Heritage
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl z-10">
          Stay updated with the latest announcements, achievements, and press coverage.
        </p>
      </div>

      {/* Form Section */}


      {/* <hr style={{ margin: "40px 0" }} /> */}

      {/* Hall of Fame Feed */}
      {/* <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🏆 Heritage</h2>

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
            </div> */}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🏆 Heritage
          </h2> */}
          {/* <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto rounded-full"></div> */}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading heritage items...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏛️</div>
            <p className="text-gray-500 text-xl">No heritage items found.</p>
            <p className="text-gray-400 text-sm mt-2">Check back later for new additions to our collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {items.map((item) => {
              const dateString = item.publishedAt || item.createdAt
              return (
                <div
                  key={item._id}
                  className="group bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-200"
                >
                  <div className="relative overflow-hidden">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-56 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <div className="text-6xl text-amber-400">🏛️</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                        📂 {item.category}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        📍 {item.origin}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{item.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="mr-1">🕒</span>
                        <span>
                          {dateString
                            ? new Date(dateString).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                            : "Date not available"}
                        </span>
                      </div>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => { handleClickSubmitId(item._id) }} className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-200">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>


      <ToastContainer position="top-center" autoClose={2000} />
      <Footer />
    </div>
  );
};

export default HallOfFameForm;
=======
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, BookOpen, Heart, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

const artForms = [
  {
    id: 1,
    title: "Madhubani Painting",
    subtitle: "Bihar, India",
    description:
      "A traditional folk art form characterized by intricate geometric patterns, vibrant colors, and mythological themes, painted using natural pigments.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-red-500 to-orange-500",
    delay: 0,
  },
  {
    id: 2,
    title: "Warli Art",
    subtitle: "Maharashtra, India",
    description:
      "Ancient tribal art form using simple geometric shapes to depict daily life, nature, and folklore. Often done in white pigment on mud walls.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-amber-600 to-yellow-600",
    delay: 0.1,
  },
  {
    id: 3,
    title: "Kalamkari",
    subtitle: "Andhra Pradesh, India",
    description:
      "Hand-painted or block-printed cotton textile art featuring intricate floral patterns and mythological stories. Uses natural dyes and traditional techniques.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-green-500 to-emerald-500",
    delay: 0.2,
  },
  {
    id: 4,
    title: "Gond Art",
    subtitle: "Madhya Pradesh, India",
    description:
      "Tribal art form using dots and dashes to create intricate patterns depicting flora and fauna. Traditionally done on walls and floors.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-blue-500 to-cyan-500",
    delay: 0.3,
  },
  {
    id: 5,
    title: "Tanjore Painting",
    subtitle: "Tamil Nadu, India",
    description:
      "Classical South Indian painting style known for rich colors, gold foil work, and depictions of Hindu deities. Features raised relief work.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-500 to-pink-500",
    delay: 0.4,
  },
  {
    id: 6,
    title: "Phal Painting",
    subtitle: "Rajasthan, India",
    description:
      "Traditional Rajasthani art form depicting folk tales and legends. Characterized by vibrant colors and intricate detailing on cloth or paper.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-indigo-500 to-purple-500",
    delay: 0.5,
  },
]

const features = [
  {
    icon: Eye,
    title: "Visual Discovery",
    description: "Explore diverse art forms and cultural expressions of traditional art forms from various regions.",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description:
      "Learn about history, techniques, and cultural significance of each art form through expert curated content.",
  },
  {
    icon: Heart,
    title: "Cultural Preservation",
    description:
      "Support the preservation of traditional art forms and connect with contemporary artists carrying forward these legacies.",
  },
]

export default function TraditionalArtHeritage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"
            animate={{
              x: mousePosition.x + Math.sin(Date.now() * 0.001 + i) * 100,
              y: mousePosition.y + Math.cos(Date.now() * 0.001 + i) * 100,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 backdrop-blur-sm" />

        <motion.div className="relative z-10 text-center max-w-4xl mx-auto" style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-medium bg-orange-100 text-orange-800 border-orange-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Cultural Heritage
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Traditional Art Heritage
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the rich tapestry of traditional art forms that have shaped our cultural identity through
              centuries of artistic expression and craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-orange-400 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Art Forms Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Art Forms Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our curated selection of traditional art forms, each telling a unique story of cultural heritage
              and artistic mastery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artForms.map((art) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: art.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${art.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                    <Image
                      src={art.image || "/placeholder.svg"}
                      alt={art.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                        {art.title}
                      </h3>
                      <p className="text-sm text-orange-600 font-medium">{art.subtitle}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{art.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 h-auto font-medium group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preserve & Appreciate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Preserve & Appreciate</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to preserve traditional art forms and make them accessible to art enthusiasts worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Art Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-10"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}
>>>>>>> 78288a6bf9084f2af66cd4dc8e4479b568de42c0
