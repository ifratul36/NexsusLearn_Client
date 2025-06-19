import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NextAuthSessionProvider from "../../Providers/NextAuthSessionProvider"
import { Navbar } from "../components/navbar"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexusLearn - Smart Academic Monitoring System",
  description:
    "Advanced academic monitoring and communication system with biometric authentication, real-time analytics, and comprehensive user management for students, faculty, and guardians.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar></Navbar>
            {children}
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
