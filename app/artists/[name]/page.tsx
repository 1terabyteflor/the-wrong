import Nav from "@/app/components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { promises as fs } from "fs";
import AudioPlayer from "@/app/components/AudioPlayer";
import artistsJson from "@/data/artists.json";
import Navbar from "@/app/components/Navbar";
export interface ArtistPageProps {
  params: { name: string };
}

export const generateStaticParams = async () => {
  return artists.map((artist) => {
    return {
      slug: {
        name: artist.id,
      },
    };
  });
};

const artists = Array.from(artistsJson.artists);

export default async function Page({ params }: ArtistPageProps) {
  const artist = artists.find((artist) => artist.id === parseInt(params.name))!;

  const formattedAbout = artist.about.replace(/\\r\\n/g, "\n");
  const formattedBio = artist.bio.replace(/\\r\\n/g, "\n");

  const getTitleFromUrl = (url: string) => {
    const cleanedUrl = url.replace(/https:\/\/www\./, "");
    const urlParts = cleanedUrl.split("/");
    const title = urlParts[urlParts.length - 1];

    return title;
  };

  return (
    <div className="flex py-3 pr-20">
      <div className="hidden md:flex md:fixed left-0 top-0 overflow-y-auto">
        <Nav />
      </div>
      <div className="md:pl-52 md:pr-2 flex-1 flex-col overflow-y-auto ">
        {
          artist.video !== "" && (
            <video width="100%" height="100%" className="mb-2" controls>
              <source src={artist.video} type="video/mp4" />
              Tu navegador no admite la reproducción de videos.
            </video>
          )
          // <><iframe src="https://player.vimeo.com/video/833783951?h=f6153a151f" width="900" height="506" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></>
        }

        {!!artist.album && (
          <div className="flex">
            {artist.album.map((album: any, index: any) => (
              <AudioPlayer album={album} key={index} />
            ))}
          </div>
        )}

        {artist.images.map((img: any, index: any) => (
          <Image
            key={index}
            src={img}
            alt="2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "70%", height: "auto", marginBottom: "20px" }}
          />
        ))}
        <h1 className="font-bold mb-2 font-arial">{artist.title}</h1>
        {formattedAbout.split("\n").map((line: any, index: any) => (
          <p key={index}>{line}</p>
        ))}
        <h3 className="font-bold mt-4 font-arial">About</h3>
        {formattedBio.split("\n").map((line: any, index: any) => (
          <p key={index}>{line}</p>
        ))}
        <h3 className="font-bold mt-4 font-arial">Contact</h3>
        <div className="flex">
          {artist.social.map((social: any, key: number) => (
            <Link key={key} href={social} className="mr-3 underline hover:text-aqua" target="_blank">
              {social.toLowerCase().includes("instagram") ? (
                <FontAwesomeIcon icon={faInstagram} className="mt-1 icon" />
              ) : (
                getTitleFromUrl(social)
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
