import Image from "next/image";

const Banner = () => {
    return (
        <section className='relative min-h-screen flex items-center' role="banner" aria-label="Hero section">
            {/* Background Image */}
            <div className='absolute inset-0 z-0' aria-hidden="true">
                <Image 
                    src="/images/hero-background.jpg" 
                    alt="Professional team collaborating on technology projects in a modern workspace" 
                    fill
                    className="object-cover"
                    priority
                />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <header className='text-center text-white'>
                    
                    <div className="py-6 sm:py-8">
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2'>
                            Recode Our World<br />
                            <span className='text-blue-300'>With Talent</span>
                        </h1>
                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-yellow-400 px-2' role="text" aria-label="Goal statement">
                            1,000,000+ AI-ready developers by 2040
                        </p>
                        {/* Logo */}
                        <div className='flex justify-center items-center mt-6 sm:mt-8' role="img" aria-label="Partner organization logo">
                            <Image 
                                src="/image.png" 
                                alt="POSSPOLE CATALYST partner organization logo" 
                                width={250} 
                                height={100} 
                                className='h-16 sm:h-18 md:h-20 lg:h-24 w-auto filter brightness-0 invert'
                            />
                        </div>
                        {/* <p className='text-xl md:text-2xl font-light mb-8 max-w-5xl mx-auto leading-relaxed'>
                            A proven, peer-to-peer and transformative tech platform to develop AI-ready tech skills, at scale
                        </p> */}
                        {/* <p className='text-lg md:text-xl mb-12 max-w-6xl mx-auto leading-relaxed opacity-90'>
                            We discover untapped talent, equip them with future-ready skills, and connect them to opportunities that change lives — and local ecosystems.
                        </p> */}
                    </div>
                    

                </header>
            </div>
        </section>
    )
}

export default Banner;
