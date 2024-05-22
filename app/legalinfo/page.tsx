"use client"
import { useState, useEffect } from "react"
import { translate } from "../../utils/translate"
import { useLanguage } from "../../contexts/LanguageContext"
import { Header } from "../../components/Header"
import Footer from "../../components/Footer"
import { CopyIcon, CopiedIcon } from "@/public/svg/copy"
import Navigation from "../../components/Navigation"
import { SlMenu } from "react-icons/sl"

export default function LegalInfo() {
  interface CopiedState {
    [key: string]: boolean
  }

  const { language } = useLanguage()
  const [darkMode, setDarkMode] = useState(false)
  const [copied, setCopied] = useState<CopiedState>({})
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleCopy = (iban: string) => {
    navigator.clipboard.writeText(iban)
    setCopied((prev) => ({ ...prev, [iban]: true }))
    setTimeout(() => setCopied((prev) => ({ ...prev, [iban]: false })), 2000)
  }

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
      <main className="main-content flex flex-col  pb-10 xs:space-x-0 xl:space-x-20">
        <h1 className="pt-5 xs-heading-pages theme-text-color font-bold text-3xl items-center text-center">
          {translate("legalTitle", language)}
        </h1>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="xs-legal-direction xl-legal-direction text-center xs-description-pages xl-description-pages theme-text-color mt-3 xl:text-lg xs:w-4/5 xl:w-3/5"
        >
          <div className="xs-text-al xl-text-al">
            <h2 className="xs-leg-sec-heading xl-leg-sec-heading font-semibold pb-5">
              {translate("legalProfile", language)}
            </h2>
            <p className="mb-2">
              <strong>TIN:</strong> 81863815
            </p>
            <p className="mb-2">
              <strong>{translate("legalAddress", language)}:</strong>
            </p>
            <p className="mb-2">
              Halkalı Merkez Mahallesi, <br />
              Dereboyu Caddesi No: 4
            </p>
            <p className="mb-2">
              <strong>{translate("legalInner", language)}:</strong>
            </p>
            <p className="mb-2">149 Küçükçekmece / İstanbul</p>
            <p className="mb-2">
              <strong> {translate("phone", language)}:</strong>{" "}
              <a href="tel:+905013589608" className="hover-opacity">
                +90 (501) 358-96-08
              </a>
            </p>
            <p className="mb-2">
              <strong> {translate("email", language)}:</strong>{" "}
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
              {translate("legalBanking", language)}
            </h2>
            <p className="mb-2">
              <strong>{translate("bank", language)}:</strong> Kuveyt Türk
              Katılım Bankası A.Ş.
            </p>
            <p className="mb-2">
              <strong>{translate("bankBranch", language)}:</strong>
              <br />
              Kartaltepe Mah. Halkalı
              <br />
              Cad. No:78 Sefaköy Küçükçekmece / Istanbul
            </p>
            <p className="mb-2">
              <strong>{translate("bankCode", language)}:</strong> 225
            </p>

            <div className="flex flex-col">
              <h3 className="font-bold py-2 xs-text-iban xl-text-iban">
                {translate("ibanTransfers", language)}:
              </h3>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <strong>TL:</strong> TR970020500009887562800001
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() => handleCopy("TR970020500009887562800001")}
                  >
                    {copied["TR970020500009887562800001"] ? (
                      <CopiedIcon />
                    ) : (
                      <CopyIcon />
                    )}
                  </button>
                </div>
              </div>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <b>USD: </b> TR160020500009887562800101
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() => handleCopy("TR160020500009887562800101")}
                  >
                    {copied["TR160020500009887562800101"] ? (
                      <CopiedIcon />
                    ) : (
                      <CopyIcon />
                    )}
                  </button>
                </div>
              </div>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <strong>EUR: </strong> TR860020500009887562800102
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() => handleCopy("TR860020500009887562800102")}
                  >
                    {copied["TR860020500009887562800102"] ? (
                      <CopiedIcon />
                    ) : (
                      <CopyIcon />
                    )}
                  </button>
                </div>
              </div>
              <div className="xs-legal-direction">
                <div className="xs-iban-text xl-iban-text">
                  <strong>RU: </strong> TR590020500009887562800103
                  <button
                    className="xs-copy xl-copy hover:cursor-copy hover:opacity-50"
                    onClick={() => handleCopy("TR590020500009887562800103")}
                  >
                    {copied["TR590020500009887562800103"] ? (
                      <CopiedIcon />
                    ) : (
                      <CopyIcon />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <p>
              <strong>{translate("swiftCode", language)}:</strong> KTEFTRIS
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
