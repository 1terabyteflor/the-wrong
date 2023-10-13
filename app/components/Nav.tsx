import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  interface Artist {
    artist: String, 
    bio: String, 
    title: String, 
    about: String, 
    images: Array<String>,
    links: Array<String>
  };

  return (
    <nav className='flex sticky w-64 min-h-screen flex-col justify-between pb-10 ml-3 mt-3'>
      <div className='flex flex-col'>
        <Link href="/" className='font-bold mb-10'>So Far So Near</Link>
        <Link href="/artists" className='font-bold mb-2'>Artists</Link>
        <Link href="/curatorship" className='font-bold hover:text-aqua'>Curatorship</Link>
      </div>
      <Link href='https://thewrong.org/' target='_blank'>
        <Image src="/logo.png" width={150} height={150} alt='The Wrong Biennale' className='flex bottom-1'/>
      </Link>
    </nav>
  )
}

export default Nav;