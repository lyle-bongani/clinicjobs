import React from 'react';
import Reveal from '../common/Reveal';

const features = [
  'Fast appointment booking',
  'Full documentation guidance',
  'Travel insurance and itinerary planning',
  'Flight & hotel booking support',
];

const HomeWhyChooseUs: React.FC = () => (
  <section className="w-full py-12 bg-white">
    <div className="w-full px-4 sm:px-6 mx-auto bg-gray-100 rounded-2xl md:px-12 py-8 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left: Image */}
      <Reveal variant="left" className="md:flex-1 w-full">
        <div className="w-full max-w-lg md:max-w-none md:flex-1 flex justify-center mx-auto">
          <img
            src={process.env.PUBLIC_URL + '/images/pics/whychoseushome.jpg'}
            alt="Why Choose Us"
            className="rounded-2xl object-cover w-full max-w-lg md:max-w-xl h-64 sm:h-80 md:h-[36rem]"
          />
        </div>
      </Reveal>
      {/* Right: Content */}
      <div className="w-full md:flex-1 max-w-[420px] md:max-w-[520px] mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 w-full text-center !text-center">
          <span className="text-blue-900">Why </span>
          <span className="text-red-600">Choose Us</span>
        </h2>
        <div className="flex flex-col items-center md:items-stretch justify-center gap-4 md:gap-6 w-full">
          {features.map((feature, idx) => (
            <Reveal key={feature} variant="right" delayMs={idx * 120}>
              <div
                className="group flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start bg-white rounded-xl shadow px-5 md:px-6 py-4 md:py-5 gap-2 md:gap-4 w-full max-w-[420px] md:max-w-[520px] mx-auto md:mx-0 text-center md:text-left anim-card-lift"
              >
                <div className="flex items-center justify-center bg-blue-900 text-white font-bold rounded-full w-12 h-12 text-xl anim-icon-bump">
                  {idx + 1}
                </div>
                <span className="text-gray-900 text-base md:text-lg font-medium md:leading-6">
                  {feature}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeWhyChooseUs;
