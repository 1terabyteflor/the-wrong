import Image from 'next/image'
import Navigation from './components/Nav'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Hero/>
    </main>
  )
}
