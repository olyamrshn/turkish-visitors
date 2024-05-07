"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { Ship } from "../../public/svg/ship"

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
    <div className="theme-text-color min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex flex-col items-center px-5">
        <Ship />
        <div className="flex flex-row pt-5 justify-center items-center">
          <h1 className="font-bold  text-3xl text-center pr-2">Contact Us</h1>
        </div>

        <div className="py-7 w-full max-w-4xl text-center justify-center items-center">
          <div className="text-center flex flex-row justify-center items-center space-x-3">
            <a
              href="https://www.google.com/maps/place/AntPlato+Business+Center+Halkalı+Merkez+Dereboyu+Cd.+No:4,+34303,+Küçükçekmece/İstanbul,+Türkiye"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover-opacity"
            >
              <p className="xs:text-xl xl:text-2xl font-semibold">
                AntPlato Business Center Halkalı Merkez <br />
                Dereboyu Cd. No:4, 34303, <br />
                Küçükçekmece/İstanbul, Türkiye
              </p>
            </a>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3 text-center py-4">
            <p className="font-semibold xs:text-lg xl:text-xl">Phone:</p>
            <span className="font-semibold xs:text-lg xl:text-xl">
              <a href="tel:+905013589608" className="hover-opacity">
                +90 (501) 358-96-08
              </a>
            </span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-3 text-center py-3">
            <p className="font-semibold xs:text-lg xl:text-xl">E-mail:</p>
            <span className="font-semibold xs:text-lg xl:text-xl">
              <a href="mailto:info@adl.group" className="hover-opacity">
                info@adl.group
              </a>
            </span>
          </div>

          <p className="font-semibold xs:text-lg xl:text-xl">
            Work Hours:
            <br />
            <span className="font-normal">Mon-Fri — 10:00-18:00</span>
            <br />
            <span className="font-normal">Sat-Sun — Closed</span>
          </p>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
