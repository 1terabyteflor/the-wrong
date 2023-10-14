import Nav from '@/app/components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

interface Artist {
  id: number,
  title: string;
  about: string; 
  artist: string;
  bio: string;
  images: string[];
  social: string[];
};

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/artists')
  const data = await res.json()
  
  return data.map((artist: Artist) => ({
    artist: artist.id,
  }))
}
async function getArtist(id: number) {
  const res = await fetch(`http://localhost:4000/artists/${id}`)
  return res.json()
}

async function getArtists() {
  const res = await fetch(`http://localhost:4000/artists`)
  return res.json()
}


export default async function Artist (props: any) {
    // const getIdByName = async (name: string) => {
    //   const artists = await getArtists()
    //   const formattedName = name.
    //   const artist = artists.find((artist: { artist: string; }) => artist.artist === formattedName);

    //   if (artist) {
    //     return artist.id;
    //   } else {
    //     return 0;
    //   }
    // }  

  // const id = getIdByName(props.params.name)
  // console.log(id)
  const artist = await getArtist(props.params.name)

  return ( 
    <div className='flex w-full pt-3'>
      <Nav/>
      <section className='px-2 flex flex-col'>
        <Image
          src="/Santiago-Vitale/2.png"
          alt='2'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '40%', height: 'auto' }} 
        />
        <Image
          src="/Santiago-Vitale/4.png"
          alt='2'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '40%', height: 'auto' }} 
        />
        <Image
          src="/Santiago-Vitale/3.png"
          alt='2'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '40%', height: 'auto' }} 
        />
        <h1 className='font-bold mb-2 font-arial'>{artist.title}</h1>
        <p>{artist.about}</p>
        <h3 className='font-bold mt-4 font-arial'>About</h3>
        <p>{artist.bio}
        </p>
        <div className='flex mt-4'>
          <Link href="https://cargocollective.com/santiagovitale" className='mr-3 underline hover:text-aqua'>cargocollective.com/santiagovitale</Link>
          <Link href="https://www.instagram.com/saintvita/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="mt-1 icon" />
          </Link>
        </div>
      </section>
    </div>
  )
}