import React from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const aboutHeading = (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
    <span className="text-black">About </span>
    <span className="text-red-700">Us</span>
  </h2>
);

const HomeAboutSection: React.FC = () => (
  <section className="w-full py-12 bg-white">
    <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Left: Main Image */}
      <div className="flex-1 flex justify-center">
        <img src={process.env.PUBLIC_URL + '/images/pics/homeaboutus.jpg'} alt="About Us" className="rounded-2xl w-full max-w-2xl object-cover" />
      </div>
      {/* Right: Content with World Map BG */}
      <div className="flex-1 flex flex-col items-center relative">
        {/* World map bg */}
        <img src={process.env.PUBLIC_URL + '/images/pics/aboutusglobe.jpg'} alt="Globe" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto max-w-lg opacity-20 pointer-events-none select-none z-0" style={{maxHeight:220}} />
        <div className="relative z-10 flex flex-col items-center w-full px-2 md:px-0">
          {aboutHeading}
          <p className="text-center text-gray-800 max-w-xl mb-4">
            We’re a passionate team committed to making your international adventure smoother, smarter, and stress-free. We understand the challenges of relocating and are here to provide practical tools and expert support every step of the way.
          </p>
          <div className="flex justify-center my-4">
            <div className="bg-blue-900 rounded-xl flex items-center justify-center w-16 h-16">
              <VisibilityIcon sx={{ fontSize: 38, color: 'white' }} />
            </div>
          </div>
          <p className="text-center text-gray-800 max-w-xl mb-6">
            To be the leading platform for career-driven migration, helping anyone, regardless of background, find the support and resources to thrive abroad. We believe borders shouldn’t block potential.
          </p>
          <div className="flex items-center gap-8 mt-2">
            <Link to="/contact-us" className="bg-blue-900 text-white rounded-full px-8 py-2 font-semibold text-base shadow">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeAboutSection;
