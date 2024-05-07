"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function LegalInfo() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.body.classList.toggle("dark-theme", newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
  }

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedDarkMode)
    document.body.classList.toggle("dark-theme", savedDarkMode)
  }, [])

  return (
    <div className="theme-text-color min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex flex-col px-5">
        <h1 className="font-bold  text-3xl text-center">Legal Information</h1>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
