"use client"
import { useState, useEffect } from "react"
import { translate } from "../../utils/translate"
import { useLanguage } from "../../contexts/LanguageContext"
import { Header } from "../../components/Header"
import Footer from "../../components/Footer"
import { Ship } from "../../public/svg/ship"
import Navigation from "../../components/Navigation"
import { SlMenu } from "react-icons/sl"

import {
  CallIcon,
  TimerIcon,
  MailIcon,
  PinIcon,
} from "@/public/svg/contacts-group"

export default function Contacts() {
  const { language } = useLanguage()
  const [darkMode, setDarkMode] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

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
        paddingBottom: "3rem",
      }}
    >
      {isNavOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-2"></div>
      )}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="text-right pr-10">
        <button
          className="font-bold theme-text-color"
          onClick={() => setIsNavOpen(true)}
        >
          <SlMenu className="w-6 h-6" />
        </button>
        {isNavOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            <Navigation onClose={() => setIsNavOpen(false)} />
          </>
        )}
      </div>
      <main className="theme-text-color main-content flex flex-col items-center px-5 pt-[1rem]">
        <Ship />

        <div className="flex flex-row pt-5 justify-center items-center">
          <h2 className="xs-heading-pages font-bold text-3xl text-center">
            {translate("contactsTitle", language)}
          </h2>
        </div>
        <div className="xs-description-pages py-4 w-full max-w-4xl text-center justify-center items-center">
          <div className=" flex flex-row justify-center items-center space-x-2 text-center py-3">
            <CallIcon className="w-5 h-5" />
            <p className="font-normal xs:text-lg xl:text-xl">
              {translate("phone", language)}:
            </p>
            <span className="font-normal xs:text-lg xl:text-xl">
              <a href="tel:+905013589608" className="hover-opacity">
                +90 (501) 358-96-08
              </a>
            </span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-2 text-center py-3">
            <MailIcon className="w-5 h-5" />
            <p className="font-normal xs:text-lg xl:text-xl">
              {translate("email", language)}:
            </p>
            <span className="font-normal xs:text-lg xl:text-xl">
              <a href="mailto:info@adl.group" className="hover-opacity">
                info@adl.group
              </a>
            </span>
          </div>

          <div className="py-3 font-normal items-center justify-center xs:text-lg xl:text-xl flex flex-col">
            <TimerIcon className="w-5 h-5" />
            {translate("contactsHours", language)}
            <div className="font-normal">
              {translate("contactsOpen", language)}
            </div>
            <div className="font-normal">
              {translate("contactsClosed", language)}
            </div>
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
                {translate("contactsAntPlato", language)} <br />
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
