import ScrollAnimation from '../ScrollAnimation';

const WhyPosspole = () => {
    return (
        <section id="why-posspole-section" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8' aria-labelledby="why-posspole-heading">
            {/* Main Title */}
            <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
                <div className='text-center mb-8 sm:mb-10 md:mb-12'>
                    <h2 id="why-posspole-heading" className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-2 sm:pt-4 font-bold leading-tight text-blue mb-6 sm:mb-8'>
                        Why Posspole Catalyst?
                    </h2>
                </div>
            </ScrollAnimation>

            {/* The Gaps Section */}
            <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
                <article className='bg-lightgrey rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12' role="region" aria-labelledby="gaps-heading">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
                        {/* Education Gap */}
                        <div className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-blue mb-4 sm:mb-6 flex items-center group-hover:text-red-600 transition-colors duration-300'>
                                <span className='w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300'></span>
                                Education Gap
                            </h3>
                            <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                Traditional education is outdated, exam-driven, and poorly aligned with industry and innovation needs.
                            </p>
                        </div>

                        {/* Skill Gap */}
                        <div className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-blue mb-4 sm:mb-6 flex items-center group-hover:text-orange-600 transition-colors duration-300'>
                                <span className='w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300'></span>
                                Skill Gap
                            </h3>
                            <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                India&apos;s fast-growing digital economy demands AI-native, product-focused talent—yet there&apos;s a shortage of creators who can solve real-world problems.
                            </p>
                        </div>

                        {/* Mindset Gap */}
                        <div className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-blue mb-4 sm:mb-6 flex items-center group-hover:text-yellow-600 transition-colors duration-300'>
                                <span className='w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300'></span>
                                Mindset Gap
                            </h3>
                            <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                Limited risk-taking, creativity, and innovation culture restrict India&apos;s global competitiveness.
                            </p>
                        </div>

                        {/* System Gap */}
                        <div className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-blue mb-4 sm:mb-6 flex items-center group-hover:text-purple-600 transition-colors duration-300'>
                                <span className='w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300'></span>
                                System Gap
                            </h3>
                            <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                Weak industry-academia alignment, lack of exposure to product lifecycles, and insufficient pathways for unconventional talent (dropouts, career shifters, veterans, women re-entering).
                            </p>
                        </div>
                    </div>

                    {/* Bridge Statement */}
                    <div className='text-center mt-8 sm:mt-10 md:mt-12'>
                        <div className='bg-blue-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-blue-500 hover:bg-blue-100 hover:border-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer group'>
                            <p className='text-lg sm:text-xl font-semibold text-blue-700 leading-relaxed group-hover:text-blue-800 transition-colors duration-300'>
                                Catalyst exists to bridge these gaps—by replacing rote learning with peer-driven, project-based innovation that transforms raw potential into world-class creators.
                            </p>
                        </div>
                    </div>
                </article>
            </ScrollAnimation>

            {/* Outcomes Section */}
            <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
                <article className='bg-white rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl' role="region" aria-labelledby="outcomes-heading">
                    <div className='text-center mb-8 sm:mb-10'>
                        <h3 id="outcomes-heading" className='text-3xl sm:text-4xl md:text-5xl font-bold text-blue mb-4 sm:mb-6'>
                            What is the Outcome?
                        </h3>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
                        {/* Talent Transformation */}
                        <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-blue-200 hover:shadow-xl hover:scale-105 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300'>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                                    </svg>
                                </div>
                                <h4 className='text-xl sm:text-2xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300'>Talent Transformation</h4>
                            </div>
                            <p className='text-base sm:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                1,500+ global product creators every two years, trained to design AI-native solutions across defense, healthcare, aerospace, climate tech, and more.
                            </p>
                        </div>

                        {/* Nation-Building Impact */}
                        <div className='bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-green-200 hover:shadow-xl hover:scale-105 hover:from-green-100 hover:to-green-200 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300'>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h4 className='text-xl sm:text-2xl font-bold text-green-700 group-hover:text-green-800 transition-colors duration-300'>Nation-Building Impact</h4>
                            </div>
                            <p className='text-base sm:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                A scalable innovation ecosystem that empowers learners regardless of background, creating jobs, startups, and social impact.
                            </p>
                        </div>

                        {/* Corporate Value */}
                        <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-purple-200 hover:shadow-xl hover:scale-105 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300'>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                                    </svg>
                                </div>
                                <h4 className='text-xl sm:text-2xl font-bold text-purple-700 group-hover:text-purple-800 transition-colors duration-300'>Corporate Value</h4>
                            </div>
                            <p className='text-base sm:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                Ready-to-deploy, job-ready, innovation-driven talent pipelines for enterprises, startups, and government projects.
                            </p>
                        </div>

                        {/* Ecosystem Creation */}
                        <div className='bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-orange-200 hover:shadow-xl hover:scale-105 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300'>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h4 className='text-xl sm:text-2xl font-bold text-orange-700 group-hover:text-orange-800 transition-colors duration-300'>Ecosystem Creation</h4>
                            </div>
                            <p className='text-base sm:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                Full-stack innovation—from design to manufacturing to global go-to-market—backed by Posspole&apos;s Corporate VC and strategic partners.
                            </p>
                        </div>

                        {/* Sustainable Growth */}
                        <div className='bg-gradient-to-br from-teal-50 to-teal-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-teal-200 hover:shadow-xl hover:scale-105 hover:from-teal-100 hover:to-teal-200 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300'>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h4 className='text-xl sm:text-2xl font-bold text-teal-700 group-hover:text-teal-800 transition-colors duration-300'>Sustainable Growth</h4>
                            </div>
                            <p className='text-base sm:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                Wealth creation for learners, corporates, universities, and the nation, while positioning India as a hub for AI-native product innovation.
                            </p>
                        </div>

                        {/* Global Leadership */}
                        <div className='bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-indigo-200 hover:shadow-xl hover:scale-105 hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 ease-in-out cursor-pointer group'>
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300'>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h4 className='text-xl sm:text-2xl font-bold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-300'>Global Leadership</h4>
                            </div>
                            <p className='text-base sm:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300'>
                                India&apos;s leap from being a service economy to a product-innovation powerhouse, shaping homes, hospitals, cities, battlefields, and industries of the future.
                            </p>
                        </div>
                    </div>
                </article>
            </ScrollAnimation>
        </section>
    )
}

export default WhyPosspole;