import React from 'react';

const Bonus = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-100 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="bg-[#F3DF5D] p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-lg text-[#1A541D] max-w-4xl w-full border-2 border-green-800">
                <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[88px] font-extrabold mb-4 sm:mb-6 md:mb-8 text-left font-serif leading-tight">
                    Wellness Bonus
                </h1>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 text-lg sm:text-xl text-left">
                    <div className="flex items-center group">
                        <span className="w-12 h-12 flex items-center justify-center bg-[#F3DF5D] text-2xl border-2 border-[#1A541D] rounded-full mr-2 sm:mr-4">
                            💵
                        </span>
                        <span className="relative group-hover:underline">
                            40% off on your first order
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1A541D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </div>
                    <div className="flex items-center group">
                        <span className="w-12 h-12 flex items-center justify-center bg-[#F3DF5D] text-2xl border-2 border-[#1A541D] rounded-full mr-2 sm:mr-4">
                            🔖
                        </span>
                        <span className="relative group-hover:underline">
                            20% off on your next orders
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1A541D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </div>
                    <div className="flex items-center group">
                        <span className="w-12 h-12 flex items-center justify-center bg-[#F3DF5D] text-2xl border-2 border-[#1A541D] rounded-full mr-2 sm:mr-4">
                            👩‍⚕️
                        </span>
                        <span className="relative group-hover:underline">
                            Free consultation with our nutrition expert
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1A541D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </div>
                    <div className="flex items-center group">
                        <span className="w-12 h-12 flex items-center justify-center bg-[#F3DF5D] text-2xl border-2 border-[#1A541D] rounded-full mr-2 sm:mr-4">
                            🚚
                        </span>
                        <span className="relative group-hover:underline">
                            A gift after 2 orders
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1A541D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </div>
                    <div className="flex items-center group">
                        <span className="w-12 h-12 flex items-center justify-center bg-[#F3DF5D] text-2xl border-2 border-[#1A541D] rounded-full mr-2 sm:mr-4">
                            🔍
                        </span>
                        <span className="relative group-hover:underline">
                            Sneak peek into our new product launches
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1A541D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </div>
                    <div className="flex items-center group">
                        <span className="w-12 h-12 flex items-center justify-center bg-[#F3DF5D] text-2xl border-2 border-[#1A541D] rounded-full mr-2 sm:mr-4">
                            👑
                        </span>
                        <span className="relative group-hover:underline">
                            Unlock VIP benefits on 8th order
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1A541D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </div>
                </div>
            </div>
            <button className="mt-8 sm:mt-10 md:mt-14 px-4 py-2 bg-[#1A541D] text-[#C4FE34] text-xl rounded-full shadow-md hover:bg-green-900 hover:text-green-300 transition duration-300">
                Reactivate
            </button>

        </div>
    );
};

export default Bonus;
