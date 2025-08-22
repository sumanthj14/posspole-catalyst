const IdentifyTrain = () => {
    return (
        <div id="identify-train-section" className='mx-auto max-w-7xl px-4 py-24 my-32'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl lg:text-4xl font-bold text-bluegrey mb-16'>
                    An EdTech operating under an &quot;Identify and Train&quot; model
                </h2>
            </div>

            {/* Identify Section */}
            <div className='text-center mb-16'>
                <div className='inline-block bg-darkpurple text-white px-16 py-4 rounded-xl text-2xl font-bold mb-12'>
                    Identify
                </div>
                <h3 className='text-3xl lg:text-4xl font-bold text-black mb-8'>
                    We&apos;re selecting talent that no one is looking for!
                </h3>
                <p className='text-lg text-bluegrey max-w-4xl mx-auto leading-relaxed mb-16'>
                    Unearth new pools of digital talent from vast, untapped populations 
                    with our unique &quot;no-prerequisite, no experience&quot; selection model.
                </p>
            </div>

            {/* Train Section */}
            <div className='text-center'>
                <div className='inline-block bg-darkpurple text-white px-16 py-4 rounded-xl text-2xl font-bold mb-12'>
                    Train
                </div>
                <h3 className='text-3xl lg:text-4xl font-bold text-black mb-8'>
                    We&apos;re training to excellence, at scale!
                </h3>
                <p className='text-lg text-bluegrey max-w-4xl mx-auto leading-relaxed'>
                    Transform them into top-tier AI-ready & job-ready coders through teacherless, 
                    project-based world-class digital peer-to-peer education on the <span className='font-bold text-black'>01Edu</span> platform.
                </p>
            </div>
        </div>
    )
}

export default IdentifyTrain;