"use client"
import React, { useState } from 'react';
import { links, socialLinks } from '../lib/navitems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Sidebar component
const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to handle link clicks
  const handleLinkClick = () => {
   setIsMenuOpen(false);
  };

  const handleOverlayClick = () => {
    // Close the menu when the overlay is clicked
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Burger menu button for smaller screens */}
      <div
        className="md:hidden sm:hidden fixed top-5 left-4 cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white transform -scale-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Sidebar for larger screens */}
      <ul className='z-50 bg-transparent px-[0.4rem] py-[0.5] w-[3.8rem] h-[15.5rem] border-[2px] border-white-400/20 m-[1rem] fixed top-[12rem] left-[2rem] rounded-full flex-row justify-center items-center hidden md:block sm:block'>
        {links.map((link: any) => (
          <li key={link.name} onClick={handleLinkClick}>
            <Link href={link.href} legacyBehavior>
              <a className={clsx(
                'w-[2.8rem] h-[2.8rem] flex  justify-center items-center mt-[0.8rem]  hover:bg-white rounded-full hover:text-black transition-colors duration-300',
                {
                  'text-black bg-white': pathname === link.href,
                  'text-white': pathname !== link.href,
                },
              )}
              >{link.icon}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Conditional rendering for the mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex items-center justify-center" onClick={handleOverlayClick}>
          <ul className='bg-transparent px-[0.4rem] py-[0.5] w-[3.8rem] h-[15.5rem] border-[2px] border-white-400/20 m-[1rem] absolute top-[12rem] left-[1rem] rounded-full flex-row justify-center items-center '>
            {links.map((link: any) => (
              <li key={link.name} onClick={handleLinkClick}>
                <Link href={link.href} legacyBehavior>
                  <a className={clsx(
                    'w-[2.8rem] h-[2.8rem] flex  justify-center items-center mt-[0.8rem]  hover:bg-white rounded-full hover:text-black transition-colors duration-300',
                    {
                      'text-black bg-white': pathname === link.href,
                      'text-white': pathname !== link.href,
                    },
                  )}
                  >{link.icon}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Social links */}
      <ul className='fixed bg-transparent h-[3rem] top-[0.2rem] w-[6.2rem] right-1 md:w-[7.2rem] md:h-[3.2rem] border-[2px] text-white border-white-400/20 m-[1rem] md:top-[2rem] d:mright-[2rem] rounded-full flex-row justify-center z-50 items-center flex space-x-2'>
        {socialLinks.map((item: any, index: number) => (
          <li key={index}  className='w-[2.3rem] h-[2.3rem] flex justify-center items-center   hover:bg-white rounded-full hover:text-black transition-colors duration-500'><a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </a></li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
