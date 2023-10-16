import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="https://c7studio.net/" target='_blank'>
    <div className="flex w-auto h-auto absolute bottom-2 right-4">
      <Image className="" src="/c.svg" alt="Logo" width={22} height={50} />
      <Image className="logoc7 mx-1" src="/logoast.svg" alt="Logo" width={22} height={50} />
      <Image className="" src="/7.svg" alt="Logo" width={22} height={50} />
    </div>
  </Link>
)
}

export default Logo