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
