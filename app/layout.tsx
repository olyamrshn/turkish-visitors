import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({ subsets: ["latin"] })

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ted.ico" />
      </head>
      <body className={`${raleway.className} ${raleway.className}`}>
        {children}
      </body>
    </html>
  )
}
