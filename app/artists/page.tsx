import React from 'react'
import Nav from '../components/Nav'
import Logo from '../components/Logo';

export default async function Artists () {
  return (
    <div className='flex w-full max-h-screen'>
        <Nav/>
        <Logo/>
    </div>
  )
}
