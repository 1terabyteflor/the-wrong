

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'So Far, So Near',
  description: 'So Far, So Near is a pavilion of the Wrong Biennale curated by Laura Focarazzo.'
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
