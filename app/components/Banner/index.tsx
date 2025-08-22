import Image from "next/image";

const Banner = () => {
    return (
        <div className='relative min-h-screen flex items-center'>
            {/* Background Image */}
            <div className='absolute inset-0 z-0'>
                <Image 
                    src="/images/hero-background.jpg" 
                    alt="Team collaboration background" 
                    fill
                    className="object-cover"
                    priority
                />
                <div className='absolute inset-0 bg-black bg-opacity-30'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
                <div className='text-center text-white'>
                    <div className="py-4 sm:py-6 lg:py-8">
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6'>
                            Recode Our World<br />
                            <span className='text-blue-300'>With Talent</span>
                        </h1>
                        <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 text-yellow-400 px-2'>
                            1,000,000+ AI-ready developers by 2040
                        </div>
                        {/* <p className='text-xl md:text-2xl font-light mb-8 max-w-5xl mx-auto leading-relaxed'>
                            A proven, peer-to-peer and transformative tech platform to develop AI-ready tech skills, at scale
                        </p> */}
                        {/* <p className='text-lg md:text-xl mb-12 max-w-6xl mx-auto leading-relaxed opacity-90'>
                            We discover untapped talent, equip them with future-ready skills, and connect them to opportunities that change lives — and local ecosystems.
                        </p> */}
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Banner;
