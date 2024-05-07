"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ContactIcon } from "../../public/svg/contacts"

export default function Contacts() {
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
    <div className="theme-text-color">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex min-h-screen flex-col px-5">
        <div className="flex flex-row justify-center items-center">
          <h1 className="font-bold  text-2xl text-center pr-2">Contacts</h1>
          <ContactIcon style={{ width: "30", height: "30" }} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
