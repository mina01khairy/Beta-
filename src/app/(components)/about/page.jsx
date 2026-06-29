import React from 'react';

export default function Request() {
    return (
        <div className='p-6 bg-[#f7fbff]'>
            <div className='px-4 py-2 bg-[#deeeff] text-[#0058be] rounded-2xl text-xs font-bold w-50'>
                B2B ENTERPRISE SOLUTIONS
            </div>
            <div className='text-6xl font-bold mt-5'>
                Scale Your Hardware Inventory with Precision.
            </div>
            <div className='text-gray-600 my-5'>
                Our procurement team provides custom quotes for high-volume orders within 4 business hours. Professional logistics for global distribution.
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2  gap-3'>
                <div className='flex justify-center px-5 rounded-2xl shadow py-3 bg-[#ffffff]'>
                    <i className="text-[#0058be] mt-2 me-5 text-xl fa-solid fa-circle-check"></i>
                    <div>
                        <div className='text-2xl font-bold'>Quality Verified</div>
                        <div className=''>Tier-1 manufacturer direct stock with QA reporting.</div>
                    </div>
                </div>

                <div className='flex justify-center px-5 rounded-2xl shadow py-3 bg-[#ffffff]'>
                    <i className="text-[#0058be] mt-2 me-5 text-xl fa-solid fa-truck"></i>
                    <div>
                        <div className='text-2xl font-bold'>Global Reach</div>
                        <div className=''>DDP and ExWorks shipping options worldwide.</div>
                    </div>
                </div>
            </div>

            <div className='relative rounded-2xl overflow-hidden my-10'>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJz1RzQSCh4xAy7_ebB_9uBtUGFMyDOLWZmVSylpNnb6aPbPAN0FchT_shJ7IETUduot1I0dVFib4HctaSrFD4AxZGLgbVSoQN5ZpIr7_r9SdrHalz4gqxPpc3kowuS6GWz01xqKzE5Obgh5DSqdv1CkQCwtMgRr6L5tNoZofOu77wuyTk4c-aDtVjwyRGRFdhkHC9uaU8t2MZhpKXThVPpXlTZuRhW8AbnGU2quRB9N00RPI3Fp81PXsRJhE81ZaNPXja2GSo44RY" alt="" />
                <i className="text-amber-300 absolute bottom-10 left-10 z-10 fa-solid fa-star"></i>
            </div>
        </div>
    );
}


