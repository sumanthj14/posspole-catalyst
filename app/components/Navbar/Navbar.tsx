"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#about-section', current: false },
    { name: 'Identify &amp; Train', href: '#identify-train-section', current: false },
    { name: 'Program', href: '#program-section', current: false },
    { name: 'Contact', href: '#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
            
            // Update HTML data attribute for CSS targeting
            document.documentElement.setAttribute('data-scroll', scrollTop.toString());
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={`navbar transition-all duration-300 ease-out ${isScrolled ? 'fixed top-0 w-full z-50 bg-white/95 shadow-lg backdrop-blur-md border-b border-gray-200/50' : 'relative bg-transparent'}`}>
            <>
                <div className={`mx-auto max-w-7xl transition-all duration-300 ease-out ${isScrolled ? 'px-4 py-2 sm:px-6 lg:px-8' : 'px-4 py-3 sm:px-6 md:py-4 lg:px-8'}`}>
                    <div className={`relative flex items-center justify-between transition-all duration-300 ease-out ${isScrolled ? 'h-12' : 'h-12 sm:h-16 lg:h-20'}`}>
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='flex items-center'>
                                    <Image 
                                        src="/images/posspole-logo.svg" 
                                        alt="POSSPOLE CATALYST" 
                                        width={280} 
                                        height={80}
                                        className={`w-auto transition-all duration-300 ease-out ${isScrolled ? 'h-6 sm:h-8 md:h-10' : 'h-8 sm:h-12 md:h-14 lg:h-16'}`}
                                    />
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className={`flex justify-end transition-all duration-300 ease-out ${isScrolled ? 'space-x-2 md:space-x-4' : 'space-x-4 md:space-x-6 lg:space-x-8'}`}>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`navlinks transition-all duration-300 ease-out transform hover:scale-105 ${isScrolled ? 'px-2 py-1 text-xs sm:text-sm md:text-base' : 'px-3 py-2 text-sm md:text-base lg:text-lg'} rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 hover:shadow-sm active:scale-95`}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
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
