import React from 'react';

const GridSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-10 bg-yellow-100 px-52  text-[#1A541D]">
            {/* First Box */}
            <div className="border border-[#C6C693] rounded-[31px] p-5 flex flex-col h-full box-border">
                <h2 className="font-semibold mb-2">Order notes</h2>
                <p>-</p>
            </div>

            {/* Second Box */}
            <div className="border border-[#C6C693] rounded-[31px] p-5 flex flex-col h-full box-border">
                <h2 className="font-semibold mb-2">Subscription plan</h2>
                <p>Deliver every 1 month</p>
            </div>
            

            {/* Third Box */}
            <div className="border border-[#C6C693] rounded-[31px] p-5 flex flex-col h-full box-border">
                <h2 className="font-semibold mb-2">Shipping address</h2>
                <p>Les</p>
                <p>1100 Van Ness Avenue</p>
                <p>San Francisco, California, 94109</p>
                <p>United States</p>
            </div>

            {/* Fourth Box */}
            <div className="border border-[#C6C693] rounded-[31px] p-5 flex flex-col h-full box-border">
                <h2 className="font-semibold mb-2">Payment details</h2>
                <p>Visa ending in 4242</p>
                <p>Expires 2/29</p>
                <p>Last updated on: May 5, 2023</p>
            </div>
        </div>
    );
};

export default GridSection;
