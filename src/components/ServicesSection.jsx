import React from 'react';
import { FaShippingFast, FaHeadset, FaGift, FaLock } from 'react-icons/fa';

const services = [
    {
        id: 1,
        icon: <FaShippingFast size={32} className="text-blue-600" />,
        title: 'Fast shipping',
        description: 'Free delivery for order over Rs2000.',
    },
    {
        id: 2,
        icon: <FaHeadset size={32} className="text-blue-600" />,
        title: 'Online Support',
        description: 'Feel free to call us & get best support.',
    },
    {
        id: 3,
        icon: <FaGift size={32} className="text-blue-600" />,
        title: 'Gift Voucher',
        description: 'Refer a friend & get a surprise gifts.',
    },
    {
        id: 4,
        icon: <FaLock size={32} className="text-blue-600" />,
        title: 'Secure payment',
        description: 'Safe & more secure way to pay online.',
    },
];

const ServiceSection = () => {
    return (
        <div id="wdcmsservice" className="mt-10">
            <div>
                <div className="flex flex-wrap bg-[#f5f5f5] py-7">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="w-full sm:w-1/2 lg:w-1/4 pe-4"
                        >
                            <div className={`p-3 flex items-center md:justify-center group gap-4 
                                ${service.title === "Secure payment" ? "border-none" : "md:border-r"} 
                                border-b md:border-b-0 border-gray-300`}
                            >
                                <div className="rotate-hover">
                                    {service.icon}
                                </div>
                                <div className="service-desc">
                                    <span className="service-title text-md font-bold">
                                        {service.title}
                                    </span>
                                    <p className="mt-2 text-sm font-light text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
