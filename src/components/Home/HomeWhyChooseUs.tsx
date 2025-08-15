import React from 'react';

const features = [
  'Fast appointment booking',
  'Full documentation guidance',
  'Travel insurance and itinerary planning',
  'Flight & hotel booking support',
];

const HomeWhyChooseUs: React.FC = () => (
  <section className="w-full py-12 bg-white">
    <div className="container mx-auto bg-gray-100 rounded-2xl px-4 md:px-12 py-8 flex flex-col md:flex-row items-center gap-10">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={process.env.PUBLIC_URL + '/images/pics/whychoseushome.jpg'}
          alt="Why Choose Us"
          className="rounded-2xl object-cover w-full max-w-xl h-[36rem]"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 w-full flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 w-full text-center">
          <span className="text-blue-900">Why </span>
          <span className="text-red-600">Choose Us</span>
        </h2>
        <div className="flex flex-col gap-6 w-full">
          {features.map((feature, idx) => (
            <div
              key={feature}
              className="flex items-center bg-white rounded-xl shadow px-6 py-4 gap-4 w-full"
            >
              <div className="flex items-center justify-center bg-blue-900 text-white font-bold rounded-full w-12 h-12 text-xl">
                {idx + 1}
              </div>
              <span className="text-gray-900 text-base md:text-lg font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeWhyChooseUs;
