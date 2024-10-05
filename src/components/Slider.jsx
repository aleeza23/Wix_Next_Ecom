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
            src="/Main-banner-1-1903x580.jpg"
            alt="Electronic Essentials"
            fill            
            className="w-full h-full object-fill md:object-cover"
          />
          <div className="absolute inset-0 flex flex-col me-auto mt-5 sm:mt-20 ms-5 lg:ms-28 text-gray-900">
            <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white ">Galaxy S24 Ultra</h1>
            <p className="text-lg font-light  sm:text-3xl mb-3 hidden md:block sm:mb-6">Supercharged for pros.<br /><span>Rs9999</span></p>
            <p className="text-sm mb-6 hidden md:block font-light text-gray-600">From Rs999.00 or Rs41.62/mo. per month</p>
            <div className="flex space-x-4">
              <Link className="btn-primary px-4 font-light py-2 text-xs sm:text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" href="/list">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
