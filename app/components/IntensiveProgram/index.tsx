const IntensiveProgram = () => {
    return (
        <section id="program-section" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 my-16 sm:my-20 md:my-24 lg:my-32' aria-labelledby="program-heading">
            <header className='text-center'>
                {/* Main Heading */}
                <h2 id="program-heading" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-tight max-w-6xl mx-auto px-2'>
                    A 2-year intensive program with more skills and results than those obtained 
                    in 5 years of a traditional pedagogy approach
                </h2>

            </header>
            
            <main>
                {/* Features List */}
                <section className='text-left max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4' aria-labelledby="features-heading">
                    <h3 id="features-heading" className="sr-only">Program Features</h3>
                    <ul className='space-y-4 sm:space-y-5 md:space-y-6 text-lg sm:text-xl lg:text-2xl' role="list">
                        <li className='flex items-center min-h-[2.5rem] sm:min-h-[3rem]'>
                            <span className='text-black font-bold mr-4' aria-hidden="true">•</span>
                            <span className='text-black font-bold'>No lectures</span>
                        </li>
                        <li className='flex items-center'>
                            <span className='text-black font-bold mr-4' aria-hidden="true">•</span>
                            <span className='text-black font-bold'>No teachers</span>
                        </li>
                        <li className='flex items-center'>
                            <span className='text-black font-bold mr-4' aria-hidden="true">•</span>
                            <span className='text-black font-bold'>No grades</span>
                        </li>
                        <li className='flex items-center'>
                            <span className='text-darkpurple font-bold mr-4' aria-hidden="true">✓</span>
                            <span className='text-darkpurple font-bold'>Producing &quot;AI-ready&quot; world-class full-stack developers</span>
                        </li>
                    </ul>
                </section>

                {/* Description */}
                <section className='text-center' aria-labelledby="description-heading">
                    <h3 id="description-heading" className="sr-only">Program Description</h3>
                    <p className='text-base sm:text-lg lg:text-xl text-bluegrey max-w-5xl mx-auto leading-relaxed px-4'>
                        Producing world-class AI-ready developers: graduates master Python, JavaScript, and AI 
                        technologies as natural language for processing and data analysis.
                    </p>
                </section>
            </main>
        </section>
    )
}

export default IntensiveProgram;