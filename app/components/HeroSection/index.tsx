import Image from "next/image";
import ScrollAnimation from '../ScrollAnimation';

const HeroSection = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8'>
            <div className='bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10'>
                <div className='text-left space-y-4 sm:space-y-6 md:space-y-8'>

                    {/* Main Heading */}
                    <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
                        <div className='space-y-3 sm:space-y-4'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-blue leading-tight px-2 text-center'>
                                The Model
                            </h1>
                        </div>
                    </ScrollAnimation>

                    {/* Model Details */}
                    <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
                        {/* Card 1 */}
                        <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50'>
                            <h3 className='text-xl font-bold text-blue mb-3'>Flagship Center</h3>
                            <p className='text-black'>
                                Bengaluru {"\u2013"} 250 learners, 100% Posspole-owned
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50'>
                            <h3 className='text-xl font-bold text-blue mb-3'>Nationwide Expansion</h3>
                            <p className='text-black'>
                                10+ Catalyst Centers Nationwide {"\u2013"} in partnership with top universities & business leaders
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50'>
                            <h3 className='text-xl font-bold text-blue mb-3'>Grand Challenges Focus</h3>
                            <p className='text-black'>
                                Healthcare, cybersecurity, climate resilience, inclusive finance & more
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50'>
                            <h3 className='text-xl font-bold text-blue mb-3'>Impact & Value</h3>
                            <p className='text-black'>
                                Driving wealth creation for learners, partners, investors, and national growth
                            </p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* Next-Gen Learning Section */}
                    <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
                    <div className='mt-16 mb-12'>
                        <div className='bg-gradient-to-r from-lightblue via-white to-lightblue rounded-2xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue mb-6 leading-tight text-center'>
                                A Next-Gen Learning and <br className='hidden sm:block'/>
                                Innovation Hub: Posspole Catalyst <br className='hidden sm:block'/>
                                Center
                            </h2>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className='space-y-4'>
                                    <div className='flex items-start'>
                                        <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                        <p className='ml-4 text-black'>
                                            125 learners per center with peer-driven, gamified learning
                                        </p>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                        <p className='ml-4 text-black'>
                                            Built for impact & scale, aligned with industry needs
                                        </p>
                                    </div>
                                </div>
                                
                                <div className='space-y-4'>
                                    <div className='flex items-start'>
                                        <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                        <p className='ml-4 text-black'>
                                            Joint certification & degree pathways with top universities
                                        </p>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                        <p className='ml-4 text-black text-left'>
                                            90% placement into Posspole ecosystem, tech firms, startups & ventures
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='mt-8 text-left'>
                                <p className='text-xl sm:text-2xl font-bold text-blue italic'>
                                    Where Talent Becomes Product Power
                                </p>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* Two-Step Journey Section */}
                    <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
                    <div className='mt-16 mb-12'>
                        <div className='bg-gradient-to-br from-white via-lightblue to-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue mb-6 leading-tight text-center'>
                                The Two-Step Journey from <br className='hidden sm:block'/>
                                Potential to Catalyst
                            </h2>
                            
                            <div className='text-left mb-8'>
                                <p className='text-black text-lg'>
                                    At Posspole Catalyst, brilliance is discovered{"\u2014"}not assumed. In partnership with 01Edu, 
                                    our selection process uncovers raw potential and shapes it into world-class talent. No 
                                    CVs, no coding background{"\u2014"}just mindset, grit, and problem-solving spirit.
                                </p>
                            </div>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                {/* Step 1 */}
                                <div className='bg-white rounded-xl p-6 shadow-md border-t-4 border-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50'>
                                    <h3 className='text-xl font-bold text-blue mb-4'>Step 1: <span className='font-normal'>The Cognitive Gauntlet</span></h3>
                                    <p className='text-black italic mb-4'>A 90-minute, gamified challenge</p>
                                    
                                    <div className='space-y-3'>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Tests memory, logic, and learning agility
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Merit-based filter {"\u2013"} no bias of background, language, or education
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Multiple attempts allowed, only the best score counts
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Identifies the most adaptive and sharpest minds to move forward
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Step 2 */}
                                <div className='bg-white rounded-xl p-6 shadow-md border-t-4 border-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50'>
                                    <h3 className='text-xl font-bold text-blue mb-4'>Step 2: <span className='font-normal'>The Piscine</span></h3>
                                    <p className='text-black italic mb-4'>A 4-week immersive bootcamp</p>
                                    
                                    <div className='space-y-3'>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                No teachers, no lectures {"\u2013"} only peer-led problem solving & collaboration
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Includes weekly checkpoints and weekend group missions
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Learners are pushed to innovate, adapt, and persist
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Filters for the most resilient, curious, and collaborative minds
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                A transformation gateway, not just an entrance test
                                            </p>
                                        </div>
                                        <div className='flex items-start'>
                                            <div className='h-5 w-5 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                            <p className='ml-4 text-black'>
                                                Graduates prove themselves as product thinkers, problem solvers & innovators
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='mt-8 text-left bg-blue bg-opacity-10 p-4 rounded-xl'>
                                <p className='text-lg sm:text-xl text-blue font-medium italic'>
                                    {"\u201c"}Catalysts create solutions that shape homes, hospitals, battlefields, cities, and lives{"\u2014"} <br className='hidden md:block'/>
                                    bringing safety, security, purpose, and possibility to millions.{"”"}
                                </p>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* Who Can Apply Section */}
                    <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
                    <div className='mt-16 mb-12'>
                        <div className='bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto border border-blue border-opacity-20'>
                            <div className='text-center mb-6'>
                                <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue mb-2 leading-tight relative'>
                                    Who Can Apply
                                    <div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue to-transparent'></div>
                                </h2>
                                <p className='text-black text-lg mt-4 max-w-3xl mx-auto'>
                                    At Posspole Catalyst, talent has no boundaries. Our program is open to anyone with 
                                    intent, curiosity, and perseverance{"\u2014"}no degree or coding background required.
                                </p>
                            </div>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                                {/* Category 1 */}
                                <div className='bg-white rounded-xl p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-2 border-blue'>
                                    <h3 className='text-lg font-bold text-blue mb-2'>Students</h3>
                                    <p className='text-black'>
                                        From any stream or institution, including final-year learners
                                    </p>
                                </div>
                                
                                {/* Category 2 */}
                                <div className='bg-white rounded-xl p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-2 border-blue'>
                                    <h3 className='text-lg font-bold text-blue mb-2'>Professionals & Career Shifters</h3>
                                    <p className='text-black'>
                                        Pivoting into tech, AI, or product innovation
                                    </p>
                                </div>
                                
                                {/* Category 3 */}
                                <div className='bg-white rounded-xl p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-2 border-blue'>
                                    <h3 className='text-lg font-bold text-blue mb-2'>Defense Veterans & Healthcare Workers</h3>
                                    <p className='text-black'>
                                        Transitioning into aerospace, defense tech, or healthtech
                                    </p>
                                </div>
                                
                                {/* Category 4 */}
                                <div className='bg-white rounded-xl p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-2 border-blue'>
                                    <h3 className='text-lg font-bold text-blue mb-2'>Women Re-entering the Workforce</h3>
                                    <p className='text-black'>
                                        Supported with flexible, inclusive pathways
                                    </p>
                                </div>
                                
                                {/* Category 5 */}
                                <div className='bg-white rounded-xl p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-2 border-blue'>
                                    <h3 className='text-lg font-bold text-blue mb-2'>Creators & Self-Learners</h3>
                                    <p className='text-black'>
                                        Dropouts, freelancers, artists, or Tier 2/3 innovators with passion to build
                                    </p>
                                </div>
                                
                                {/* Category 6 */}
                                <div className='bg-white rounded-xl p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-2 border-blue'>
                                    <h3 className='text-lg font-bold text-blue mb-2'>Global Talent & Founders</h3>
                                    <p className='text-black'>
                                        NRIs, immigrants, entrepreneurs, and future AI product leaders
                                    </p>
                                </div>
                            </div>
                            
                            <div className='mt-8 text-center'>
                                <p className='text-lg text-black'>In essence: anyone with the <span className='font-bold'>WILL</span> to create.</p>
                                <div className='mt-4 bg-blue bg-opacity-10 p-4 rounded-xl inline-block mx-auto'>
                                    <p className='text-xl sm:text-2xl font-bold text-blue italic'>
                                        {"“"}Talent Has No Boundaries{"”"}<br />
                                        <span className='text-lg font-normal'>If you have the will to create, you belong here.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* Why Corporations & Universities Section */}
                    <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
                    <div className='mt-16 mb-12'>
                        <div className='bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto'>
                            <div className='text-center mb-8'>
                                <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue mb-2 leading-tight relative'>
                                    Why Corporations & Universities?
                                    <div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue to-transparent'></div>
                                </h2>
                            </div>
                            
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                {/* Quote 1 */}
                                <div className='bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative'>
                                    <div className='absolute -top-3 -left-3 text-6xl text-blue opacity-20'>{"“"}</div>
                                <p className='text-lg text-black leading-relaxed'>
                                    From classrooms to catalysts—together, we shape India{"’"}s innovation future.
                                </p>
                                <div className='absolute -bottom-3 -right-3 text-6xl text-blue opacity-20'>{"”"}</div>
                                </div>
                                
                                {/* Quote 2 */}
                                <div className='bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative'>
                                    <div className='absolute -top-3 -left-3 text-6xl text-blue opacity-20'>{"“"}</div>
                                    <p className='text-lg text-black italic'>
                                        Your networks + our model = nation-building through innovation.
                                    </p>
                                    <div className='absolute -bottom-3 -right-3 text-6xl text-blue opacity-20'>{"”"}</div>
                                </div>
                                
                                {/* Quote 3 */}
                                <div className='bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative'>
                                    <div className='absolute -top-3 -left-3 text-6xl text-blue opacity-20'>{"“"}</div>
                                    <p className='text-lg text-black italic'>
                                        Not just partners. Catalysts of change.
                                    </p>
                                    <div className='absolute -bottom-3 -right-3 text-6xl text-blue opacity-20'>{"”"}</div>
                                </div>
                            </div>
                            
                            <div className='mt-8 text-left'>
                                <p className='text-xl font-bold text-blue'>
                                    Together, we{"\u2019"}re building India{"\u2019"}s innovation future
                                </p>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* Program Highlights Section */}
                    <ScrollAnimation direction="up" delay={0.7} duration={0.8}>
                    <div className='mt-16 mb-12'>
                        <div className='bg-gradient-to-r from-lightblue via-white to-lightblue rounded-2xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue mb-6 leading-tight text-center'>
                                Program Highlights
                            </h2>
                            
                            <div className='space-y-4'>
                                <div className='flex items-start'>
                                    <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                    <p className='ml-4 text-black'>
                                        Beyond Full-Stack {"\u2013"} AI-powered, domain-aligned training in aerospace, healthcare, defense, climate tech & more
                                    </p>
                                </div>
                                <div className='flex items-start'>
                                    <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                    <p className='ml-4 text-black'>
                                        24-month journey with 55+ real-world projects
                                    </p>
                                </div>
                                <div className='flex items-start'>
                                    <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                    <p className='ml-4 text-black'>
                                        Specialization {"\u2013"} final 6 months in sector-specific tracks
                                    </p>
                                </div>
                                <div className='flex items-start'>
                                    <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                    <p className='ml-4 text-black'>
                                        No classrooms, no teachers {"\u2013"} peer-led, project-based learning
                                    </p>
                                </div>
                                <div className='flex items-start'>
                                    <div className='h-6 w-6 rounded-full bg-blue flex-shrink-0 mt-1'></div>
                                    <p className='ml-4 text-black'>
                                        Multiple pathways {"\u2013"} jobs, freelancing, startups, or higher education
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* Strategic Investment Invitation Section */}
                    <ScrollAnimation direction="up" delay={0.8} duration={0.8}>
                    <div className='mt-16 mb-12'>
                        <div className='bg-gradient-to-r from-lightblue via-white to-lightblue rounded-2xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue mb-6 leading-tight'>
                                Strategic Investment Invitation
                            </h2>
                            
                            <div className='space-y-6'>
                                <p className='text-black'>
                                    Posspole Catalyst invites leading corporates and universities to join as Strategic 
                                    Investment Partners in a national mission to build India{"\u2019"}s most agile, globally 
                                    competitive talent and product ecosystem.
                                </p>
                                
                                <p className='text-black'>
                                    This is more than infrastructure—it{"\u2019"}s a stake in reshaping India{"\u2019"}s product economy.
                                </p>
                                
                                <div className='bg-white p-6 rounded-xl shadow-md relative my-6'>
                                    <div className='absolute -top-3 -left-3 text-6xl text-blue opacity-20'>{"“"}</div>
                                    <p className='text-lg text-black italic'>
                                        Each product born at Catalyst will serve not just a market, but a mission{"\u2014"}engineered for 
                                        safety, built for prosperity, and scaled to uplift communities.
                                    </p>
                                    <div className='absolute -bottom-3 -right-3 text-6xl text-blue opacity-20'>{"”"}</div>
                                </div>
                                
                                <h3 className='text-xl sm:text-2xl font-bold text-blue mt-8 mb-4'>
                                    Investment Models
                                </h3>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {/* Model 1 */}
                                    <div className='bg-white p-6 rounded-xl shadow-md border-l-4 border-blue'>
                                        <h4 className='text-lg font-bold text-blue mb-3'>1. Full Investment</h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-start mb-2'>
                                                <div className='h-4 w-4 rounded-full bg-blue flex-shrink-0 mt-1.5'></div>
                                                <p className='ml-3 text-black'>Sponsor learners fully</p>
                                            </li>
                                            <li className='flex items-start mb-2'>
                                                <div className='h-4 w-4 rounded-full bg-blue flex-shrink-0 mt-1.5'></div>
                                                <p className='ml-3 text-black text-left'>Share revenues for 3 years from global talent deployments & consulting</p>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {/* Model 2 */}
                                    <div className='bg-white p-6 rounded-xl shadow-md border-l-4 border-blue'>
                                        <h4 className='text-lg font-bold text-blue mb-3'>2. Co-Investment with Universities</h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-start mb-2'>
                                                <div className='h-4 w-4 rounded-full bg-blue flex-shrink-0 mt-1.5'></div>
                                                <p className='ml-3 text-black whitespace-normal'>Collaborate with reputed academic institutions</p>
                                            </li>
                                            <li className='flex items-start mb-2'>
                                                <div className='h-4 w-4 rounded-full bg-blue flex-shrink-0 mt-1.5'></div>
                                                <p className='ml-3 text-black whitespace-normal'>Share capital, operations & revenues</p>
                                            </li>
                                            <li className='flex items-start mb-2'>
                                                <div className='h-4 w-4 rounded-full bg-blue flex-shrink-0 mt-1.5'></div>
                                                <p className='ml-3 text-black whitespace-normal'>Access high-quality learners & placement pipelines</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    
                    {/* View Proposal Button - Removed */}

                </div>
            </div>
        </div>
    )
}

export default HeroSection;