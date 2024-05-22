import React, { useState } from "react"
import { translate } from "../utils/translate"
import { useLanguage } from "../contexts/LanguageContext"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="theme-text-color hover:cursor-pointer space-y-2">
      <button
        className="hover:cursor-pointer hover:opacity-90"
        onClick={toggleMenu}
      >
        <p className="font-medium">☰ {translate("navigation", language)}</p>
      </button>
      {isOpen && (
        <div className="flex flex-col">
          <button onClick={() => alert("home")}>
            {translate("homepage", language)}
          </button>
          <button onClick={() => alert("Abouts")}>
            {translate("aboutTitle", language)}
          </button>
          <button onClick={() => alert("Contacts")}>
            {translate("contactUs", language)}
          </button>
          <button onClick={() => alert("Legal Info")}>
            {" "}
            {translate("legalInfo", language)}
          </button>
        </div>
      )}
    </div>
  )
}
