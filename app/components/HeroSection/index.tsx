import Image from "next/image";

const HeroSection = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 my-16 sm:my-20 md:my-24 lg:my-32'>
            <div className='bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16'>
                <div className='text-center space-y-8 sm:space-y-10 md:space-y-12'>

                    {/* Headline 1 */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue leading-tight px-2'>
                            Unlock Hidden Potential. Transform Communities.
                        </h1>
                        <p className='text-base sm:text-lg lg:text-xl text-bluegrey max-w-3xl mx-auto px-4'>
                            We discover talent others overlook and connect it to opportunity.
                        </p>
                    </div>

                    {/* Headline 2 */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-700 leading-tight px-2'>
                            From Untapped to Unstoppable.
                        </h2>
                        <p className='text-base sm:text-lg lg:text-xl text-bluegrey max-w-3xl mx-auto px-4'>
                            Equipping people with future-ready skills to drive change locally and globally.
                        </p>
                    </div>

                    {/* Headline 3 */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-indigo-700 leading-tight px-2'>
                            Think Global. Act Local. Create Impact.
                        </h2>
                        <p className='text-base sm:text-lg lg:text-xl text-bluegrey max-w-3xl mx-auto px-4'>
                            Building thriving ecosystems through innovation, learning, and collaboration.
                        </p>
                    </div>

                    {/* Main Subheadline */}
                    <div className='bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg max-w-5xl mx-auto'>
                        <p className='text-lg sm:text-xl lg:text-2xl text-blue font-semibold leading-relaxed px-2'>
                            We discover untapped talent, equip them with future-ready skills, and connect them to opportunities that change lives — and local ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;