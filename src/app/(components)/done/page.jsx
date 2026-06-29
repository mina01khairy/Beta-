import React from 'react';

const Done = () => {
    return (
        <div className='overflow-hidden w-full h-90 py-10 fade-up  '>
            <div className='text-8xl  text-[#2088ff] '>
                <i className="fa-solid animate-slide-in  relative top-[50%] fa-truck-fast"></i>
            </div>
            <div className='text-[#0066ff] pt-10 animate-fade-in opacity-0 md:text-9xl text-7xl flex justify-center items-end'>
                <i className="fa-solid fa-heart-circle-check"></i> Succses
            </div>
        </div>
    );
}

export default Done;
