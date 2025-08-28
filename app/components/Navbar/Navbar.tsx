"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signup from './Signup';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#about-section', current: false },
    { name: 'Identify & Train', href: '#identify-train-section', current: false },
    { name: 'Program', href: '#program-section', current: false },
    { name: 'Contact', href: '#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [loadingLink, setLoadingLink] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
        
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
            
            // Update HTML data attribute for CSS targeting
            document.documentElement.setAttribute('data-scroll', scrollTop.toString());
        };

        // Set initial scroll state
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={`navbar transition-all duration-300 ease-out ${isMounted && isScrolled ? 'fixed top-0 w-full z-50 bg-white shadow-lg border-b border-gray-200/50' : 'relative bg-white shadow-sm'}`} role="navigation" aria-label="Main navigation">
            <>
                <div className={`mx-auto max-w-7xl transition-all duration-300 ease-out ${isMounted && isScrolled ? 'px-4 py-2 sm:px-6 lg:px-8' : 'px-4 py-3 sm:px-6 md:py-4 lg:px-8'}`}>
                    <div className={`relative flex items-center justify-between transition-all duration-300 ease-out ${isMounted && isScrolled ? 'h-12' : 'h-12 sm:h-16 lg:h-20'}`}>
                        <div className="flex flex-1 items-center justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='flex items-center' aria-label="POSSPOLE CATALYST - Go to homepage">
                                    <Image 
                                        src="/images/posspole-logo.svg" 
                                        alt="POSSPOLE CATALYST logo" 
                                        width={280} 
                                        height={80}
                                        className={`w-auto transition-all duration-300 ease-out ${isMounted && isScrolled ? 'h-6 sm:h-8 md:h-10' : 'h-8 sm:h-12 md:h-14 lg:h-16'}`}
                                    />
                                </Link>
                            </div>

                            {/* LINKS */}

                            <nav className="hidden lg:flex items-center border-right" role="navigation" aria-label="Primary navigation">
                                <ul className={`flex justify-end transition-all duration-300 ease-out ${isMounted && isScrolled ? 'space-x-1 md:space-x-2' : 'space-x-2 md:space-x-3 lg:space-x-4'}`} role="list">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'text-blue-600 bg-blue-50'
                                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50',
                                                    `navlinks transition-all duration-300 ease-out transform hover:scale-105 ${isMounted && isScrolled ? 'px-3 py-2 text-xs sm:text-sm md:text-base min-h-[36px]' : 'px-4 py-2 text-sm md:text-base lg:text-lg min-h-[40px]'} rounded-md font-medium hover:shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,
                                                    loadingLink === item.href ? 'link-loading' : ''
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                onClick={() => {
                                                    setLoadingLink(item.href);
                                                    setTimeout(() => setLoadingLink(null), 800);
                                                }}
                                            >
                                                {item.name}
                                                {loadingLink === item.href && (
                                                    <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </nav>
                            
                            {/* SIGNUP BUTTON */}
                            <div className="flex items-center">
                                <Signup />
                            </div>
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-3 sm:p-4 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200 min-h-[48px] min-w-[48px]"
                                onClick={() => setIsOpen(true)}
                                aria-expanded={isOpen}
                                aria-label="Open navigation menu"
                            >
                                <Bars3Icon className="block h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                            </button>
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
