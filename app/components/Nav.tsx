"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import artistsJson from "@/data/artists.json";
import { useState } from "react";

const artists = Array.from(artistsJson.artists);



const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  const { name } = useParams();
  const isDetailPage = name !== undefined;

  const isSelected = (nameId: string) => {
    return name === nameId ? "mb-2 hover:text-aqua" : "mb-2 opacity-10 hover:text-aqua hover:opacity-100";
  };

  return (
    <nav className=" hidden md:flex sticky min-h-screen flex-col justify-between pb-2 mr-4">
      <div className="flex flex-col w-40 ml-4">
        <Link href="/" className="font-bold mb-10 mt-1">
          So Far So Near
        </Link>
        {artists.map((artist, index) => {
          return (
            <Link
              key={index}
              href={`/artists/${artist.id}`}
              className={isDetailPage ? isSelected(`${artist.id}`) : "mb-2 hover:text-aqua"}
            >
              {artist.artist}
            </Link>
          );
        })}
        <Link href="/curatorship" className="font-bold hover:text-aqua mt-9">
          Curatorship
        </Link>
      </div>
      <Link href="https://thewrong.org/" target="_blank">
        <Image src="/logo.png" width={150} height={150} alt="The Wrong Biennale" className="flex bottom-2" />
      </Link>
    </nav>
  );
};

export default Nav;
