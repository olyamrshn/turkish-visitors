"use client"
import Link from "next/link"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Logo } from "../public/svg/logo"
import { Arrow } from "../public/svg/arrow"

const Header = dynamic(
  () => import("../components/Header").then((mod) => mod.Header),
  {
    ssr: false,
  }
)

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-theme")
  }

  const links = [
    {
      href: "/about",
      text: "About",
      description: "The world does not stand still, and neither do we",
    },
    {
      href: "/contacts",
      text: "Contacts",
      description: "Easy to start: choose a way to connect!",
    },
    {
      href: "/legalinfo",
      text: "Legal Information",
      description: "Reliable Delivery Since 1999",
    },
  ]

  return (
    <div className="theme-text-color">
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showMainLink={true}
      />
      <main className="flex min-h-screen flex-col items-center p-10">
        <div className="my-5 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group rounded-lg border border-none px-5 pt-5 pb-20 transition-colors flex flex-col justify-start
            hover:bg-custom-blue hover:border-darker-blue
            dark:hover:bg-white dark:hover:border-white"
            >
              <h2 className="mb-3 text-3xl font-semibold">
                {link.text}{" "}
                <span className="leading-[140%] -tracking-[0.02em] inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                  <Arrow />
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
        <h2 className="text-4xl font-bold my-5">
          Keeping Business Flowing Since 1999
        </h2>
        <div></div>
      </main>
      <footer className="flex items-center w-full" style={{ height: "80px" }}>
        <div className="flex flex-row text-left pl-10 pb-10 font-bold text-2xl theme-text-color">
          <Logo style={{ width: "50px", height: "50px" }} />
          <h1 className="ml-1 flex items-center">
            <span>TED</span>
            <span className="ml-2 mr-1 w-px h-8 bg-current inline-block">
              |
            </span>
            <div className="ml-2 text-xs font-light opacity-75">
              <span>Transport</span>
              <br />
              <span>Evolution Dynamics</span>
            </div>
          </h1>
        </div>
      </footer>
    </div>
  )
}
