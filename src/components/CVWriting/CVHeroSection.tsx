import React from 'react';

const CVHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Outer light card */}
        <div className="bg-slate-50 rounded-2xl shadow-sm px-4 py-6 md:px-6 md:py-8">
          {/* Headline */}
          <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-red-700">CV</span>{' '}
            <span className="text-blue-900">Writing</span>
          </h1>

          {/* Subheading */}
          <p className="text-center text-slate-900 font-semibold text-lg md:text-xl mt-2">
            Stand Out From the Crowd. Secure Your Dream Job.
          </p>

          {/* Body copy */}
          <p className="text-center text-slate-600 text-sm md:text-base mt-3 max-w-3xl mx-auto leading-relaxed">
            Recruiters and Hiring Managers often have hundreds of CVs to sift through. Ensuring your CV represents you to the
            best standard is essential if you want to stand out from the crowd and turn that job application into an interview.
          </p>

          {/* Image (fixed height, full width, crops vertically) */}
          <div className="mt-6 md:mt-8 rounded-xl overflow-hidden h-72 md:h-[520px]">
            <img
              src={process.env.PUBLIC_URL + '/images/pics/cvhero.jpg'}
              alt="Person preparing a CV on a laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVHeroSection;
