'use client'

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AudioPlayerProps {
    album: Album;
};

export interface Album {
    coverImage: string;
    title: string;
    tracks: Track[];
  }
  
  interface Track {
    title: string;
    audioUrl: string;
  }
  

const AudioPlayer: React.FC<AudioPlayerProps> = ({album}) => {
    const [currentTrack, setCurrentTrack] = useState<number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    //fix volver a play cuando este en pausa
    const handleTrackClick = (trackIndex: number) => {
      if (currentTrack === trackIndex) {
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play();
          } else {
            audioRef.current.pause();
          }
        }
      } else {
        setCurrentTrack(trackIndex);
        if (audioRef.current) {
          audioRef.current.src = album.tracks[trackIndex].audioUrl;
          audioRef.current.play();
        }
      }
    };
  
    return (
      <div className='sm:mx-5 h-full w-full mb-5 '>
        <Image src={album.coverImage} width={400} height={400} alt={album.title} />
        <h2 className='font-bold'>{album.title}</h2>
        <ul>
          {album.tracks.map((track, index) => (
            <li key={index}>
              <button onClick={() => handleTrackClick(index)} className='mr-3'>
              {currentTrack === index && !audioRef.current?.paused ? (
                <FontAwesomeIcon icon={faPause} className='icon' />
              ) : (
                <FontAwesomeIcon icon={faPlay} className='icon' />
              )}
              </button>
              {track.title}
            </li>
          ))}
        </ul>
        <audio ref={audioRef} controls className='hidden'>
        Your browser does not support the audio element.
      </audio>
      </div>
    );
    }

export default AudioPlayer