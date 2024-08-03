import React from 'react';

const BookDemo = () => {
    return (
        <div className="bg-gradient-to-r from-[#741bff] to-[#6811ff] text-white p-6 md:p-8">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    <h3 className="text-lg md:text-xl">Rated <span className='text-yellow-300'>★ ★ ★ ★ ★</span> on Shopify Store</h3>
                    <h2 className="text-2xl md:text-4xl font-extrabold mt-2 font-serif">This store is powered by Loop subscriptions!</h2>
                    <p className="mt-2 text-sm md:text-base">Turn your customers into subscribers and drive recurring revenue for your DTC brand.</p>
                    <button className="mt-4 px-4 py-2 bg-[#0f0c28] text-white font-semibold rounded transition-transform duration-200 transform hover:-translate-y-1">Book a Demo</button>
                </div>
            </div>
        </div>
    );
};

export default BookDemo;
