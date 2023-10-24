

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'So Far, So Near',
  description: 'So Far, So Near is an AI Art focused pavillion of the Wrong Biennale curated by Laura Focarazzo.',
  keywords: 'AI art, The Wrong Biennale'

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
