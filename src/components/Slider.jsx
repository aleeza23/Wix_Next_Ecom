"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Latest Smartphones",
    description: "Discover the newest models",
    img: "/1.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Best Mobile Accessories",
    description: "Top quality accessories",
    img: "/2.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Exclusive Offers",
    description: "Up to 50% off on selected items",
    img: "https://images.pexels.com/photos/20134134/pexels-photo-20134134/free-photo-of-smartphone-screen-heart-shaped-paper-cutouts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full relative`}
            key={slide.id}
          >
            <Image
              src={slide.img}
              alt=""
              fill
              sizes="100%"
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-white">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-white">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="mt-4 rounded-md bg-white text-black py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4 transform -translate-x-1/2">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-white cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-pink-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
