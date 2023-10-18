"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const artists = [
  { id: "case_western", name: "Case Western" },
  { id: "diana_millan", name: "Diana Millán" },
  { id: "eryk_salvaggio", name: "Eryk Salvaggio" },
  { id: "jeff_zorrilla", name: "Jeff Zorrilla" },
  { id: "julien_pacaud", name: "Julien Pacaud" },
  { id: "lucio_arese", name: "Lucio Arese" },
  { id: "polina_kostanda", name: "Polina Kostanda" },
  { id: "santiago_vitale", name: "Santiago Vitale" },
  { id: "sofia_crespo", name: "Sofía Crespo" },
  { id: "tedesco_mesz", name: "Tedesco & Mesz" },
  { id: "ulises_studio", name: "Ulises Studio" },
];

const Nav = () => {
  const { name } = useParams();
  const isDetailPage = name !== undefined;

  const isSelected = (nameId: string) => {
    return name === nameId ? "mb-2 hover:text-aqua" : "mb-2 opacity-10 hover:text-aqua hover:opacity-100";
  };

  return (
    <nav className="flex sticky min-h-screen flex-col justify-between pb-2 mx-4">
      <div className="flex flex-col w-40">
        <Link href="/" className="font-bold mb-10 mt-1">
          So Far So Near
        </Link>
        {artists.map((artist, index: number) => {
          return (
            <Link
              key={`artist-${artist.id}`}
              href={`/artists/${artist.id}`}
              className={isDetailPage ? isSelected(artist.id) : "mb-2 hover:text-aqua"}
            >
              {artist.name}
            </Link>
          );
        })}
        <Link href="/curatorship" className="font-bold hover:text-aqua mt-9">
          Curatorship
        </Link>
      </div>
      <Link href="https://thewrong.org/" target="_blank">
        <Image src="/logo.png" width={150} height={150} alt="The Wrong Biennale" className="flex bottom-2 left-4" />
      </Link>
    </nav>
  );
};

export default Nav;
