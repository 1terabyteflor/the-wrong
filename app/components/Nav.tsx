'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
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
  const { name } = useParams();
  const isDetailPage = name !== undefined; 

  const isSelected = (nameId: string) => {
      return name === nameId ? "font-bold mb-2 hover:text-aqua" : "mb-2 opacity-10 hover:text-aqua hover:opacity-100";
  };

    return (
    <nav className='flex sticky min-h-screen flex-col justify-between pb-10 mx-3'>
      <div className='flex flex-col w-52'>
        <Link href="/" className='font-bold mb-10 mt-1'>So Far So Near</Link>
          {listArtists.map((nameArtist, index) => (
            <Link key={index} href={`/artists/${index+1}`} className={isDetailPage ? isSelected((index+1).toString()) : "mb-2 hover:font-bold"}>{nameArtist}
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