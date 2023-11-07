import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-white relative">
            {/* Absolute div for background */}
            <div
                className="absolute inset-0 z-[-10] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:top-[calc(100%-30rem)] transform-gpu overflow-hidden blur-3xl"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            ></div>

            <div className="relative px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Shop Our New Catalogue
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Whatever you are looking for DAAK has got it. Browse our
                            new range of DAAK clothing items.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/#mens"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Browse Catalogue
                            </Link>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Absolute div for background */}
            <div
                className="absolute inset-0 top-[calc(100%-13rem)] z-[-10] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:top-[calc(100%-30rem)] transform-gpu overflow-hidden blur-3xl"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            ></div>
        </div>
    );
};

export default Hero;


{/* Resources 
    https://tailwindui.com/components/marketing/sections/heroes
    https://www.youtube.com/watch?v=NT8wpzKE8rQ
*/}

