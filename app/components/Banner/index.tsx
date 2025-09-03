import Image from "next/image";
import ScrollAnimation from '../ScrollAnimation';

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
                        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 sm:mb-6 px-2'>
                                Recode Our World<br />
                                <span className='text-blue-300'>With Talent</span>
                            </h1>
                        </ScrollAnimation>
                        
                        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
                            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-yellow-400 px-2 leading-relaxed' role="text" aria-label="Goal statement">
                                1,000,000+ AI-ready developers by 2040
                            </p>
                        </ScrollAnimation>
                         
                         {/* NO Teachers. Classrooms. Section */}
                        <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
                          <div className='mt-8 sm:mt-12 bg-blue-500 bg-opacity-90 rounded-lg p-6 sm:p-8 md:p-10 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300'>
                              <h2 className='text-6xl sm:text-7xl md:text-8xl font-extrabold text-blue mb-2'>
                                  NO
                              </h2>
                              <p className='text-xl sm:text-2xl md:text-3xl font-semibold text-blue leading-tight'>
                                  Teachers.<br />
                                  Classrooms.
                              </p>
                          </div>
                        </ScrollAnimation>
                          
                          {/* SOLVE. BUILD. BREAK THINGS. REPEAT Section */}
                        <ScrollAnimation direction="up" delay={0.8} duration={0.8}>
                          <div className='mt-8 sm:mt-12'>
                              <p className='text-lg sm:text-xl md:text-2xl font-bold text-blue tracking-wider uppercase animate-pulse'>
                                  SOLVE. BUILD. BREAK THINGS. REPEAT
                              </p>
                          </div>
                        </ScrollAnimation>

                        {/* <p className='text-xl md:text-2xl font-light mb-8 max-w-5xl mx-auto leading-relaxed'>
                            A proven, peer-to-peer and transformative tech platform to develop AI-ready tech skills, at scale
                        </p> */}
                        {/* <p className='text-lg md:text-xl mb-12 max-w-6xl mx-auto leading-relaxed opacity-90'>
                            We discover untapped talent, equip them with future-ready skills, and connect them to opportunities that change lives — and local ecosystems.
                        </p> */}
                    </div>
                    

                </header>
            </div>
            
            {/* Logo positioned at bottom right */}
            <div className='absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20' role="img" aria-label="Partner organization logo">
                <Image 
                    src="/image.png" 
                    alt="POSSPOLE CATALYST partner organization logo" 
                    width={200} 
                    height={80} 
                    className='h-16 sm:h-18 md:h-20 lg:h-24 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300'
                />
            </div>
        </section>
    )
}

export default Banner;
