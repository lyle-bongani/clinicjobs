import React from 'react';

const CVHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
              Professional CV Writing
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Get a polished, ATS-friendly CV that highlights your strengths and wins you more interviews.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#packages" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700">View Packages</a>
              <a href="#process" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-50">Our Process</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/cv-hero.png'}
              alt="CV Writing"
              className="w-full max-w-md object-contain"
              onError={(e: any) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVHero;
