"use client"
import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-theme")
  }

  //todo: customize card style in main site

  return (
    <div className="theme-text-color">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="text-center flex min-h-screen flex-col px-5">
        <h1 className="font-bold text-2xl">About</h1>
        <div
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="mt-3 xs:text-base xl:text-lg xs:w-4/5 xl:w-3/5"
        >
          <p className="mb-3 text-xl font-bold">
            ADL is a company based in Turkey, specializing in international
            trade.
            <br />
            <span className="text-medium">
              {" "}
              We engage in importing and exporting various goods for clients in
              Turkey and beyond.
            </span>
          </p>
          <p>
            {" "}
            Our company collaborates with partners from European and North
            American countries, catering to their needs with a wide range of
            products, including specialized machinery, equipment, automotive and
            heavy machinery parts, oil, textiles, food products, and consumer
            goods. We aim to deliver high-quality products and services,
            ensuring efficiency and reliability in every transaction.
          </p>
          <p>
            Our team consists of experienced professionals ready to provide
            clients with quality solutions for their businesses. ADL is ready to
            partner with companies of all sizes, offering a professional
            approach and personalized service to each client. Choose ADL for
            your next trade deal and secure a reliable partner in international
            trade for your business. Our head office is based at Ant Plato İŞ
            Merkezi (Küçükçekmece/Istanbul).
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
