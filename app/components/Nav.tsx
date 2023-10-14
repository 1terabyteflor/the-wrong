'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const listArtists: string[] = [
  "Santiago Vitale",
  "Case Western",
  "Ulises Studio", 
  "Tedesco-Mesz", 
  "Polina Kostanda", 
  "Jeff Zorrilla", 
  "Eryk Salvaggio", 
  "Sofía Crespo", 
  "Lucio Arese", 
  "Julien Pacaud", 
  "Diana Millán"
]



const Nav = () => {
    return (
    <nav className='flex sticky w-6/12 min-h-screen flex-col justify-between pb-10 mx-3 px-3'>
      <div className='flex flex-col'>
        <Link href="/" className='font-bold mb-10'>So Far So Near</Link>
          {listArtists.map((name, index) => (
            <Link key={index} href={`/artists/${name.replace(/ /g,"-")}`} className='mb-2 hover:text-aqua'>{name}
            </Link>
          ))}
        <Link href="/curatorship" className='font-bold hover:text-aqua mt-9'>Curatorship</Link>
      </div>
      <Link href='https://thewrong.org/' target='_blank'>
        <Image src="/logo.png" width={150} height={150} alt='The Wrong Biennale' className='flex bottom-1'/>
      </Link>
    </nav>
  )
}

export default Nav;