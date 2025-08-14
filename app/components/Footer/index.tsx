import Image from "next/image";
import Link from "next/link";

const footer = () => {
    return (
        <div className="bg-black -mt-40" id="contact-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24">
                    {/* Main Footer Content - Left and Right Layout */}
                    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-12'>
                        
                        {/* Left Side - Logo and Links */}
                        <div className='flex-1 text-center lg:text-left'>
                            <div className='mb-8'>
                                <Image 
                                    src="/images/posspole-logo.svg" 
                                    alt="POSSPOLE CATALYST" 
                                    width={350} 
                                    height={100}
                                    className="h-16 w-auto filter invert mx-auto lg:mx-0"
                                    style={{ filter: 'invert(1) brightness(2)' }}
                                />
                            </div>
                            <div className='flex flex-col gap-4 items-center lg:items-start'>
                                <div className='text-offwhite text-lg'>
                                    <Link href="https://www.people.posspole.com" className="hover:text-white transition-colors">
                                        www.people.posspole.com
                                    </Link>
                                </div>
                                <div className='text-offwhite text-lg'>
                                    <Link href="mailto:letmein@posspole.com" className="hover:text-white transition-colors">
                                        letmein@posspole.com
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Reach Us Section */}
                        <div className='flex-1 max-w-md mx-auto lg:mx-0'>
                            <h2 className='text-white text-3xl font-bold mb-8 text-center lg:text-left'>Reach Us</h2>
                            
                            <div className='space-y-6'>
                                {/* Visit Us */}
                                <div className='flex items-start gap-4 text-left'>
                                    <div className='w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-white text-xl font-semibold mb-2'>Visit Us</h3>
                                        <p className='text-offwhite text-lg leading-relaxed'>
                                            Krishi Bhavana, Hudson Circle,<br />
                                            Bangalore - 560 002
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-4 text-left'>
                                    <div className='w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-white text-xl font-semibold mb-2'>Email address</h3>
                                        <Link href="mailto:letmein@posspole.com" className='text-offwhite text-lg hover:text-white transition-colors'>
                                            letmein@posspole.com
                                        </Link>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex items-start gap-4 text-left'>
                                    <div className='w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-white text-xl font-semibold mb-2'>Call now</h3>
                                        <Link href="tel:+918618145049" className='text-offwhite text-lg hover:text-white transition-colors'>
                                            (+91)86181-45049
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Only */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="text-center">
                        <h3 className='text-offwhite text-lg'>@2025 - All Rights Reserved by Posspole People</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;
