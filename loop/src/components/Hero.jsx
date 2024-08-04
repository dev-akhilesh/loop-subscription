import React from 'react';

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-54 bg-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 h-full md:h-3/4">
                    <img
                        src="assets/hero.png"
                        alt="Blur Background"
                        className="w-full h-[400px] object-cover filter blur-sm"
                    />
                </div>

                {/* Overlay Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full md:h-3/4 text-white text-center px-4 md:px-0">
                    <h1 className="text-2xl md:text-2xl mt-9">Loop Wellness Club</h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-2 font-serif">Welcome, Abel</h2>

                    {/* Bottle Image */}
                    <div className="mt-8">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/electrolytesss.svg?v=1722001529"
                            alt="Bottles"
                            className="w-full max-w-xs md:max-w-md mx-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Body Section */}
            <div className="bg-yellow-100 p-4 md:p-8 rounded-lg">
                <div className="relative z-20 mt-6 text-black text-left bg-yellow-100 md:m-20 m-4">
                    <p className="text-base md:text-lg px-4 md:px-20">
                        <span className='font-bold'>#11863720155</span>
                        <span className="bg-red-600 text-white rounded-full px-4 py-1 mx-5 inline-block align-middle">Cancelled</span>
                        <button className="bg-green-900 text-[#C4FE34] rounded-full px-4 py-1 mx-5 inline-block align-middle">Reactivate</button>
                    </p>
                    <p className="text-lg md:text-xl px-4 md:px-20"><span className='font-semibold'>$15.00 </span>+ $0 shipping</p>
                    <p className="px-4 md:px-20 text-xl">Deliver every 1 week</p>
                </div>
            </div>

            <div className="flex justify-center px-4 sm:px-8 bg-yellow-100">
                <div
                    className="relative w-full max-w-screen-lg h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-[32px] border border-[#1B4E1F]"
                    style={{ backgroundImage: "url('assets/sky.png')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-start text-center text-white p-4 sm:p-8 rounded-[32px]">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4">Try something new!</h1>
                        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Rehydrate and replenish with our newly launched electrolytes</p>
                        <button className="px-6 py-2 bg-lime-200 hover:bg-lime-300 text-black rounded-full font-medium">
                            See all products
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
