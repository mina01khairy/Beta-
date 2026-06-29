"use client"
import { Productscon } from '@/context/productscon';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Cart() {
    let { products, cart, addToCart, decreaseFromCart, removeFromCart, clearCart, totalItems, getQuantity } = useContext(Productscon)

    const total = cart.reduce(
        (acc, item) =>
            acc +
            Number(item.price.replace(/,/g, "").replace(" EGP", "")) * item.quantity,
        0
    );
    return (
        <>
            <div className='p-10 bg-[#f0f7ff]'>
                <div className='flex justify-between items-center  '>
                    <div className='text-3xl font-bold'>
                        Review Quote Request
                    </div>
                    <div className='rounded-full uppercase bg-[#cde4ff] text-xs px-5 py-1 font-bold text-[#0058be]' >
                         Items Selected
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 md:grid-cols-3 xl:grid-cols-4 py-10 gap-y-10 bg-[#f0f7ff] '>
                    {cart.map((item) => (

                        <div key={item.id} className='bg-white p-5 rounded-2xl'>
                            <div>
                                <img className='rounded-2xl' src={item.image} alt="" />
                            </div>

                            <div className='text-[#0058be] text-xs mt-5'>
                                {item.sku}
                            </div>
                            <div className='text-2xl font-bold'>
                                {item.name}
                            </div>

                            <div className='flex text-xs  font-bold py-5 text-[#0058be] gap-x-2'>
                                {item.tags.map((tag, index) => (
                                    <div key={index} className='border border-[#0058be] rounded px-3 py-1 bg-[#eaf4ff]'>{tag}</div>
                                ))}
                            </div>


                            <div className='flex w-30 px-3 py-2 justify-around rounded-2xl shadow  bg-[#e0eeff]'>
                                <div className='px-3' onClick={() =>{ decreaseFromCart(item);toast.success('Success')}}>-</div>
                                <div>{item.quantity}</div>
                                <div className='px-3' onClick={() =>{ addToCart(item);toast.success('Success')}}>+</div>
                            </div>

                            <div className='text-[#0058be] mt-3 font-bold text-2xl'>
                                {item.price}
                            </div>

                        </div>

                    ))}

                </div>
                <div className='bg-white p-5 rounded-2xl'>
                    <div className=' text-3xl font-bold border-b flex justify-center border-gray-200 mb-5 pb-5'>Summary</div>
                    <div className='flex justify-around text-3xl font-bold'>
                        <div>Total Price</div>
                        <div className='text-[#0058be]'>{total} EGP</div>
                    </div>
                    <div className='flex justify-center  '>
                        <Link href="/done" className='bg-[#0058be] text-2xl px-5 py-1 text-white rounded-xl mt-10 font-bold'>
                            Buy <i className="fa-solid fa-square-arrow-up-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='bg-black px-10 py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5'>
                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            TechBulk Wholesale
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Global logistics and bulk electronics procurement for enterprise partners.
                        </div>
                    </div>

                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            Resources
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Shipping Policy
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Quality Assurance
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Tax Documents
                        </div>

                    </div>

                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            Support
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Contact Support
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Terms of Service
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Help Center
                        </div>

 
                    </div>

                   
                </div>
                <div className='text-gray-500 text-center mt-15'>
                    © 2024 TechBulk Wholesale. Professional Grade Logistics.
                </div>
            </div>
        </>
    );
}


