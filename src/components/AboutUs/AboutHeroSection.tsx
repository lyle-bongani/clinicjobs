import React from 'react';
import Reveal from '../common/Reveal';

const AboutHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Outer card */}
        <div className="bg-slate-50 rounded-2xl shadow-sm p-6 md:p-8 anim-card-lift">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Text */}
            <Reveal variant="left">
              <div className="md:mt-6 lg:mt-16 xl:mt-24">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  <span className="text-red-700">About The CV, Job Hunting &</span>
                  <br />
                  <span className="text-blue-900">Visa Clinic</span>
                </h1>

                <h2 className="mt-4 text-base md:text-lg font-semibold text-slate-900">
                  Your Trusted Partner for Career and UK Immigration Success
                </h2>

                <div className="mt-6 space-y-5 text-slate-600 max-w-prose text-xs md:text-sm">
                  <p>
                    At The CV, Job Hunting & Visa Clinic, we are more than just a service provider; we are your
                    dedicated partners in navigating key moments in your professional and personal life.
                    Our mission is to empower individuals with the tools and confidence needed to succeed, whether
                    that's securing a new job or starting a new life in the UK.
                  </p>
                  <p>
                    Our team consists of seasoned experts with deep knowledge in recruitment, career development,
                    and UK immigration law. We combine this expertise with a client-focused approach to provide
                    solutions that are not only effective but also personalized to your unique needs. We believe in
                    providing clear, actionable guidance to help you overcome challenges and achieve your ambitions.
                  </p>
                  <p>
                    We are proud to be a trusted resource, and we are committed to upholding the highest standards
                    of professionalism and integrity in all our services.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Image */}
            <Reveal variant="right">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={process.env.PUBLIC_URL + '/images/pics/aboutuspghero.png'}
                  alt="Happy traveler walking with suitcase"
                  className="w-full h-[520px] md:h-[560px] lg:h-[600px] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
