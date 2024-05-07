"use client"
import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function LegalInfo() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-theme")
  }
  return (
    <div className="theme-text-color">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex min-h-screen flex-col px-5">
        <h1 className="font-bold  text-2xl text-center">Legal Information</h1>
      </main>
      <Footer />
    </div>
  )
}
