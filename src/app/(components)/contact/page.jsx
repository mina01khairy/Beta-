"use client"
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';

export default function Contact() {

    function sub() {

    }

    const inquiryOptions = [
        "Bulk Procurement Quote",
        "Supply Chain Partnership",
        "Technical Support",
        "Logistics & Shipping",
        "Other Inquiry",
    ];

    let formik = useFormik({
        initialValues: {
            name: "",
            Email: "",
        },
        onSubmit: sub
    })
    return (
        <>
            <div className='p-6 bg-[#f7fbff]'>
                <div className='uppercase text-xs pt-5 text-[#0058be] font-bold'>
                    Contact Our Logistics Team
                </div>

                <div className='text-5xl font-bold py-5'>
                    High-Volume Solutions, Human-Scale Support.
                </div>

                <p className='text-xl text-gray-600 '>
                    Whether you're scaling a national retail chain or managing global distribution, our enterprise procurement officers are ready to assist.
                </p>

                <form className='px-5 rounded-2xl md:mx-auto md:w-10/12 shadow mt-20 bg-white' onSubmit={formik.handleSubmit}>
                    <div className='text-2xl font-bold pt-10 pb-3'>
                        Send an Inquiry
                    </div>
                    <div className='grid grid-cols-1 gap-x-5 sm:grid-cols-2'>

                        <div className="relative   z-0 w-full my-5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder=" "
                                className="peer  block bg-gray-200 rounded-2xl overflow-hidden w-full px-3 pt-5 pb-4 text-sm text-gray-900   appearance-none focus:outline-none "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-7 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75"
                            >
                                Name
                            </label>

                        </div>


                        <div className="relative z-0 w-full my-5">
                            <input
                                type="email"
                                name="Email"
                                id="Email"
                                value={formik.values.Email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder=" "
                                className="peer  block bg-gray-200 rounded-2xl overflow-hidden w-full px-3 pt-5 pb-4 text-sm text-gray-900   appearance-none focus:outline-none "
                                required
                            />
                            <label
                                htmlFor="Email"
                                className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-7 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75"
                            >
                                mina@company.com
                            </label>

                        </div>
                    </div>
                    <div className="relative z-0 w-full my-5">
                        <select
                            name="inquirySubject"
                            id="inquirySubject"
                            value={formik.values.inquirySubject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="block bg-gray-200 rounded-2xl w-full px-3 pt-6 pb-2 text-sm text-gray-900 appearance-none focus:outline-none"
                            required
                        >
                            <option value="" disabled hidden></option>
                            {inquiryOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <label
                            htmlFor="inquirySubject"
                            className={`absolute left-3 text-gray-500 duration-300 transform pointer-events-none top-1 text-xs scale-90`}
                        >
                            Inquiry Subject
                        </label>


                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            ▾
                        </div>
                    </div>


                    <div className="relative z-0 w-full my-5">
                        <textarea
                            name="message"
                            id="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder=" "
                            rows={4}
                            className="peer block bg-gray-200 rounded-2xl w-full px-3 pt-6 pb-10 text-sm text-gray-900 appearance-none focus:outline-none resize-none"
                            required
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-7 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75"
                        >
                            Message
                        </label>
                    </div>

                    <div className='flex justify-center pb-10'>
                        <Link href="/done" onClick={() => sub()} className='px-10 py-5 rounded-2xl bg-black hover:bg-[#343434] text-white'>
                            Send Massage
                            <i className="fa-solid fa-paper-plane  ms-3"></i>
                        </Link>
                    </div>

                </form>

                <div className='grid grid-cols-1 sm:grid-cols-2  gap-3 mt-8'>

                    <div className='flex bg-white shadow px-5 gap-3 py-5 rounded-2xl '>
                        <div className='text-[#0058be] p-3 rounded-2xl bg-[#c7e1ff]'>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <div>
                                Email Distribution
                            </div>

                            <div className=''>
                                mina01khairy@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className='flex bg-white shadow px-5 gap-3 py-5 rounded-2xl '>
                        <div className='text-[#0058be] p-3 rounded-2xl bg-[#c7e1ff]'>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div>
                            <div>
                                whatsapp
                            </div>

                            <div className=''>
                                +20 1009618262
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-black px-10 py-10'>
                <div className=' mb-5'>
                    <div className=" text-white font-inter text-2xl font-bold my-5">
                        TechBulk
                    </div>

                    <div className="text-gray-400 text-md mb-2">
                        Powering the world's leading electronic retail chains with high-volume precision logistics and quality assurance.
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-10 gap-x-5'>

                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            Solutions
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Inventory Management
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Wholesale Logistics
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Custom Procurement
                        </div>


                    </div>

                    <div className=' mb-5'>
                        <div className=" text-white font-inter text-2xl font-bold my-5">
                            Governance
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Shipping Policy
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Quality Assurance
                        </div>

                        <div className="text-gray-400 text-md mb-2">
                            Terms of Service
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


