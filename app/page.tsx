"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Arrow } from "../public/svg/arrow"
import { ContactIcon } from "../public/svg/contacts"
import { GlobeIcon } from "../public/svg/globe"
import { InfoIcon } from "../public/svg/info"
import Footer from "../components/Footer"
import Image from "next/image"

const Header = dynamic(
  () => import("../components/Header").then((mod) => mod.Header),
  {
    ssr: false,
  }
)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const images = [
    "https://images.omrshn.dev/bluetopcontaginers.jpeg",
    "https://images.omrshn.dev/bluelogisfticcars.jpeg",
    "https://images.omrshn.dev/bluenewseagulls.jpg",
  ]

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.body.classList.toggle("dark-theme", newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 300)
    }, 6000)
    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedDarkMode)
    document.body.classList.toggle("dark-theme", savedDarkMode)
  }, [])

  const links = [
    {
      href: "/about",
      text: "Learn More",
      description: "Get to know the experts driving your goods forward",
      icon: (
        <GlobeIcon
          className="icon icon-xs-white"
          style={{ width: "26px", height: "26px" }}
        />
      ),
    },
    {
      href: "/contacts",
      text: "Contacts",
      description: "Get in Touch with Us",
      icon: (
        <ContactIcon
          className="icon icon-xs-white"
          style={{ width: "26px", height: "26px" }}
        />
      ),
    },
    {
      href: "/legalinfo",
      text: "Legal Info",
      description: "Corporate Details & Financial Information",
      icon: (
        <InfoIcon
          className="icon icon-xs-white"
          style={{ width: "26px", height: "26px" }}
        />
      ),
    },
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        showMainLink={true}
      />
      <main className="theme-text-color main-content flex flex-col items-center">
        <h1 className="theme-text-color xs-who xl-who">Who We Are</h1>
        <h2 className="text-center mx-auto mt-5 xs:text-lg xl:text-xl font-normal space-y-4 text-content">
          ADL is a company based in Turkey, specializing in international trade.
          We engage in importing and exporting various goods for clients in
          Turkey and beyond.
        </h2>
        <div className="py-5 grid text-center xs:grid-rows-3 xs:max-w-1 xl:mb-0 xl:w-full xl:max-w-5xl xl:grid-cols-3 xl:grid-rows-1 xl:text-left xl:pb-5">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mb-2 group rounded-2xl px-4 pt-2 pb-20 flex flex-col justify-start xs-always-blue
            hover:bg-custom-blue hover:border-darker-blue
            dark:hover:bg-white dark:hover:border-white"
            >
              <h2 className="xs-heading link-item mb-3 text-3xl font-semibold flex items-center">
                <span className="icon pr-2 icon-xs-white">{link.icon}</span>
                {link.text}
                <span className="arrow arrow-white leading-[140%] -tracking-[0.02em] inline-block transition-transform group-hover:translate-x-3 group-hover:arrow-xl-white motion-reduce:transform-none">
                  <Arrow className="arrow xs-arrow arrow-white" />
                </span>
              </h2>
              <p className="xs:text-lg xl:text-xl m-0 max-w-[30ch] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
        <Image
          width="800"
          height="400"
          src={images[imageIndex]}
          alt="container ship image"
          style={{
            opacity: opacity,
            transition: "opacity 0.5s ease-in-out",
            objectFit: "fill",
          }}
          onLoad={() => setOpacity(1)}
          className="xs-image-ship xl-image-ship"
        />
      </main>
      <Footer />
    </div>
  )
}
