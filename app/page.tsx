"use client"
import Link from "next/link"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Arrow } from "../public/svg/arrow"
import { Footer } from "../components/Footer"
import { ContactIcon } from "../public/svg/contacts"
import { GlobeIcon } from "../public/svg/globe"
import { InfoIcon } from "../public/svg/info"

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
      icon: (
        <GlobeIcon
          className="icon-xs-white"
          style={{ width: "24px", height: "24px" }}
        />
      ),
    },
    {
      href: "/contacts",
      text: "Contacts",
      description: "Easy to start: choose a way to connect!",
      icon: (
        <ContactIcon
          className="icon-xs-white"
          style={{ width: "24px", height: "24px" }}
        />
      ),
    },
    {
      href: "/legalinfo",
      text: "Legal Info",
      description: "Keeping Business Flowing Since 1999",
      icon: (
        <InfoIcon
          className="icon-xs-white"
          style={{ width: "24px", height: "24px" }}
        />
      ),
    },
  ]

  return (
    <div className="theme-text-color">
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showMainLink={true}
      />
      <main className="flex min-h-screen flex-col items-center ">
        <div className="py-5 grid text-center xs:grid-rows-3 xl:mb-0 xl:w-full xl:max-w-5xl xl:grid-cols-3 xl:grid-rows-1 xl:text-left xl-pb-5">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mb-0.5 group rounded-lg border border-none px-5 pt-5 pb-20 transition-colors flex flex-col justify-start xs-always-blue
            hover:bg-custom-blue hover:border-darker-blue
            dark:hover:bg-white dark:hover:border-white"
            >
              <h2 className="xs-heading link-item mb-3 text-3xl font-semibold flex items-center">
                <span className="pr-2 icon-xs-white">{link.icon}</span>
                {link.text}
                <span className="leading-[140%] -tracking-[0.02em] inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                  <Arrow className="xs-arrow" />
                </span>
              </h2>
              <p className="xs-description m-0 max-w-[30ch] xl:text-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
        <h2 className="mt-2 xs:text-2xl xl:text-4xl font-bold my-1 space-y-4">
          ADL is a company based in Turkey, specializing in international trade.
          <br />
          We engage in importing and exporting various goods for clients in
          <br />
          Turkey and beyond.
        </h2>
      </main>
      <Footer />
    </div>
  )
}
