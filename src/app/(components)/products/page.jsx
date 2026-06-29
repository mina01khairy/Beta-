"use client"
import React, { useContext, useState } from 'react';
import { Productscon } from '../../../context/productscon';
import {toast} from 'react-hot-toast';

export default function Products() {
  

    let {products , addToCart}=useContext(Productscon)

    const [search, setSearch] = useState("");

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

   
    return (
        <>
            <div className="mx-5 md:mx-20 pt-5">
                <h1 className="text-3xl font-bold ">
                    Global Inventory
                </h1>
                <div className='mt-4 text-lg text-gray-600'>
                    Browse our high-volume electronics catalog. Verified professional hardware for enterprise distributors and retail chains.
                </div>
                <div className=' bg-gray-100 border px-4 py-2 my-7 w-70 rounded-2xl border-gray-300 text-black focus-within:ring-1 focus-within:ring-[#0058be] focus-within:border-[#0058be]'>
                    <i className="fa-solid fa-magnifying-glass me-2 text-gray-500"></i>
                    <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search products..." className=" focus:outline-none" />
                </div>

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-10 gap-y-10 bg-[#f0f7ff] '>
                {filtered.map((item) => (
                    <div key={item.id} id={item.idd} className='mx-5 group overflow-hidden bg-white p-2 mb-5 rounded-2xl  relative'>
                        <div className={`z-10 uppercase px-4 text-xs top-3 left-3 ${item.statusBg} rounded-3xl py-2 ${item.statusColor} absolute`}>
                            {item.status}
                        </div>
                        <div className=' overflow-hidden rounded-2xl'>
                            <img className='group-hover:scale-110 duration-300' src={`${item.image}`} alt="" />
                        </div>
                        <div className='flex justify-between text-sm text-gray-500 uppercase mt-5'>
                            <div>
                                {item.category}
                            </div>

                            <div>
                                {item.sku}
                            </div>
                        </div>
                        <div className='text-2xl font-bold mt-2'>{item.name}</div>

                        <div className='flex text-xs border-b border-b-gray-200 font-bold py-5 text-[#0058be] gap-x-2'>
                            {item.tags.map((tag,index) => (
                                <div key={index} className='border border-[#0058be] rounded px-3 py-1 bg-[#eaf4ff]'>{tag}</div>
                            ))}
                        </div>
                        <div className='flex justify-between items-center my-5'>

                            <div className='text-[#0058be] font-bold text-2xl'>{item.price}</div>

                            <div onClick={()=>{addToCart(item); toast.success('Success') }} className='p-3 hover:bg-[#4889d3] bg-[#2577d5] rounded-2xl'>
                                <i  className="fa-solid fa-cart-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                ))}
            
            </div >


            <div className='bg-black px-10 py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5'>
                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            TechBulk Wholesale
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Premium high-volume electronics procurement for global enterprises. Efficiency through technological precision.
                        </div>
                    </div>

                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            Product Catalog
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Smartphones
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Laptops
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Accessories
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Storage Solutions
                        </div>
                    </div>

                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            Company
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Quality Assurance
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Shipping Policy
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Terms of Service
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Compliance
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
                            FAQ Portfolio
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            API Documentation
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


