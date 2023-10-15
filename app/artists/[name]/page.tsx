import Nav from '@/app/components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { promises as fs } from 'fs';

interface Artist {
  id: number,
  title: string;
  about: string; 
  artist: string;
  bio: string;
  images: string[];
  social: string[];
};

export default async function Artist (props: any) {
  const file = await fs.readFile(process.cwd() + '/data/artists.json', 'utf8');
  const data = JSON.parse(file);
  const artist = data.artists[props.params.name-1]
  console.log(artist.images)

  return ( 
    <div className='flex py-3 pr-20'>
      <div className='fixed left-0 top-0 overflow-y-auto'>
        <Nav/>
      </div>
      <div className='pl-52 pr-2 flex-1 flex-col overflow-y-auto'>
      {artist.images.map((img: any) => (
        <Image
          src={img}
          alt='2'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }} 
        />
      ))}
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
      </div>
    </div>
  )
}