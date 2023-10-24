'use client'

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from "next/navigation";
import artistsJson from "@/data/artists.json";

const artists = Array.from(artistsJson.artists);




const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#FFFFFF');
    const [textColor, setTextColor] = useState('black');

    const handleNav = () => {
        setNav(!nav)
    }

    const { name } = useParams();
    const isDetailPage = name !== undefined;

    const isSelected = (nameId: string) => {
        return name === nameId ? "mb-2 hover:text-aqua" : "mb-2 opacity-10 hover:text-aqua hover:opacity-100";
    };

    return (
        <div style={{ backgroundColor: `transparent` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
            <div className='max-w-[1500px] pt-2 flex justify-end items-center text-black'>
                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10 mr-2'>
                    {nav ?
                        (<AiOutlineClose style={{ color: `${textColor}` }} size={25} />)
                        :
                        (<AiOutlineMenu style={{ color: `${textColor}` }} size={25} />)
                    }
                </div>
                {/* Mobile Menu */}
                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[white] text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul className='space-y-3'>
                        <li>
                            <Link onClick={handleNav} href='/'>
                                <h4 className='font-bold mb-4'>So Far, So Near</h4>
                            </Link>
                        </li>
                        {artists.map((artist, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={`/artists/${artist.id}`}
                                    className={isDetailPage ? isSelected(`${artist.id}`) : "mb-12 hover:text-aqua"}
                                >
                                    <li className='mb-4'>
                                    {artist.artist}
                                    </li>
                                </Link>
                            );
                        })}
                        <li>
                            <Link onClick={handleNav} href='/'>
                                <h4 className='italic'>Curatorship</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar