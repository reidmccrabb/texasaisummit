import type { Metadata } from 'next'
import { Oxanium, Fira_Code, Merriweather } from 'next/font/google'
import './globals.css'

const oxanium = Oxanium({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Texas AI Summit 2025',
  description: 'Join us March 10-11, 2025 in Austin for the premier AI conference in Texas, where innovation meets industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oxanium.variable} ${firaCode.variable} ${merriweather.variable} font-sans`}>{children}</body>
    </html>
  )
}