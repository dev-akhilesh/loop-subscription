import React from 'react';
import BookDemo from './BookDemo';

const Footer = () => {
    return (
        <footer>
            <BookDemo />


            {/* First half */}
            <div className="bg-[#0d062b] text-white p-6 md:p-8">
                <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-left px-40  ">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Resources</h3>
                        <ul className="text-sm md:text-base space-y-2">
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Widgets Gallery [New]</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Subscription Gamification</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Unbundling of Box Subscription</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Migration</h3>
                        <ul className="text-sm md:text-base space-y-2">
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Recharge</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Bold</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Migration reviews</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Compare Apps</h3>
                        <ul className="text-sm md:text-base space-y-2">
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Recharge vs Bold vs Loop</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Recharge vs Skio vs Loop</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Ordergroove vs Recharge vs Loop</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Integrations</h3>
                        <ul className="text-sm md:text-base space-y-2">
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Prediko for Inventory Management</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Upsell Widget Designer</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Littledata for BFCM analytics</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">All Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Help</h3>
                        <ul className="text-sm md:text-base space-y-2">
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Loop Help Centre</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">How to setup subscription on Shopify</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4">Legal</h3>
                        <ul className="text-sm md:text-base space-y-2">
                            <li><a href="#" className="text-gray-300 hover:underline hover:text-[#741bff] transition-colors">Automatic Renewal Law (ARL)</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Second half */}
            <div className="bg-[#0d062b] text-white p-6 md:p-8">
                <div className="container mx-auto text-center">
                    <div className="mb-6">
                        <button className="flex items-center justify-center px-6 py-2 bg-[#741bff] hover:bg-[#6a1c9e] text-white font-semibold rounded-full transition-transform transform hover:translate-y-[-2px] mx-auto">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            Follow on Shop
                        </button>
                    </div>

                    <hr className="my-6 border-gray-500" />

                    <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold">Country/Region</label>
                                <select className="bg-[#0d062b] text-white p-2 border border-white rounded-md">
                                    <option value="USD">USD $ | United States</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold">Language</label>
                                <select className="bg-[#0d062b] text-white p-2 border border-white rounded-md">
                                    <option value="EN">English</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
                            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="AMEX" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                            <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Meta" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                            <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                            <img src="https://img.icons8.com/color/48/000000/shopify.png" alt="Shopify" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-6">© 2024, Loop Demo Store Powered by Shopify</p>
            </div>
        </footer>
    );
};

export default Footer;
