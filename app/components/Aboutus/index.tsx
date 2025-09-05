import Image from "next/image";
import ScrollAnimation from '../ScrollAnimation';

const Aboutus = () => {
    return (
        <section id="about-section" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8' aria-labelledby="about-heading">
            {/* About Posspole People Section */}
            <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
                <article className='bg-lightgrey rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10' role="region" aria-labelledby="about-heading">
                <div className='grid grid-cols-1 lg:grid-cols-12 my-4 sm:my-6 md:my-8'>
                    <div className='col-span-12 lg:col-span-6 flex justify-center mb-8 lg:mb-0'>
                        <div className="flex flex-col align-middle justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                            <h2 id="about-heading" className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-2 sm:pt-4 font-bold leading-tight text-center lg:text-start text-blue'>About Us</h2>

                            <p className='text-base sm:text-lg pt-3 sm:pt-4 font-normal leading-relaxed text-center lg:text-start text-slate-600'>
                                India&apos;s first peer-driven, AI-native product innovation platform. Built with Europe&apos;s 01Edu, and launched by Posspole People Pvt, Catalyst moves beyond rote learning—no teachers, no textbooks. Instead, learners tackle real-world challenges, master skills through projects, and grow as innovators from Day 1.
                            </p>
                            <p className='text-base sm:text-lg pt-3 sm:pt-4 font-normal leading-relaxed text-center lg:text-start text-slate-600'>
                                Connected to Posspole&apos;s full-stack innovation ecosystem—design, compliance, manufacturing, and global go-to-market—Catalyst turns learning into impact. From healthcare to defence, telecom to energy, learners solve live problems while corporates access ready-to-deploy talent.
                            </p>
                            <p className='text-base sm:text-lg pt-3 sm:pt-4 font-normal leading-relaxed text-center lg:text-start text-slate-600'>
                                Catalyst isn&apos;t a school. It&apos;s a launchpad—unlocking hidden potential, building global creators, and shaping India&apos;s AI-driven future.
                            </p>
                            <p className='text-base sm:text-lg pt-3 sm:pt-4 font-bold text-center lg:text-start text-blue'>
                                Learn. Build. Launch—backed by Posspole&apos;s Corporate VC
                            </p>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center">
                            <figure className="flex align-middle justify-center mb-6 sm:mb-8 md:mb-10">
                                <Image src="/images/team/teamimg.png" alt="Diverse team of professionals collaborating on innovative technology projects at POSSPOLE CATALYST" width={636} height={808} className='rounded-xl sm:rounded-2xl w-full max-w-md lg:max-w-full h-auto' />
                            </figure>
                        </div>
                    </div>
                </div>
                </article>
            </ScrollAnimation>

            {/* Vision & Mission Section */}
            <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8 md:mb-10' aria-labelledby="vision-mission-heading">
                <article className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg' role="region" aria-labelledby="vision-heading">
                    <h3 id="vision-heading" className='text-3xl sm:text-4xl font-bold text-blue mb-4 sm:mb-6'>Vision</h3>
                    <p className='text-lg sm:text-xl text-slate-600 font-normal leading-loose'>
                        <span className='font-bold text-blue-600'>Nation-Building Through Innovation:</span> To empower 1,500 global product creators every two years from India. Innovators who design AI-native solutions across defense, healthcare, aerospace, telecom, energy, and beyond, while ensuring that anyone, regardless of background, has access to the tools, skills, and networks needed to drive innovation, social impact, and positive change.
                    </p>
                </article>
                
                <article className='bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg' role="region" aria-labelledby="mission-heading">
                    <h3 id="mission-heading" className='text-3xl sm:text-4xl font-bold text-blue mb-4 sm:mb-6'>Mission</h3>
                    <ul className='space-y-4 text-slate-600 font-normal'>
                        <li className='flex items-start'>
                            <span className='text-blue-600 font-bold mr-3'>•</span>
                            <div>
                                <strong>Identify Untapped Talent</strong> — Discover potential where no one else is looking, and give it a platform to shine.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue-600 font-bold mr-3'>•</span>
                            <div>
                                <strong>Transform Through Learning</strong> — Provide transformative, project-based, and collaborative learning experiences.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue-600 font-bold mr-3'>•</span>
                            <div>
                                <strong>Build Thriving Ecosystems</strong> — Partner with local communities, industries, and innovators to create hubs of opportunity.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue-600 font-bold mr-3'>•</span>
                            <div>
                                <strong>Think Global, Act Local</strong> — Deliver world-class learning while tailoring each initiative to local needs.
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <span className='text-blue-600 font-bold mr-3'>•</span>
                            <div>
                                <strong>Sustain Impact</strong> — Foster long-term growth by connecting people to networks and opportunities.
                            </div>
                        </li>
                    </ul>
                </article>
                </section>
            </ScrollAnimation>

            {/* Posspole Catalyst Platform Section */}
            <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
                <section className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10' aria-labelledby="platform-heading">
                <header className='text-center mb-4 sm:mb-6 md:mb-8'>
                    <h2 id="platform-heading" className='text-4xl sm:text-5xl md:text-6xl font-bold text-blue mb-4 sm:mb-6 px-2'>POSSPOLE CATALYST</h2>
                    <p className='text-xl sm:text-2xl text-slate-600 font-normal max-w-4xl mx-auto px-4'>
                        A Project-based platform that nurtures AI-ready and creative talents.
                    </p>
                </header>

                {/* AI Image */}
                <ScrollAnimation direction="up" delay={0.4} duration={1.0}>
                    <div className='flex justify-center items-center mb-4 sm:mb-6 md:mb-8 group'>
                        <Image 
                            src='/images/AI-image.png' 
                            alt='AI Technology Illustration' 
                            width={1024}
                            height={768}
                            className='max-w-4xl w-full h-auto object-cover transition-all duration-500 ease-in-out transform group-hover:scale-102 hover:shadow-lg mx-auto'
                        />
                    </div>
                </ScrollAnimation>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-6 md:mb-8' role="list">
                    <div className='space-y-4 sm:space-y-6' role="listitem">
                        <article className='bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md' role="region" aria-labelledby="peer-learning-heading">
                            <h4 id="peer-learning-heading" className='text-xl sm:text-2xl font-semibold text-blue mb-2 sm:mb-3'>Peer-to-Peer Learning</h4>
                            <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed'>
                                By harnessing peer-to-peer pedagogy, learning is facilitated through a collective and co-creative process in a professional environment.
                            </p>
                        </article>
                        
                        <article className='bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md' role="region" aria-labelledby="talent-discovery-heading">
                            <h4 id="talent-discovery-heading" className='text-xl sm:text-2xl font-semibold text-blue mb-2 sm:mb-3'>Talent Discovery</h4>
                            <p className='text-base sm:text-lg text-slate-600 font-normal'>
                                POSSPOLE CATALYST platform harnesses online tools and cognitive games to identify unrevealed talents within a large population.
                            </p>
                        </article>
                    </div>

                    <div className='space-y-4 sm:space-y-6' role="listitem">
                        <article className='bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md' role="region" aria-labelledby="merit-access-heading">
                            <h4 id="merit-access-heading" className='text-xl sm:text-2xl font-semibold text-blue mb-2 sm:mb-3'>Merit-Based Access</h4>
                            <p className='text-base sm:text-lg text-slate-600 font-normal'>
                                Based on merit, it is open to all backgrounds, especially those who don&apos;t succeed in traditional education systems and gives them access to high-quality education.
                            </p>
                        </article>
                        
                        <article className='bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md' role="region" aria-labelledby="ai-curriculum-heading">
                            <h4 id="ai-curriculum-heading" className='text-xl sm:text-2xl font-semibold text-blue mb-2 sm:mb-3'>AI-Ready Curriculum</h4>
                            <p className='text-base sm:text-lg text-slate-600 font-normal'>
                                Cutting-edge AI-ready curriculum based on creative confrontation, creating the right skills to navigate the AI wave.
                            </p>
                        </article>
                    </div>
                </div>

                <footer className='text-center bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg'>
                    <h3 className='text-2xl sm:text-3xl font-semibold text-blue mb-3 sm:mb-4 px-2'>Natively AI-ready to produce future-proof coders</h3>
                    <p className='text-lg sm:text-xl text-slate-600 font-normal leading-relaxed px-4'>
                        Creating the right skills to navigate the AI wave by leveraging collective intelligence to make the most of the combination of Artificial and Human Intelligence.
                    </p>
                </footer>
                </section>
            </ScrollAnimation>
        </section>
    )
}

export default Aboutus;