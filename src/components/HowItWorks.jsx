// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
    return (
        <section id="works" className="relative  py-10 sm:py-16 lg:py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl text-black font-extrabold mx-auto md:text-3xl lg:text-4xl">
                        Why Choose Chaudhary Mobiles?
                    </h2>                 
                </div>
                <div className="relative mt-12 lg:mt-20">
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
                        {/* Step 1 */}
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-white">1</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Unmatched quality</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Experience the highest standards in mobile devices and accessories.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-white">2</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Wide range of products</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                We offer a diverse selection of smartphones and accessories.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-white">3</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Competitive pricing</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Get the best value for your money with our tailored prices.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-white">4</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Expert customer service</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Enjoy seamless support and assistance with our dedicated team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

       
        </section>
    );
};

export default HowItWorks;
