"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [loadingLink, setLoadingLink] = useState<string | null>(null);

    const handleLinkClick = (href: string) => {
        setLoadingLink(href);
        setTimeout(() => setLoadingLink(null), 1000);
    };
    return (
        <footer className="bg-black -mt-40" id="contact-section" role="contentinfo">
            <div className="mx-auto max-w-2xl pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
                    {/* Main Footer Content - Left and Right Layout */}
                    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12'>
                        
                        {/* Left Side - Logo and Links */}
                        <section className='flex-1 text-center lg:text-left' aria-labelledby="company-info">
                            <h2 id="company-info" className="sr-only">Company Information</h2>
                            <div className='mb-6 sm:mb-8'>
                                <Image 
                                    src="/images/posspole-logo.svg" 
                                    alt="POSSPOLE CATALYST company logo" 
                                    width={350} 
                                    height={100}
                                    className="h-12 sm:h-14 md:h-16 w-auto filter invert mx-auto lg:mx-0"
                                    style={{ filter: 'invert(1) brightness(2)' }}
                                />
                            </div>
                            <nav className='flex flex-col gap-3 sm:gap-4 items-center lg:items-start' aria-label="Company links">
                                <div className='text-offwhite text-base sm:text-lg'>
                                    <Link 
                                        href="https://www.people.posspole.com" 
                                        className={`hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded flex items-center ${
                                            loadingLink === 'https://www.people.posspole.com' ? 'link-loading' : ''
                                        }`}
                                        aria-label="Visit our website"
                                        onClick={() => handleLinkClick('https://www.people.posspole.com')}
                                    >
                                        www.people.posspole.com
                                        {loadingLink === 'https://www.people.posspole.com' && (
                                            <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                                        )}
                                    </Link>
                                </div>
                                <div className='text-offwhite text-lg'>
                                    <Link 
                                        href="mailto:letmein@posspole.com" 
                                        className={`font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded flex items-center ${
                                            loadingLink === 'mailto:letmein@posspole.com' ? 'link-loading' : ''
                                        }`}
                                        aria-label="Send us an email"
                                        onClick={() => handleLinkClick('mailto:letmein@posspole.com')}
                                    >
                                        letmein@posspole.com
                                        {loadingLink === 'mailto:letmein@posspole.com' && (
                                            <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                                        )}
                                    </Link>
                                </div>
                            </nav>
                        </section>

                        {/* Right Side - Reach Us Section */}
                        <section className='flex-1 max-w-md mx-auto lg:mx-0' aria-labelledby="contact-heading">
                            <h2 id="contact-heading" className='text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center lg:text-left'>Reach Us</h2>
                            
                            <address className='space-y-4 sm:space-y-6 not-italic'>
                                {/* Visit Us */}
                                <div className='flex items-start gap-3 sm:gap-4 text-left'>
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden="true">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Visit Us</h3>
                                        <p className='text-offwhite text-sm sm:text-base md:text-lg leading-loose'>
                                            Krishi Bhavana, Hudson Circle,<br />
                                            Bangalore - 560 002
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-4 text-left'>
                                    <div className='w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden="true">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Email address</h3>
                                        <Link 
                            href="mailto:letmein@posspole.com" 
                            className={`text-offwhite text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded flex items-center ${
                                loadingLink === 'mailto:letmein@posspole.com' ? 'link-loading' : ''
                            }`}
                            aria-label="Send email to letmein@posspole.com"
                            onClick={() => handleLinkClick('mailto:letmein@posspole.com')}
                        >
                            letmein@posspole.com
                            {loadingLink === 'mailto:letmein@posspole.com' && (
                                <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                            )}
                        </Link>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex items-start gap-4 text-left'>
                                    <div className='w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden="true">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Call now</h3>
                                        <Link 
                            href="tel:+918618145049" 
                            className={`text-offwhite text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded flex items-center ${
                                loadingLink === 'tel:+918618145049' ? 'link-loading' : ''
                            }`}
                            aria-label="Call us at +91 86181 45049"
                            onClick={() => handleLinkClick('tel:+918618145049')}
                        >
                            (+91)86181-45049
                            {loadingLink === 'tel:+918618145049' && (
                                <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                            )}
                        </Link>
                                    </div>
                                </div>
                            </address>
                        </section>
                    </div>
                </div>
            </div>


            
            {/* Copyright Only */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-4 sm:pt-5 pb-4 sm:pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="text-center">
                        <p className='text-offwhite text-sm sm:text-base md:text-lg font-medium leading-relaxed'>@2025 - All Rights Reserved by Posspole People</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
