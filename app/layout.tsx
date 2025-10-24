import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Business Landing Page',
  description: 'Professional business landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}