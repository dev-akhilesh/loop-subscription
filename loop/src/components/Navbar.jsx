import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CiUser, CiSearch } from 'react-icons/ci';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown visibility
    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-100 shadow-md sticky top-0 w-full z-50">
            <div className="container mx-auto flex justify-around items-center py-2 px-4 md:px-1">
                <div className="flex items-center">
                    <img src="/assets/logo.png" alt="Logo" className="w-[80px] h-10 object-cover pt-2" />
                    <button
                        className="block md:hidden ml-2 text-gray-800"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col md:flex-row md:flex ${isMobileMenuOpen ? 'flex' : 'hidden'} md:space-x-4 space-y-4 md:space-y-0`}>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => toggleDropdown('shop')}
                            className="text-gray-800 hover:text-blue-500 hover:underline"
                        >
                            Shop Subscription
                        </button>
                        {activeDropdown === 'shop' && (
                            <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                                <ul className="text-left">
                                    <li className="p-2 hover:bg-gray-100">Auto-ship subscriptions</li>
                                    <li className="p-2 hover:bg-gray-100">Trial Subscription</li>
                                    <li className="p-2 hover:bg-gray-100">Add-on subscription</li>
                                    <li className="p-2 hover:bg-gray-100">Membership Subscription</li>
                                    <li className="p-2 hover:bg-gray-100">Only Subscriptions</li>
                                    <li className="p-2 hover:bg-gray-100">All subscriptions</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => toggleDropdown('bundles')}
                            className="text-gray-800 hover:text-blue-500 hover:underline"
                        >
                            Bundles
                        </button>
                        {activeDropdown === 'bundles' && (
                            <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                                <ul className="text-left">
                                    <li className="p-2 hover:bg-gray-100">Meal Bundle (BYOB)</li>
                                    <li className="p-2 hover:bg-gray-100">Wine Box</li>
                                    <li className="p-2 hover:bg-gray-100">Coffee Box</li>
                                    <li className="p-2 hover:bg-gray-100">Bundle Examples</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button className="text-gray-800 hover:text-blue-500 hover:underline">
                        Manage Subscriptions
                    </button>
                    <button className="text-gray-800 hover:text-blue-500 hover:underline">
                        Recharge Alternative
                    </button>
                </nav>
                <div className="flex space-x-4">
                    <CiSearch className="text-black hover:text-gray-700 dark:text-gray-400 dark:hover:text-white cursor-pointer hover:scale-105 transition-transform duration-200 text-xl" />
                    <CiUser className="text-black hover:text-gray-700 dark:text-gray-400 dark:hover:text-white cursor-pointer hover:scale-105 transition-transform duration-200 text-xl" />
                    <HiOutlineShoppingBag className="text-black hover:text-gray-700 dark:text-gray-400 dark:hover:text-white cursor-pointer hover:scale-105 transition-transform duration-200 text-xl" />
                </div>
            </div>
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-gray-100 p-4">
                    <div className="space-y-2">
                        <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline" onClick={() => toggleDropdown('shop')}>
                            Shop Subscription
                        </button>
                        {activeDropdown === 'shop' && (
                            <div className="bg-white border border-gray-200 shadow-lg">
                                <ul className="text-left">
                                    <li className="p-2 hover:bg-gray-100">Auto-ship subscriptions</li>
                                    <li className="p-2 hover:bg-gray-100">Trial Subscription</li>
                                    <li className="p-2 hover:bg-gray-100">Add-on subscription</li>
                                    <li className="p-2 hover:bg-gray-100">Membership Subscription</li>
                                    <li className="p-2 hover:bg-gray-100">Only Subscriptions</li>
                                    <li className="p-2 hover:bg-gray-100">All subscriptions</li>
                                </ul>
                            </div>
                        )}
                        <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline" onClick={() => toggleDropdown('bundles')}>
                            Bundles
                        </button>
                        {activeDropdown === 'bundles' && (
                            <div className="bg-white border border-gray-200 shadow-lg">
                                <ul className="text-left">
                                    <li className="p-2 hover:bg-gray-100">Meal Bundle (BYOB)</li>
                                    <li className="p-2 hover:bg-gray-100">Wine Box</li>
                                    <li className="p-2 hover:bg-gray-100">Coffee Box</li>
                                    <li className="p-2 hover:bg-gray-100">Bundle Examples</li>
                                </ul>
                            </div>
                        )}
                        <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline">
                            Manage Subscriptions
                        </button>
                        <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline">
                            Recharge Alternative
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
