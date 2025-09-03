import ScrollAnimation from '../ScrollAnimation';

const IdentifyTrain = () => {
    return (
        <div id="identify-train-section" className='mx-auto max-w-7xl px-4 py-6 my-8'>
            <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
                <div className='text-center mb-6'>
                <h2 className='text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6'>
                        An POSSPOLE CATALYST operating under an &quot;Identify and Train&quot; model
                    </h2>
                </div>
            </ScrollAnimation>

            {/* Identify Section */}
            <ScrollAnimation direction="left" delay={0.2} duration={0.8}>
                <div className='text-center mb-6'>
                    <div className='mb-4'>
                        <button className='block mx-auto bg-btnblue hover:bg-blue text-white px-16 py-4 rounded-xl text-3xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 shadow-lg border-2 border-btnblue hover:border-blue hover:scale-105 hover:shadow-xl'>
                            Identify
                        </button>
                    </div>
                    <h3 className='text-4xl lg:text-5xl font-bold text-blue-700 mb-4'>
                        We&apos;re selecting talent that no one is looking for!
                    </h3>
                    <p className='text-xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed mb-6'>
                        Unearth new pools of digital talent from vast, untapped populations 
                        with our unique &quot;no-prerequisite, no experience&quot; selection model.
                    </p>
                </div>
            </ScrollAnimation>

            {/* Train Section */}
            <ScrollAnimation direction="right" delay={0.3} duration={0.8}>
                <div className='text-center'>
                    <div className='mb-6'>
                        <button className='block mx-auto bg-btnblue hover:bg-blue text-white px-16 py-4 rounded-xl text-3xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 shadow-lg border-2 border-btnblue hover:border-blue hover:scale-105 hover:shadow-xl'>
                            Train
                        </button>
                    </div>
                    <h3 className='text-4xl lg:text-5xl font-bold text-blue-700 mb-4'>
                        We&apos;re training to excellence, at scale!
                    </h3>
                    <p className='text-xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed'>
                        Transform them into top-tier AI-ready & job-ready coders through teacherless, 
                        project-based world-class digital peer-to-peer education on the <span className='font-bold text-blue-700'>POSSPOLE CATALYST</span> platform.
                    </p>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default IdentifyTrain;