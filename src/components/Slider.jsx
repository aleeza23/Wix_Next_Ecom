import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Slider = () => {
  
  return (
    <div className="relative">
      <div className="relative overflow-hidden w-full h-[20vh] sm:h-[40vh]  md:h-[70vh]">
        {/* Banner Content */}
        <div className="relative w-full h-full flex-shrink-0">
          <Image
            src="/Main-banner-1-1903x580.webp"
            alt="Electronic Essentials"
            fill            
            className="w-full h-full object-fill md:object-cover"
          />
          <div className="absolute inset-0 flex flex-col me-auto mt-5 sm:mt-20 ms-5 lg:ms-28 text-gray-900">
            <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight w-[70%] sm:w-full leading-none md:text-5xl xl:text-5xl">Explore the iPhone Series</h1>
            <p className="text-lg font-light  sm:text-3xl mb-3 hidden md:block ">Ultimate Performance.</p>
            <p className="text-lg font-light  sm:text-3xl mb-3 hidden md:block sm:mb-8">Unmatched Connectivity.</p>

            
            <div className="flex space-x-4">
              <Link href="#category" className="btn-primary px-4 font-light py-2 text-xs sm:text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" >Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
