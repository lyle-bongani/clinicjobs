import React, { useState } from 'react';

const flags = [
  {
    name: 'Belgium',
    img: 'https://flagcdn.com/be.svg',
    style: 'top-8 -left-8',
  },
  {
    name: 'Canada',
    img: 'https://flagcdn.com/ca.svg',
    style: 'top-10 right-4 md:-right-10',
  },
  {
    name: 'UK',
    img: 'https://flagcdn.com/gb.svg',
    style: 'right-4 md:-right-10 top-1/2 translate-y-6',
  },
  {
    name: 'South Africa',
    img: 'https://flagcdn.com/za.svg',
    style: 'bottom-6 left-4 md:-left-10',
  },
  {
    name: 'India',
    img: 'https://flagcdn.com/in.svg',
    style: 'left-10 top-1/2 -translate-y-1/2',
  },
  {
    name: 'United States of America (USA)',
    img: 'https://flagcdn.com/us.svg',
    style: 'top-24 right-6',
  },
  {
    name: 'Australia',
    img: 'https://flagcdn.com/au.svg',
    style: 'bottom-6 right-6',
  },
  {
    name: 'New Zealand',
    img: 'https://flagcdn.com/nz.svg',
    style: 'bottom-24 right-10',
  },
  {
    name: 'Germany',
    img: 'https://flagcdn.com/de.svg',
    style: 'top-14 left-20',
  },
  {
    name: 'The Netherlands',
    img: 'https://flagcdn.com/nl.svg',
    style: 'top-1/2 left-1/2 -translate-x-1/2 translate-y-[81px]',
  },
  {
    name: 'Denmark',
    img: 'https://flagcdn.com/dk.svg',
    style: 'bottom-4 left-1/2 -translate-x-1/2',
  },
  {
    name: 'Malta',
    img: 'https://flagcdn.com/mt.svg',
    style: 'bottom-28 left-20',
  },
  {
    name: 'Switzerland',
    img: 'https://flagcdn.com/ch.svg',
    style: 'top-44 left-2',
  },
  {
    name: 'Luxembourg',
    img: 'https://flagcdn.com/lu.svg',
    style: 'top-40 -right-10',
  },
];

const HomeHero: React.FC = () => {
  // Form state carried to Contact page via router state
  const [fromCountry, setFromCountry] = useState<string>('');
  const [toCountry, setToCountry] = useState<string>('');

  const [showModal, setShowModal] = useState(false);
  const [inquiryType, setInquiryType] = useState<'Visa Clinic' | 'Consultation' | ''>('');
  const openModal = (type: 'Visa Clinic' | 'Consultation') => {
    setInquiryType(type);
    setShowModal(true);
  };

  return (
    <section className="w-full py-0 sm:py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text & Form */}
        <div className="flex-1 max-w-2xl text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
            <span className="text-red-600">Visa Support Made Simple<br className='hidden sm:block'/>From Short Trips to</span>
            <br/>
            <span className="text-blue-800">Relocation</span>
          </h1>
          <p className="text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Your journey abroad starts here! We specialize in helping you prepare to travel,
            work, or relocate globally.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5 md:mb-8">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Applying from?</label>
              <div className="relative">
                <select value={fromCountry} onChange={(e) => setFromCountry(e.target.value)} className="rounded-full pl-4 pr-12 h-12 w-full bg-white text-slate-900 border border-slate-300 shadow-sm hover:border-blue-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-200/60 transition-all duration-200 ease-out appearance-none">
                  <option value="" disabled>Select</option>
                  <option>United Kingdom</option>
                  <option>United States of America (USA)</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                  <option>Germany</option>
                  <option>The Netherlands</option>
                  <option>Denmark</option>
                  <option>Malta</option>
                  <option>Switzerland</option>
                  <option>Luxembourg</option>
                  <option>Zimbabwe</option>
                  <option>Other Oceanian co</option>
                </select>
                <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Going to?</label>
              <div className="relative">
                <select value={toCountry} onChange={(e) => setToCountry(e.target.value)} className="rounded-full pl-4 pr-12 h-12 w-full bg-white text-slate-900 border border-slate-300 shadow-sm hover:border-blue-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-200/60 transition-all duration-200 ease-out appearance-none">
                  <option value="" disabled>Select</option>
                  <option>United Kingdom</option>
                  <option>United States of America (USA)</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                  <option>Germany</option>
                  <option>The Netherlands</option>
                  <option>Denmark</option>
                  <option>Malta</option>
                  <option>Switzerland</option>
                  <option>Luxembourg</option>
                  <option>Zimbabwe</option>
                  <option>Other Oceanian co</option>
                </select>
                <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </form>
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto sm:justify-start">
            <button onClick={() => openModal('Visa Clinic')} className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold w-full sm:w-auto text-center" aria-label="Open form: Visa Clinic">Get - Visa Clinic</button>
            <button onClick={() => openModal('Consultation')} className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold w-full sm:w-auto text-center" aria-label="Open form: Consultation">Get a Consultation</button>
          </div>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
              <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-900">Quick Request</h4>
                  <button onClick={() => setShowModal(false)} aria-label="Close" className="text-slate-600 hover:text-slate-900">✕</button>
                </div>
                <p className="text-sm text-slate-600 mb-4">We will contact you at the email you provide.</p>
                <form action="https://formsubmit.co/admin@edenhealthcarerecruitment.co.uk" method="POST" className="space-y-4">
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="fromCountry" value={fromCountry} />
                  <input type="hidden" name="toCountry" value={toCountry} />
                  <input type="hidden" name="inquiryType" value={inquiryType} />
                  <input type="hidden" name="_subject" value={`${inquiryType ? inquiryType + ' - ' : ''}${fromCountry || ''} to ${toCountry || ''} Request`} />
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
        {/* Right: Hero Image & Flags */}
        <div className="flex-1 relative flex items-center justify-center w-full order-1 md:order-2">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-none md:w-[520px] h-[90vh]">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
              <img src={process.env.PUBLIC_URL + '/images/pics/home-hero.jpg'} alt="Visa Support" className="w-full h-full object-cover" />
            </div>
            {/* Flags (outside the overflow-hidden box) */}
            {flags.map(flag => (
              <div
                key={flag.name}
                className={`absolute flex items-center gap-2 bg-white rounded-full ring-2 ring-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] px-3 py-2 sm:px-3 sm:py-2 text-xs sm:text-xs font-semibold cursor-default md:cursor-pointer transition-transform duration-200 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] ${flag.style}`}
                style={{ zIndex: 2 }}
              >
                <img src={flag.img} alt={flag.name} className="w-6 h-6 sm:w-5 sm:h-5 rounded-full border ring-2 ring-white" />
                <span>{flag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
