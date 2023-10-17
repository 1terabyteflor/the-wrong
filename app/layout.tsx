

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'So Far, So Near'
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
