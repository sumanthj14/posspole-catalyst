import Image from "next/image";

const HeroSection = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 py-24 my-32'>
            <div className='bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-16'>
                <div className='text-center space-y-12'>

                    {/* Headline 1 */}
                    <div className='space-y-4'>
                        <h1 className='text-4xl lg:text-6xl font-bold text-blue leading-tight'>
                            Unlock Hidden Potential. Transform Communities.
                        </h1>
                        <p className='text-lg lg:text-xl text-bluegrey max-w-3xl mx-auto'>
                            We discover talent others overlook and connect it to opportunity.
                        </p>
                    </div>

                    {/* Headline 2 */}
                    <div className='space-y-4'>
                        <h2 className='text-3xl lg:text-5xl font-bold text-purple-700 leading-tight'>
                            From Untapped to Unstoppable.
                        </h2>
                        <p className='text-lg lg:text-xl text-bluegrey max-w-3xl mx-auto'>
                            Equipping people with future-ready skills to drive change locally and globally.
                        </p>
                    </div>

                    {/* Headline 3 */}
                    <div className='space-y-4'>
                        <h2 className='text-3xl lg:text-5xl font-bold text-indigo-700 leading-tight'>
                            Think Global. Act Local. Create Impact.
                        </h2>
                        <p className='text-lg lg:text-xl text-bluegrey max-w-3xl mx-auto'>
                            Building thriving ecosystems through innovation, learning, and collaboration.
                        </p>
                    </div>

                    {/* Main Subheadline */}
                    <div className='bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto'>
                        <p className='text-xl lg:text-2xl text-blue font-semibold leading-relaxed'>
                            We discover untapped talent, equip them with future-ready skills, and connect them to opportunities that change lives — and local ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;