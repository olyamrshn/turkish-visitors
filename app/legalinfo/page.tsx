"use client"
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import Footer from "../../components/Footer"
import { CopyIcon } from "@/public/svg/copy"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "@/public/svg/arrows"

export default function LegalInfo() {
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

  const copyToClipboard = (iban: string) => {
    navigator.clipboard.writeText(iban)
  }

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
        <Link href="/contacts">
          <button className="theme-text-color flex flex-row items-center justify-center">
            <ArrowLeft className="w-10 h-10 theme-text-color" />
            <p className="xs-buttontext xl-buttontext">Contacts</p>
          </button>
        </Link>
        <Link href="/">
          <button className="theme-text-color flex flex-row items-center justify-center">
            <p className="xs-buttontext xl-buttontext">Homepage</p>
            <ArrowRight className="w-10 h-10 theme-text-color ml-3" />
          </button>
        </Link>
      </div>
      <main className="main-content flex flex-col px-5 pb-10 xs:space-x-0 xl:space-x-20">
        <h1 className="xs-heading-pages theme-text-color font-bold text-3xl items-center text-center">
          Legal Information
        </h1>
        <div
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="xs-legal-direction xl-legal-direction text-center xs-description-pages xl-description-pages theme-text-color mt-3 xl:text-lg xs:w-4/5 xl:w-3/5"
        >
          <div className="xs-text-al xl-text-al">
            <h2 className="xs-leg-sec-heading xl-leg-sec-heading font-semibold pb-5">
              Corporate Profile
            </h2>
            <p className="mb-2">
              <strong>TIN:</strong> 81863815
            </p>
            <p className="mb-2">
              <strong>Legal address:</strong>
            </p>
            <p className="mb-2">
              Halkalı Merkez Mahallesi, <br />
              Dereboyu Caddesi No: 4
            </p>
            <p className="mb-2">
              <strong>Inner Door No:</strong>
            </p>
            <p className="mb-2">149 Küçükçekmece / İstanbul</p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+905013589608" className="hover-opacity">
                +90 (501) 358-96-08
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@adl.group" className="hover-opacity">
                info@adl.group
              </a>
            </p>
            <p className="mb-2">
              <strong>CEO:</strong> Serdar Ziya
            </p>
          </div>
          <div className="xs-text-al xl-text-al">
            <h2 className="xs-leg-sec-heading xl-leg-sec-heading font-semibold pb-5">
              Banking Connections
            </h2>
            <p className="mb-2">
              <strong>Bank:</strong> Kuveyt Türk Katılım Bankası A.Ş.
            </p>
            <p className="mb-2">
              <strong>Bank branch information:</strong>
              <br />
              Kartaltepe Mah. Halkalı
              <br />
              Cad. No:78 Sefaköy Küçükçekmece / Istanbul
            </p>
            <p className="mb-2">
              <strong>Bank branch code:</strong> 225
            </p>

            <div className="flex flex-col">
              <h3 className="font-bold py-2 xs-text-iban xl-text-iban">
                IBAN for transfers
              </h3>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <strong>TL:</strong>TR970020500009887562800001
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() =>
                      copyToClipboard("TR970020500009887562800001")
                    }
                  >
                    <CopyIcon />
                  </button>
                </div>
              </div>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <b>USD: </b>TR160020500009887562800101
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() =>
                      copyToClipboard("TR160020500009887562800101")
                    }
                  >
                    <CopyIcon />
                  </button>
                </div>
              </div>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <strong>EUR: </strong> TR860020500009887562800102
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() =>
                      copyToClipboard("TR860020500009887562800102")
                    }
                  >
                    <CopyIcon />
                  </button>
                </div>
              </div>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <strong>RU: </strong> TR590020500009887562800103
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() =>
                      copyToClipboard("TR590020500009887562800103")
                    }
                  >
                    <CopyIcon />
                  </button>
                </div>
              </div>
            </div>
            <p>SWIFT code: KTEFTRIS</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
