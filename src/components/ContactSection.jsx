import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Easypaisa & JazzCash Services
                    </h2>
                    <p className="text-lg text-gray-500 font-light  mt-2 max-w-3xl w-full text-center mx-auto">
                        At Chaudhry Mobiles, we offer Easypaisa and JazzCash services for your convenience.
                        You can easily avail these services by contacting us on WhatsApp.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="https://wa.me/03465440786"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm sm:text-lg font-light  bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
                    >
                        <FaWhatsapp size={24} className="mr-2" />
                        Contact Us on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
