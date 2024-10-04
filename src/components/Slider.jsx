import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Slider = () => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden w-full  h-[70vh]">
        {/* Banner Content */}
        <div className="relative w-full h-full flex-shrink-0">
          <Image
            src="/Main-banner-1-1903x580.jpg"
            alt="Electronic Essentials"
            fill            
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col me-auto mt-20 ms-5 lg:ms-28 text-gray-900">
            <h1 className="text-3xl  md:text-6xl font-bold mb-3 sm:mb-6">Galaxy S13+ Ultra</h1>
            <p className="text-lg sm:text-3xl mb-3 sm:mb-6">Supercharged for pros.<br /><span>Rs9999</span></p>
            <p className="text-sm mb-6">From Rs999.00 or Rs41.62/mo. per month</p>
            <div className="flex space-x-4">
              <Link className="btn-primary px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" href="/list">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
