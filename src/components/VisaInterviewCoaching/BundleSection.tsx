import React from 'react';

const BundleSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="bg-[#F4F4F4] rounded-2xl shadow-sm p-6 md:p-8 anim-card-lift">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Text */}
          <div className="flex flex-col justify-center pt-4 md:pt-6 lg:pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Customised Visa Interview Coaching Bundle</h2>
            <div className="mt-2 text-lg font-semibold text-slate-800">Price: £199</div>

            <p className="mt-4 text-slate-600 max-w-prose">
              Perfect if you desire more in-depth personalized interview coaching and preparation for your visa application.
            </p>

            <div className="mt-6">
              <div className="text-slate-900 font-bold tracking-wide uppercase">What is included:</div>
              <ul className="mt-3 space-y-2 list-disc pl-8 text-slate-700 text-sm">
                <li>A 1-hour video meeting with an expert.</li>
                <li>Mock visa interview simulation centered around your specific visa type and application, with a detailed feedback session.</li>
                <li>A 30-minute 1-to-1 coaching consultation ahead of your official interview to support you on how to present your best self.</li>
              </ul>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-blue-900 text-white px-5 py-2.5 text-sm hover:bg-blue-950"
            >
              Enquire Now
            </button>
          </div>

          {/* Right: Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/Customised Visa Interview Coaching Bundle.png'}
              alt="Customised visa interview coaching bundle session"
              className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleSection;
