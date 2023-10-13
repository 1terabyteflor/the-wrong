import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='max-h-screen w-full mx-0 md:relative text-center'>
        <Image src="/hero.png" alt='hero' fill/>
        <Link href='/artists'>
          <h1 className='md:absolute top-2/4 left-1/3  text-7xl font-arial hover:text-aqua'>So Far, So Near</h1>
        </Link>
        <Link href='https://thewrong.org/' target='_blank'>
            <Image src='/logo.png' width={200} height={200} alt='the wrong logo' className='absolute bottom-2 left-4'/>
        </Link>
        <Link href='https://c7studio.net/' target='_blank'>
            <Image src='/logo-c7.png' width={100} height={90} alt='the wrong logo' className='absolute bottom-2 right-4'/>
        </Link>
    </div>
  )
}

export default Hero