import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='max-h-screen w-full mx-0 md:relative text-center'>
        <Image src="/hero.png" alt='hero' fill/>
        <Link href='/artists'>
          <div className='flex flex-col top-2/4 left-1/3 md:absolute items-center'>
            <h1 className=' text-7xl font-arial text-a'>So Far, So Near</h1>
            <Image src="/Vector.svg" width={35} height={20} alt='action' className='fill-a mt-4 animate-pulse'/>
          </div>
        </Link>

        <Link href='https://thewrong.org/' target='_blank'>
            <Image src='/logo.png' width={150} height={150} alt='the wrong logo' className='absolute bottom-2 left-4'/>
        </Link>
        <Logo/>
    </div>
  )
}

export default Hero