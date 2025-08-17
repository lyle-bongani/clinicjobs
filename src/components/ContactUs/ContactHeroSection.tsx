import React from 'react';

const ContactHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="bg-[#F4F4F4] rounded-2xl shadow-sm p-6 md:p-8 anim-card-lift">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-blue-900">Contact </span>
              <span className="text-red-700">Us</span>
            </h1>
          </div>
          <div className="mt-4 rounded-2xl overflow-hidden">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/Contact Us.png'}
              alt="Person on the phone taking notes at a desk"
              className="w-full h-[360px] md:h-[460px] lg:h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
