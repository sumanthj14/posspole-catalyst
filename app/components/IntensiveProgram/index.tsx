const IntensiveProgram = () => {
    return (
        <section id="program-section" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8' aria-labelledby="program-heading">
            <header className='text-center'>
                {/* Main Heading */}
                <h2 id="program-heading" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight max-w-6xl mx-auto px-2'>
                    A 2-year intensive Training program.......
                </h2>
                <p className='text-lg sm:text-xl md:text-2xl text-blue-700 font-medium mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-loose max-w-6xl mx-auto px-2'>
                    A 2-year intensive program with more skills and results than those obtained in 5 years of a traditional pedagogy approach
                </p>

            </header>
            
            <main>
                {/* Features List */}
                <section className='text-center max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-4' aria-labelledby="features-heading">
                    <h3 id="features-heading" className="sr-only">Program Features</h3>
                    <p className='text-lg sm:text-xl lg:text-2xl text-red-600 font-bold mb-4 sm:mb-6'>
                        No lectures, No teachers, No grades
                    </p>
                    <p className='text-lg sm:text-xl lg:text-2xl text-white font-bold bg-blue px-6 py-3 rounded-lg inline-block shadow-lg border-2 border-darkblue'>
                         Producing AI-ready world-class full-stack developers
                    </p>
                </section>

                {/* Description */}
                <section className='text-center' aria-labelledby="description-heading">
                    <h3 id="description-heading" className="sr-only">Program Description</h3>
                    <p className='text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-5xl mx-auto leading-loose px-4'>
                        Producing world-class AI-ready developers: graduates master Python, JavaScript, and AI 
                        technologies as natural language for processing and data analysis.
                    </p>
                </section>
            </main>
        </section>
    )
}

export default IntensiveProgram;