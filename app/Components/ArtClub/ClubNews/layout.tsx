import type React from "react"
import { Inter } from "next/font/google"
// import "./globals.css"
import Header from "./header"
import Footer from "./footer"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Club News",
  description: "Stay updated with the latest news and events from our club",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
          <Header />
          {children}
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
