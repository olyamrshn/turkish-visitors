"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import {
  WorldIcon,
  LangIcon,
  GivingIcon,
  PresentationIcon,
} from "../../public/svg/about-group"

export default function About() {
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
      <main className="text-center flex flex-col px-5 py-15">
        <h1 className="xs-heading-pages theme-text-color font-bold text-3xl">
          About ADL
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
            <p className=" xs-about-text xl-about-text">
              Our company collaborates with partners from European and North
              American countries, catering to their needs with a wide range of
              products, including specialized machinery, equipment, automotive
              and heavy machinery parts, oil, textiles, food products, and
              consumer goods.
            </p>
          </div>

          <div className="flex flex-col items-center text-center justify-center pb-5 fadeIn div1">
            <LangIcon className="xs-icon-about xl-icon-about" />
            <p className="xs-small-about xl-small-about ">
              {" "}
              We aim to deliver high-quality products and services, ensuring
              efficiency and reliability in every transaction.
            </p>
          </div>

          <div className="flex flex-col items-center text-center justify-center pb-5 fadeIn div2">
            <PresentationIcon className="xs-icon-about xl-icon-about" />
            <p className="xs-about-text xl-about-text ">
              Our team consists of experienced professionals ready to provide
              clients with quality solutions for their businesses. ADL is ready
              to partner with companies of all sizes, offering a professional
              approach and personalized service to each client.
            </p>
          </div>

          <div className="flex flex-col items-center text-center justify-center pb-5 fadeIn div3">
            <GivingIcon className=" xs-icon-about xl-icon-about" />
            <p className="xs-about-text xl-about-text">
              Choose ADL for your next trade deal and secure a reliable partner
              in international trade for your business. Our head office is based
              at{" "}
              <a
                href="https://maps.app.goo.gl/FRARmi5RM3Qei5sS9"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center hover-opacity font-semibold"
              >
                Ant Plato İŞ Merkezi (Küçükçekmece/Istanbul).
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
