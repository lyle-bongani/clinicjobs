import React, { useState } from 'react';

const PackageSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const packageName = 'Visa Interview Coaching Package';
  const price = '£129.99';

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/Visa Interview Coaching Package.png'}
              alt="Client receiving visa interview coaching"
              className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-end min-h-[420px] md:min-h-[480px] lg:min-h-[520px] pb-3 md:pb-4 lg:pb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Visa Interview Coaching Package</h2>
            <div className="mt-2 text-lg font-semibold text-slate-800">Price: £129.99</div>

            <p className="mt-4 text-slate-600 max-w-prose">
              Receive personalized interview coaching from a recruitment expert to ensure you are prepared to perform your best at the interview stage of your visa application.
            </p>

            <div className="mt-6">
              <div className="text-slate-900 font-bold tracking-wide uppercase">What is included:</div>
              <ul className="mt-3 space-y-2 list-disc pl-8 text-slate-700 text-sm">
                <li>A 1-hour video meeting with an expert.</li>
                <li>Detailed analysis of visa interview styles and common questions.</li>
                <li>A tailored approach to address any key issues or concerns with interview processes, techniques, and presentation.</li>
              </ul>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-blue-900 text-white px-5 py-2.5 text-sm hover:bg-blue-950"
              onClick={() => setShowModal(true)}
            >
              Enquire Now
            </button>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
                <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-blue-900">{packageName}</h4>
                    <button onClick={() => setShowModal(false)} aria-label="Close" className="text-slate-600 hover:text-slate-900">✕</button>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">Price: {price}. Enter your email and we will contact you.</p>
                  <form action="https://formsubmit.co/admin@edenhealthcarerecruitment.co.uk" method="POST" className="space-y-4">
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                    <input type="hidden" name="service" value={packageName} />
                    <input type="hidden" name="price" value={price} />
                    <input type="hidden" name="section" value="Visa Interview Coaching" />
                    <input type="hidden" name="_subject" value={`${packageName} - ${price} Enquiry`} />
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                      <input name="email" type="email" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none" placeholder="you@example.com" />
                    </div>
                    <button type="submit" className="w-full rounded-full bg-blue-900 text-white px-6 py-3 hover:bg-blue-950">Send</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
