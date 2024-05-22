"use client"
import { useState, useEffect } from "react"
import { translate } from "../../utils/translate"
import { useLanguage } from "../../contexts/LanguageContext"
import { Header } from "../../components/Header"
import Footer from "../../components/Footer"
import {
  WorldIcon,
  TruckIcon,
  GivingIcon,
  PresentationIcon,
} from "../../public/svg/about-group"
import Navigation from "../../components/Navigation"
import { SlMenu } from "react-icons/sl"

export default function About() {
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
        position: "relative",
        height: "100%",
      }}
    >
      {isNavOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-2"></div>
      )}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content text-center flex flex-col px-5 py-15">
        <div className="text-right">
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
        <h1 className="xs-heading-pages theme-text-color font-bold text-3xl">
          {translate("aboutTitle", language)}
        </h1>
        <div
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3rem",
          }}
          className="xs-description-pages theme-text-color mt-3 xs:w-4/5 xl:w-3/5"
        >
          <div className="theme-text-color flex flex-col items-center text-center justify-center pt-3 pb-5">
            <WorldIcon className="xs-icon-about xl-icon-about" />
            <p className="xs:text-base xl:text-xl">
              {translate("about1", language)}
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center pb-5 fadeIn div1">
            <TruckIcon className="xs-icon-about xl-icon-about slide-right" />
            <p className="xs:text-base xl:text-xl">
              {translate("about2", language)}
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center pb-5 fadeIn div2">
            <GivingIcon className="xs-icon-about xl-icon-about" />
            <p className="xs:text-base xl:text-xl">
              {translate("about3", language)}
            </p>
          </div>

          <div className="flex flex-col items-center text-center justify-center pb-5 fadeIn div3">
            <PresentationIcon className=" xs-icon-about xl-icon-about" />
            <p className="xs:text-base xl:text-xl">
              {translate("about4", language)}{" "}
              <a
                href="https://maps.app.goo.gl/FRARmi5RM3Qei5sS9"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center hover-opacity font-semibold"
              >
                {translate("aboutLinkAddress", language)}
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
