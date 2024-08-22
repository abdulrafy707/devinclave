// components/Header.js
'use client'
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/herosection/logo.png" alt="Logo" className="h-14 w-[100px]" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Navigation */}
        <nav className={`flex-col lg:flex-row lg:flex items-center space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-gray-800 hover:text-gray-600 flex items-center"
            >
              SERVICES <span className="ml-1">&#x25BE;</span>
            </button>
            {isServicesOpen && (
              <div className="absolute mt-2 w-48 z-40 bg-white border border-gray-200 shadow-lg">
                <a href="/pages/webdevelopment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Web Development
                </a>
                <a href="/pages/seo" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  SEO
                </a>
                <a href="/pages/social_media_marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Social Media Marketing
                </a>
                <a href="/pages/graphic-designing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Graphic Designing
                </a>
                <a href="/pages/viedo_editing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Video Editing
                </a>
                <a href="/pages/content_writing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Content Writing
                </a>
              </div>
            )}
          </div>
          <a href="/pages/inspire_me" className="text-gray-800 hover:text-gray-600">
            INSPIRE ME
          </a>
          <a href="/pages/aboutus" className="text-gray-800 hover:text-gray-600">
            ABOUT US
          </a>
          <a href="/pages/couponecode" className="text-gray-800 hover:text-gray-600">
            COUPON CODE
          </a>
         
        </nav>
        <div className='flex space-x-4'>
        <a
            href="/pages/contactus"
            className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-2 px-4 rounded-full"
          >
            CONTACT US
          </a>

        {/* Search Icon */}
        <button className="hidden lg:block ml-4 text-gray-800 hover:text-gray-600">
          &#x1F50D;
        </button>
        </div>
      </div>
    </header>
  );
}
