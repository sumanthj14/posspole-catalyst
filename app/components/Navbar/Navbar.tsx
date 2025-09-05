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
    { name: 'About Us', href: '#about', current: false },
    { name: 'Identify & Train', href: '#identify', current: false },
    { name: 'Program', href: '#program', current: false },
    { name: 'The Model', href: '#hero', current: false },
    { name: 'Co-Founders', href: '#cofounders', current: false },
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
                                <Link href="/" className='flex items-center font-extrabold' aria-label="POSSPOLE CATALYST - Go to homepage">
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
                                <ul className={`flex justify-end items-center transition-all duration-300 ease-out ${isMounted && isScrolled ? 'space-x-1 md:space-x-2' : 'space-x-2 md:space-x-3 lg:space-x-4'}`} role="list">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'text-white bg-navyblue'
                        : 'text-slate-700 hover:text-white hover:bg-navyblue',
                                                    `navlinks transition-all duration-300 ease-out transform hover:scale-105 ${isMounted && isScrolled ? 'px-3 py-2 text-xs sm:text-sm md:text-base min-h-[36px]' : 'px-4 py-2 text-sm md:text-base lg:text-lg min-h-[40px]'} rounded-md font-semibold hover:shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,
                                                    loadingLink === item.href ? 'link-loading' : ''
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setLoadingLink(item.href);
                                                    
                                                    // Smooth scroll to target section
                                                    const targetId = item.href.replace('#', '');
                                                    const targetElement = document.getElementById(targetId);
                                                    
                                                    if (targetElement) {
                                                        // Add a slight delay for visual feedback
                                                        setTimeout(() => {
                                                            targetElement.scrollIntoView({
                                                                behavior: 'smooth',
                                                                block: 'start'
                                                            });
                                                            
                                                            // Re-trigger animations by temporarily removing and re-adding elements to viewport
                                                            const animatedElements = targetElement.querySelectorAll('[data-framer-motion]');
                                                            animatedElements.forEach((el) => {
                                                                const motionEl = el as any;
                                                                if (motionEl.style) {
                                                                    motionEl.style.transform = 'translateY(50px)';
                                                                    motionEl.style.opacity = '0';
                                                                    setTimeout(() => {
                                                                        motionEl.style.transform = 'translateY(0px)';
                                                                        motionEl.style.opacity = '1';
                                                                    }, 100);
                                                                }
                                                            });
                                                        }, 200);
                                                    }
                                                    
                                                    setTimeout(() => setLoadingLink(null), 1000);
                                                }}
                                            >
                                                {item.name}
                                                {loadingLink === item.href && (
                                                    <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Signup />
                                    </li>
                                </ul>

                            </nav>
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-3 sm:p-4 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200 min-h-[48px] min-w-[48px]"
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
