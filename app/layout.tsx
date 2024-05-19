import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADL International",
  description: "Importing and exporting various goods",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LanguageProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`${montserrat.className} ${montserrat.className}`}>
          {children}
        </body>
      </html>
    </LanguageProvider>
  )
}
