"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import Footer from "../../components/Footer"
import { Ship } from "../../public/svg/ship"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "@/public/svg/arrows"
import {
  CallIcon,
  TimerIcon,
  MailIcon,
  PinIcon,
} from "@/public/svg/contacts-group"

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-row justify-between pb-5">
        <Link href="/about">
          <button className="theme-text-color flex flex-row items-center justify-center">
            <ArrowLeft className="w-10 h-10 theme-text-color" />
            <p className="xs-buttontext xl-buttontext">About</p>
          </button>
        </Link>
        <Link href="/legalinfo">
          <button className="theme-text-color flex flex-row items-center justify-center">
            <p className="xs-buttontext xl-buttontext">Legal Info</p>
            <ArrowRight className="w-10 h-10 theme-text-color ml-3" />
          </button>
        </Link>
      </div>
      <main className="theme-text-color main-content flex flex-col items-center px-5">
        <Ship />
        <div className="flex flex-row pt-5 justify-center items-center">
          <h2 className="xs-heading-pages font-bold text-3xl text-center pr-2">
            Contact Us
          </h2>
        </div>
        <div className="xs-description-pages py-4 w-full max-w-4xl text-center justify-center items-center">
          <div className=" flex flex-row justify-center items-center space-x-2 text-center py-3">
            <CallIcon className="w-5 h-5" />
            <p className="font-normal xs:text-lg xl:text-xl">Phone:</p>
            <span className="font-normal xs:text-lg xl:text-xl">
              <a href="tel:+905013589608" className="hover-opacity">
                +90 (501) 358-96-08
              </a>
            </span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-2 text-center py-3">
            <MailIcon className="w-5 h-5" />
            <p className="font-normal xs:text-lg xl:text-xl">E-mail:</p>
            <span className="font-normal xs:text-lg xl:text-xl">
              <a href="mailto:info@adl.group" className="hover-opacity">
                info@adl.group
              </a>
            </span>
          </div>

          <div className="py-3 font-normal items-center justify-center xs:text-lg xl:text-xl flex flex-col">
            <TimerIcon className="w-5 h-5" />
            Work Hours:
            <div className="font-normal">Mon-Fri — 10:00-18:00</div>
            <div className="font-normal">Sat-Sun — Closed</div>
          </div>

          <div className="xs-description-pages text-center flex flex-col justify-center items-center">
            <div className="flex items-center justify-center">
              <PinIcon className="w-5 h-5" />
            </div>
            <a
              href="https://maps.app.goo.gl/FRARmi5RM3Qei5sS9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover-opacity"
            >
              <p className="xs-padding-adress xl-padding-adress">
                AntPlato Business Center Halkalı Merkez <br />
                Dereboyu Cd. No:4, 34303, <br />
                Küçükçekmece/İstanbul, Türkiye
              </p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
