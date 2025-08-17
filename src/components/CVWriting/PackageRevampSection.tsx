import React from 'react';

const PackageRevampSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/Cvupdatepackage.png'}
              alt="Professional discussing CV update"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text content */}
          <div className="md:mt-[63px] lg:mt-[127px] xl:mt-[159px]">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">CV Update and Revamp Package</h2>
            <div className="mt-2 text-lg font-semibold text-slate-800">Price: £79.99</div>

            <p className="mt-4 text-slate-600">
              This service is ideal if your CV is in need of updating and reformatting to optimize your job search and increase interview callbacks.
            </p>

            <div className="mt-6">
              <div className="text-slate-900 font-bold tracking-wide">WHAT IS INCLUDED:</div>
              <ul className="mt-3 space-y-2 list-disc pl-8 text-slate-700">
                <li>Enhance your CV for content, design, and formatting.</li>
                <li>A 30-minute 1-to-1 with a career coach.</li>
                <li>Restructure your CV to optimize keywords and technical skills, and enrich your personal career journey.</li>
                <li>LinkedIn assessment to boost your professional social media impact.</li>
              </ul>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-900 text-white px-6 py-3 hover:bg-blue-950"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageRevampSection;
