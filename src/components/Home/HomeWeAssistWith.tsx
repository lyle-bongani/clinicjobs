import React from 'react';

const services = [
  'Tourist Visas (holiday & leisure travel)',
  'Business Visas',
  'Schengen Visa Appointments & Travel Planning',
  'UK Skilled Worker Visa & Caregiver Visa',
  'Canada, Australia & USA Visa Applications',
  'Family & Dependent Visas',
];

const HomeWeAssistWith: React.FC = () => (
  <section id="visa-clinic" className="w-full py-12 bg-white">
    <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={process.env.PUBLIC_URL + '/images/pics/weassistwithhome.jpg'}
          alt="We Assist With"
          className="rounded-2xl object-cover w-full max-w-xl h-64 sm:h-80 md:h-[32rem]"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-blue-900">We </span>
          <span className="text-red-600">Assist</span>
          <span className="text-blue-900"> With</span>
        </h2>
        <div className="mb-4 text-lg font-bold text-black">
          Visitor Visas <span className="font-normal text-base">(short stays for family/friends visits)</span>
        </div>
        <ul className="list-disc pl-6 md:pl-6 space-y-2 text-gray-900 text-base md:text-lg text-left">
          {services.map((service, idx) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HomeWeAssistWith;
