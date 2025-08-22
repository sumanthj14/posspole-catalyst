import Image from "next/image";

const Aboutus = () => {
    return (
        <div id="about-section" className='mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-24 my-16 sm:my-20 lg:my-32'>
            {/* About Posspole People Section */}
            <div className='bg-lightgrey rounded-2xl sm:rounded-3xl relative p-6 sm:p-8 lg:p-16 mb-12 sm:mb-16 lg:mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-8 sm:my-12 lg:my-16'>
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-4 sm:p-6 lg:p-10">
                            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 sm:pt-4 font-bold lh-81 text-center lg:text-start'>About Posspole People</p>
                            <h4 className='text-base sm:text-lg pt-3 sm:pt-4 font-normal lh-33 text-center lg:text-start text-bluegrey'>
                                Posspole People is a catalyst for unlocking human potential and building thriving local and global ecosystems through innovation, creativity, and collaboration.
                            </h4>
                            <p className='text-sm sm:text-base pt-3 sm:pt-4 font-normal lh-33 text-center lg:text-start text-bluegrey'>
                                We believe talent exists everywhere — in every background, every community, and every unconventional path. Our work is rooted in identifying hidden potential, nurturing it through transformative learning and real-world projects, and connecting it to opportunities that create impact.
                            </p>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center">
                            <div className="flex align-middle justify-center mb-10">
                                <Image src="/images/team/teamimg.png" alt="team collaboration" width={636} height={808} className='rounded-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20'>
                <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-lg'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-blue mb-4 sm:mb-6'>Vision</h3>
                    <p className='text-base sm:text-lg text-bluegrey leading-relaxed'>
                        To create a world where everyone, regardless of background or circumstance, can access the tools, skills, and networks to become a driving force for innovation, social impact, and positive change.
                    </p>
                </div>
                
                <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-lg'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-blue mb-4 sm:mb-6'>Mission</h3>
                    <ul className='space-y-4 text-bluegrey'>
                        <li className='flex items-start'>
                            <span className='text-blue font-bold mr-3'>•</span>
                            <div>
                                <strong>Identify Untapped Talent</strong> — Discover potential where no one else is looking, and give it a platform to shine.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue font-bold mr-3'>•</span>
                            <div>
                                <strong>Transform Through Learning</strong> — Provide transformative, project-based, and collaborative learning experiences.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue font-bold mr-3'>•</span>
                            <div>
                                <strong>Build Thriving Ecosystems</strong> — Partner with local communities, industries, and innovators to create hubs of opportunity.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue font-bold mr-3'>•</span>
                            <div>
                                <strong>Think Global, Act Local</strong> — Deliver world-class learning while tailoring each initiative to local needs.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue font-bold mr-3'>•</span>
                            <div>
                                <strong>Sustain Impact</strong> — Foster long-term growth by connecting people to networks and opportunities.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Posspole Catalyst Platform Section */}
            <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-blue mb-6'>POSSPOLE CATALYST</h2>
                    <p className='text-xl text-bluegrey max-w-4xl mx-auto'>
                        A Project-based platform that nurtures AI-ready and creative talents.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>
                    <div className='space-y-6'>
                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h4 className='text-xl font-bold text-blue mb-3'>Peer-to-Peer Learning</h4>
                            <p className='text-bluegrey'>
                                By harnessing peer-to-peer pedagogy, learning is facilitated through a collective and co-creative process in a professional environment.
                            </p>
                        </div>
                        
                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h4 className='text-xl font-bold text-blue mb-3'>Talent Discovery</h4>
                            <p className='text-bluegrey'>
                                POSSPOLE CATALYST platform harnesses online tools and cognitive games to identify unrevealed talents within a large population.
                            </p>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h4 className='text-xl font-bold text-blue mb-3'>Merit-Based Access</h4>
                            <p className='text-bluegrey'>
                                Based on merit, it is open to all backgrounds, especially those who don&apos;t succeed in traditional education systems and gives them access to high-quality education.
                            </p>
                        </div>
                        
                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h4 className='text-xl font-bold text-blue mb-3'>AI-Ready Curriculum</h4>
                            <p className='text-bluegrey'>
                                Cutting-edge AI-ready curriculum based on creative confrontation, creating the right skills to navigate the AI wave.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                    <h3 className='text-2xl font-bold text-blue mb-4'>Natively AI-ready to produce future-proof coders</h3>
                    <p className='text-lg text-bluegrey'>
                        Creating the right skills to navigate the AI wave by leveraging collective intelligence to make the most of the combination of Artificial and Human Intelligence.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;