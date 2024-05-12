"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { Ship } from "../../public/svg/ship"
import { Logo } from "../../public/svg/logo"
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
              <p className="xs:text-lg xl:text-xl">
                AntPlato Business Center Halkalı Merkez <br />
                Dereboyu Cd. No:4, 34303, <br />
                Küçükçekmece/İstanbul, Türkiye
              </p>
            </a>
          </div>
        </div>
      </main>
      <footer
        className="xs-footer xl-footer text-xs bg-blue-200 py-4 xs-footer-leftpadding xl-footer-leftpadding"
        style={{ backgroundColor: "rgb(63 90 181)" }}
      >
        <div className="flex flex-row items-center space-x-">
          <Logo className="xs-footer-logo xl-footer-logo" />
          <p style={{ color: "white", paddingLeft: "2px" }}>Logistic Company</p>
        </div>

        <p style={{ color: "white" }}>© 2024 ADL. All rights reserved.</p>
      </footer>
    </div>
  )
}
