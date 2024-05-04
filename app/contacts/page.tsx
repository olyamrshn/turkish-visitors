"use client"
import { useState } from "react"
import { Header } from "../../components/Header"

export default function Contacts() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-theme")
  }
  return (
    <div className="theme-text-color">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex min-h-screen flex-col p-5">
        <h1 className="font-bold  text-2xl text-center py-10">Contacts</h1>
      </main>
    </div>
  )
}
