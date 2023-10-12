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
    <nav className='flex sticky mt-5 w-52 max-h-screen flex-col'>
      <p className='font-bold'>Pavillion</p>

      <p className='font-bold'>Curatorial Text</p>
      <p className='font-bold'>Contact</p>
    </nav>
  )
}

export default Nav;