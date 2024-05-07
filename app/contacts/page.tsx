"use client"
import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ContactIcon } from "../../public/svg/contacts"

export default function Contacts() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-theme")
  }
  return (
    <div className="theme-text-color">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
