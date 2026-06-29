"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
    const [open, setopen] = useState(false);

    return (
        <>
            <div className='grid grid-cols-12 sm:px-7 opacity-97 justify-between  p-2 fixed top-0 left-0 right-0 bg-[#e8ecfd] shadow-md shadow-gray-300 z-50'>
                <button
                    className="sm:hidden col-span-2 items-center flex flex-col justify-center gap-1 "
                    onClick={() => {
                        if (open == true) {
                            setopen(false)
                        } else {
                            setopen(true)
                        }
                    }}
                >
                    <span className={`w-6 h-0.5 bg-black transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>

                    <span className={`w-6 h-0.5 bg-black transition-all ${open ? "opacity-0" : ""}`}></span>

                    <span className={`w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
                <div className='col-span-7 grid grid-cols-7 sm:col-span-3 font-inter text-3xl font-bold'>
                    <Link href="/" className='col-span-5'>Mina Beta+</Link>

                </div>
                <ul className='col-span-9 me-5 justify-end gap-x-5 items-center  max-sm:hidden flex '>

                    <li className=''>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link href="/cart">
                            My Car
                        </Link>
                    </li>

                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>

                    <li className='px-4 py-2 hover:bg-[#0a70e5] bg-[#0058be] text-white rounded shadow shadow-[#0058be]'>
                        <Link href="/contact">
                            Support
                        </Link>
                    </li>
                </ul>
                <button className='col-span-3 sm:hidden px-5 py-2 hover:bg-[#0a70e5] bg-[#0058be] text-white rounded shadow shadow-[#0058be]'>
                    <Link href="/contact">
                        Support
                    </Link>
                </button>

            </div>

            <div className={`list-none z-50 fixed sm:hidden top-0  left-0 ${open ? "translate-x-0" : "-translate-x-full"} duration-300 w-6/12 grid grid-rows-12 justify-center text-black h-dvh bg-white`}>


                <button
                    onClick={() => {
                        if (open == true) {
                            setopen(false)
                        } else {
                            setopen(true)
                        }
                    }}
                    className="flex flex-col justify-center gap-1 p-2 md:hidden"
                >
                    <span className={`w-6 h-0.5 bg-black transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>

                    <span className={`w-6 h-0.5 bg-black transition-all ${open ? "opacity-0" : ""}`}></span>

                    <span className={`w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>

                <li className=''>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Products
                    </Link>
                </li>

                <li>
                    <Link href="/cart">
                        My Car
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>


            </div>
        </>
    );
}


