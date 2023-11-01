'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Logo from './Logo'
import Link from 'next/link';
import Navbar from './Navbar';

const Hero = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='flex items-center min-h-screen h-screen w-full mx-0 text-center custom-img bg-fixed bg-center justify-center'>
      <Navbar isNavbar={nav}/>
         <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#1E5A4C]/30 z-[2]'/>
        <Link className='scroll-smooth' href='#artists'>
          <div className='flex flex-col top-2/4 left-1/3  items-center'>
            <h1 className=' text-8xl font-bold font-arial text-a z-[3] tracking-tighter leading-[5rem] drop-shadow-2xl'>So Far, So Near</h1>
            <div className='rounded border-white z-[4] drop-shadow-xl items-center hidden md:flex justify-center p-3 mt-4 border-[3px] glass animate-pulse '>
            <Image src="/Vector.svg" width={35} height={20} alt='action' className='rotate-0'/> 
            </div>
            <div className='rounded border-white z-[4] drop-shadow-xl items-center flex justify-center p-3 mt-4 border-[3px] glass animate-pulse md:hidden' onClick={()=> {setNav(true); console.log('click')}}>
                <Image src="/Vector.svg" width={35} height={20} alt='action' className='-rotate-90'/>  
              </div> 
          </div>
        </Link>
        <Logo/>
        <Link href='https://thewrong.org/' target='_blank' className='absolute bottom-2 z-[3] left-0'>
            <Image src='/logo.png' width={150} height={150} alt='the wrong logo' />
        </Link>
    </div>
  )
}

export default Hero