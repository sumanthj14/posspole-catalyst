import React from 'react';
import Image from 'next/image';

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
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coFounders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
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
                <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                  "{founder.quote}"
                </blockquote>
              </div>

              {/* Name and Role */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoFounders;