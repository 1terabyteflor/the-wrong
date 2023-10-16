import Nav from '@/app/components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { promises as fs } from 'fs';
import AudioPlayer from '@/app/components/AudioPlayer';

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
  const formattedAbout = artist.about.replace(/\\r\\n/g, '\n');
  const formattedBio = artist.bio.replace(/\\r\\n/g, '\n');

  return ( 
    <div className='flex py-3 pr-20'>
      <div className='fixed left-0 top-0 overflow-y-auto'>
        <Nav/>
      </div>
      <div className='pl-52 pr-2 flex-1 flex-col overflow-y-auto'>
        {artist.video !== "" && 
              <video width="100%" height="100%" className='mb-2' controls>
              <source src={artist.video} type="video/mp4" />
              Tu navegador no admite la reproducción de videos.
            </video>
        }

      {artist.images.map((img: any, index: any) => (
        <Image
        key={index}
          src={img}
          alt='2'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }} 
        />
      ))}
        <h1 className='font-bold mb-2 font-arial'>{artist.title}</h1>
        {formattedAbout.split('\n').map((line: any, index: any) => (
          <p key={index}>{line}</p>
        ))}
        <h3 className='font-bold mt-4 font-arial'>About</h3>
        {formattedBio.split('\n').map((line: any, index: any) => (
          <p key={index}>{line}</p>
        ))}
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