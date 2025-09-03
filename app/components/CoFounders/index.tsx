import React from 'react';
import Image from 'next/image';
import ScrollAnimation from '../ScrollAnimation';

const CoFounders = () => {
  const coFounders = [
    {
      name: "Nicolas Sadirac",
      role: "Co-founder of 01Edu",
      image: "/images/team/nicolas-sadirac.png",
      quote: "We are proud and excited to collaborate on the launch of Catalyst, the new, groundbreaking coding school in Bangalore, India, our 31st campus worldwide! Our platform and pedagogy are designed to empower a new generation of digital talent—identifying the most promising individuals from large population pools and training them to become the world's best AI-ready coders. In India's vibrant tech ecosystem, we are confident we have found the ideal partner to achieve our mission and truly 'Recode Our World with Talent.'"
    },
    {
      name: "Deror Sultan",
      role: "CEO & Co-founder of 01Edu",
      image: "/images/team/ceo.png",
      quote: "Youth is a priority for India, its most valuable human capital. By 2050, young people under 25 will continue to represent a major share of the country's population. Through this partnership with Posspole in Bangalore first, and its future expansion at the nationwide level, we aim to restore hope and unlock their creative potential so they can further accelerate India's innovation and digital transformation."
    },
    {
      name: "Kiran Rudrappa",
      role: "CEO, Posspole",
      image: "/images/team/kiran-rudrappa.png",
      quote: "Catalyst stands apart through its deep integration with Posspole's full-stack ecosystem — from product development and compliance to manufacturing, global market access, and funding via our Corporate Venture Capital arm. Participants will tackle large-scale innovation across healthcare, defence, telecom, and energy, gaining real-world industrial problem-solving experience. Catalyst is not just a platform; it's a national engine to shape global product creators from India, unlocking a new era of talent and product-led growth."
    }
  ];

  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Visionary Leaders Driving the <span className="text-blue-600">OneEdu × PossPole Catalyst</span> Collaboration
            </h2>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coFounders.map((founder, index) => (
            <ScrollAnimation 
              key={index}
              direction="up" 
              delay={0.4 + (index * 0.2)} 
              duration={0.8}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                {/* Profile Photo */}
                <div className="mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-100">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <blockquote className="text-lg text-blue-700 font-medium leading-loose italic">
                    &ldquo;{founder.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Name and Role */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold">
                    {founder.role}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoFounders;