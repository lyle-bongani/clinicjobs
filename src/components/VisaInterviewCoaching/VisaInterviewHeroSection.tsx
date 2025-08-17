import React from 'react';

const VisaInterviewHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Outer card */}
        <div className="bg-slate-50 rounded-2xl shadow-sm p-6 md:p-8">
          {/* Headings */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              <span className="text-red-700">Visa Interview </span>
              <span className="text-blue-900">Coaching</span>
            </h1>

            <h2 className="mt-3 text-base md:text-lg font-semibold text-slate-900">
              Navigate Your Path to the UK with Confidence.
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-xs md:text-sm">
              Our expert-led coaching prepares you for success in every critical visa interview—whether it is for study, dependent, or work purposes. We provide a tailored approach to ensure you are confident and ready to secure your visa.
            </p>
          </div>

          {/* Hero image */}
          <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/Visa Interview Coaching hero.png'}
              alt="People in a coaching session discussing visa interview preparation"
              className="w-full h-[420px] md:h-[500px] lg:h-[560px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInterviewHeroSection;
