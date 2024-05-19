"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState("EN")

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
