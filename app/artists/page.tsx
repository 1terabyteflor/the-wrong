import React from 'react'
import Nav from '../components/Nav'
import AudioPlayer, { Album } from '../components/AudioPlayer'

const artistAlbums: Album[] = [
  {
    coverImage: '/Case-Western/1-Party-Music/cover.jpg',
    title: 'Party-Music - Party Music',
    tracks: [
      { title: 'Party-Music - Party Music', audioUrl: '/Case-Western/1-Party-Music/1.mp3' },
    ],
  },
  {
    coverImage: '/Case-Western/2-Party-Music/cover.png',
    title: 'Party Music - Take It Away! EP',
    tracks: [
      { title: '01 Jukebox Saturday Nightmare', audioUrl: '/Case-Western/2-Party-Music/1.aiff' },
      { title: '02 I Got It Bad (Cluster Headaches)', audioUrl: '/Case-Western/2-Party-Music/2.aiff' },
      { title: '03 So-Called-Elmer`s So-Called-Tune', audioUrl: '/Case-Western/2-Party-Music/3.aiff' },
      { title: '04 Why Don`t You Play Right', audioUrl: '/Case-Western/2-Party-Music/4.aiff' },
    ],
  },
  {
    coverImage: '/Case-Western/3-Party-Music/cover.jpg',
    title: 'Party Music - Just The Hits!',
    tracks: [
      { title: '01 Jukebox Saturday Nightmare', audioUrl: '/Case-Western/2-Party-Music/1.aiff' },
      { title: '01 Jukebox Saturday Nightmare', audioUrl: '/Case-Western/2-Party-Music/1.aiff' },
    ],
  }
];


export default async function Artists () {
  return (
    <div className='flex w-full pt-3'>
        <Nav/>
{/*         {artistAlbums.map((album, index) => (
          <AudioPlayer key={index} album={album} />
      ))}
 */}    </div>
  )
}
