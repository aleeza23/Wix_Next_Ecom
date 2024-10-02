"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?cs=srgb&dl=pexels-noah-erickson-97554-404280.jpg&fm=jpg",
//     },
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-apple-iphone-14-pro-max-mobile-phone.jpeg",
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/3520429/pexels-photo-3520429.jpeg?cs=srgb&dl=pexels-atahandemir-3520429.jpg&fm=jpg",
//     },
//     {
//         id: 4,
//         url: "https://images.pexels.com/photos/18631990/pexels-photo-18631990/free-photo-of-man-photographing-a-ferris-wheel-at-sunset.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     },
// ];

const ProductImages = ({ items }) => {
    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[400px] relative">
                <Image
                    src={items[index].image?.url}
                    alt=""
                    fill
                    sizes="50vw"
                    priority
                    className="object-contain rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-3">
                {items.map((item, i) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={item._id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={item.image?.url}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;