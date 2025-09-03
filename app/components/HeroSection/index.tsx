import Image from "next/image";

const HeroSection = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8'>
            <div className='bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10'>
                <div className='text-center space-y-4 sm:space-y-6 md:space-y-8'>

                    {/* Headline 1 */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-800 leading-tight px-2'>
                    Unlock Hidden Potential. Transform Communities.
                </h1>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto px-4'>
                    We discover talent others overlook and connect it to opportunity.
                </p>
                    </div>

                    {/* Headline 2 */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-700 leading-tight px-2'>
                    From Untapped to Unstoppable.
                </h2>
                <p className='text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto px-4'>
                    Equipping people with future-ready skills to drive change locally and globally.
                </p>
                    </div>

                    {/* Headline 3 */}
                    <div className='space-y-3 sm:space-y-4'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-700 leading-tight px-2'>
                    Think Global. Act Local. Create Impact.
                </h2>
                <p className='text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto px-4'>
                    Building thriving ecosystems through innovation, learning, and collaboration.
                </p>
                    </div>

                    {/* Main Subheadline */}
                    <div className='bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg max-w-5xl mx-auto'>
                        <p className='text-xl sm:text-2xl lg:text-3xl text-blue-800 font-bold leading-loose px-2'>
                    We discover untapped talent, equip them with future-ready skills, and connect them to opportunities that change lives — and local ecosystems.
                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;