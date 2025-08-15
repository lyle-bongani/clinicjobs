import React from 'react';

const offers = [
  {
    img: process.env.PUBLIC_URL + '/images/pics/Professional.jpg',
    icon: process.env.PUBLIC_URL + '/images/icons/Professional.png',
    title: 'Professional CV Templates & Writing',
  },
  {
    img: process.env.PUBLIC_URL + '/images/pics/Job Application.jpg',
    icon: process.env.PUBLIC_URL + '/images/icons/Job Application.png',
    title: 'Job Application Coaching & Interview Prep',
  },
  {
    img: process.env.PUBLIC_URL + '/images/pics/VisaApplicationAssistance.jpg',
    icon: process.env.PUBLIC_URL + '/images/icons/visa.png',
    title: 'Visa Application Assistance (Visitor, Work, Dependent & Schengen)',
  },
  {
    img: process.env.PUBLIC_URL + '/images/pics/SupportforUK.jpg',
    icon: process.env.PUBLIC_URL + '/images/icons/supportforuk.png',
    title: 'Support for UK, Canada, Australia, USA, & Europe',
  },
];

const HomeWhatWeOffer: React.FC = () => (
  <section className="w-full py-12 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">What We Offer</h2>
      <div className="bg-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
        {offers.map((offer, idx) => (
          <div
            key={offer.title}
            className="bg-white rounded-xl shadow w-full md:w-64 lg:w-72 max-w-xs h-96 flex flex-col"
          >
            <div className="w-full h-1/2 rounded-t-xl overflow-hidden">
              <img src={offer.img} alt={offer.title} className="w-full h-full object-cover" />
            </div>
            <div className="relative h-1/2 flex flex-col items-center justify-center p-4 pt-4">
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                <img src={offer.icon} alt="icon" className="w-20 h-20 rounded-full shadow-lg" />
              </div>
              <div className="mt-2 text-center font-semibold text-base md:text-lg text-gray-900">
                {offer.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeWhatWeOffer;
