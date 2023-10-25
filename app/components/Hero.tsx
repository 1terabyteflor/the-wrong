import React, { useEffect } from 'react';
import Image from 'next/image'
import Logo from './Logo'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


const Hero = () => {
  return (
    <div className='flex items-center min-h-screen h-screen w-full mx-0 text-center custom-img bg-fixed bg-center justify-center'>
         <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#1E5A4C]/30 z-[2]'/>
        <Link className='scroll-smooth' href='#artists'>
          <div className='flex flex-col top-2/4 left-1/3  items-center'>
            <h1 className=' text-8xl font-bold font-arial text-a z-[3] tracking-tighter leading-[5rem] drop-shadow-2xl	'>So Far, So Near</h1>
            <Image src="/Vector.svg" width={35} height={20} alt='action' className='mt-4 animate-pulse z-[4] -rotate-90 md:rotate-0 drop-shadow-xl'/>
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