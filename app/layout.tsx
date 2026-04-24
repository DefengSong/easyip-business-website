import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'EasyIP Group | Protecting Your Innovations',
  description: 'Singapore-based IP consultancy specializing in patent applications, trademark registration, IP strategy, and dispute resolution. Protect your intellectual property with our expert team.',
  keywords: ['IP consultancy', 'patent applications', 'trademark registration', 'Singapore', 'intellectual property', 'IP strategy'],
}

export const viewport: Viewport = {
  themeColor: '#172554',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
