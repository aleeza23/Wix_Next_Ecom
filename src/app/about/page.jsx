import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HowItWorks from '../../components/HowItWorks';
import Footer from '../../components/Footer'

const AboutPage = () => {
    return (
        <div>
            <section className="bg-white ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl ">
                            About Chaudhary <span className='text-blue-600'>Mobiles</span>
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                        Located in the heart of DHA 2, Islamabad, Chaudhary Mobiles is your trusted destination for all your mobile needs. We pride ourselves on maintaining the highest standards of quality and customer satisfaction. Experience a seamless shopping journey with us, where quality meets exceptional service.

                        </p>

                        <Link href="/list">
                            <p className="inline-flex items-center justify-center px-0 sm:px-5 py-3 mr-0 sm:mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                                View Products
                                <svg
                                    className="w-5 h-5 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </p>
                        </Link>
                        
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                            alt="mockup"                           
                            width={500} // Set your desired width
                            height={700} // Set your desired height
                        />
                    </div>
                </div>
            </section>
            <HowItWorks />
            
            <Footer />
        </div>
    );
};

export default AboutPage;
