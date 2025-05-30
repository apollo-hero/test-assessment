import type { Metadata } from "next"
import localFont from "next/font/local"
import Providers from "./ClientWrapper"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import "./globals.css"
import Navbar from "./components/Navbar"
const geistSans = localFont({
 src: "./fonts/GeistVF.woff",
 variable: "--font-geist-sans",
 weight: "100 900",
})
const geistMono = localFont({
 src: "./fonts/GeistMonoVF.woff",
 variable: "--font-geist-mono",
 weight: "100 900",
})

export const metadata: Metadata = {
 title: "Defi forge",
 description:
  "Defi forge is a platform that allows you to create your own DeFi project in minutes.",
}

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 const locale = await getLocale()
 const messages = await getMessages()
 return (
  <html lang={locale}>
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <NextIntlClientProvider messages={messages}>
     <Providers>
      <Navbar />
      {children}
     </Providers>
    </NextIntlClientProvider>
   </body>
  </html>
 )
}
