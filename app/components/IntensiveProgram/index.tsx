const IntensiveProgram = () => {
    return (
        <div id="program-section" className='mx-auto max-w-7xl px-4 py-24 my-32'>
            <div className='text-center'>
                {/* Main Heading */}
                <h2 className='text-3xl lg:text-5xl font-bold text-black mb-16 leading-tight max-w-6xl mx-auto'>
                    A 2-year intensive program with more skills and results than those obtained 
                    in 5 years of a traditional pedagogy approach
                </h2>

                {/* Features List */}
                <div className='text-left max-w-4xl mx-auto mb-16'>
                    <div className='space-y-6 text-xl lg:text-2xl'>
                        <div className='flex items-center'>
                            <span className='text-black font-bold mr-4'></span>
                            <span className='text-black font-bold'>No lectures</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-black font-bold mr-4'></span>
                            <span className='text-black font-bold'>No teachers</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-black font-bold mr-4'></span>
                            <span className='text-black font-bold'>No grades</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-darkpurple font-bold mr-4'></span>
                            <span className='text-darkpurple font-bold'>Producing "AI-ready" world-class full-stack developers</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className='text-lg lg:text-xl text-bluegrey max-w-5xl mx-auto leading-relaxed'>
                    Producing world-class AI-ready developers: graduates master Python, JavaScript, and AI 
                    technologies as natural language for processing and data analysis.
                </p>
            </div>
        </div>
    )
}

export default IntensiveProgram;