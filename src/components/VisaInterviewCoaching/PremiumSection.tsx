import React from 'react';

const PremiumSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + '/images/pics/Premium Visa Interview Support.png'}
                alt="Premium visa interview support coaching session"
                className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover"
              />
            </div>

            {/* Right: Text */}
            <div className="flex flex-col justify-end min-h-[420px] md:min-h-[480px] lg:min-h-[520px] pb-3 md:pb-4 lg:pb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Premium Visa Interview Support</h2>
              <div className="mt-2 text-lg font-semibold text-slate-900">Introductory Offer: £299</div>

              <p className="mt-4 text-slate-600 max-w-prose">
                We support you 24/7 through the entire visa application and interview process, right to your final outcome.
              </p>

              <div className="mt-6">
                <div className="text-slate-900 font-bold tracking-wide uppercase">What is included:</div>
                <ul className="mt-3 space-y-2 list-disc pl-8 text-slate-700 text-sm">
                  <li>Mock visa interview simulation centered around your specific visa type and application.</li>
                  <li>Four 1-to-1 coaching consultations ahead of your interview.</li>
                  <li>Expert and detailed analysis of interview feedback and mentoring to develop your technique.</li>
                  <li>Coaching through all stages of your application to offer and visa acceptance.</li>
                  <li>24/7 support system available.</li>
                </ul>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-blue-900 text-white px-5 py-2.5 text-sm hover:bg-blue-950"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
