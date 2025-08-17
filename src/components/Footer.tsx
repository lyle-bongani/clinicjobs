import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#AEB1B7] text-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Top band: centered logo and responsive socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Left placeholder to perfectly center the logo vs socials width (hide on small) */}
          <div className="hidden sm:block shrink-0" style={{ width: '196px' }} />
          <div className="flex justify-center flex-1">
            <img
              src={process.env.PUBLIC_URL + '/images/logos/footer-logo.png'}
              alt="The CV, Job Hunting & Visa Clinic"
              className="h-20 w-auto object-contain grayscale"
            />
          </div>
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
            <button type="button" aria-label="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-red-600 flex items-center justify-center hover:opacity-90">
              <FacebookIcon fontSize="small" />
            </button>
            <button type="button" aria-label="Instagram" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-red-600 flex items-center justify-center hover:opacity-90">
              <InstagramIcon fontSize="small" />
            </button>
            <button type="button" aria-label="X" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-red-600 flex items-center justify-center hover:opacity-90">
              <XIcon fontSize="small" />
            </button>
            <button type="button" aria-label="TikTok" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-red-600 flex items-center justify-center hover:opacity-90">
              <MusicNoteIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-white/30" />

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Address */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Address</h3>
            <p className="text-gray-200/90 leading-relaxed">
              74 Turton Close
              <br />
              Walsall
              <br />
              WS3 3XY
              <br />
              West Midlands
              <br />
              United Kingdom
            </p>
            <p className="mt-3">
              <a href="mailto:admin@edenhealthcarerecruitment.co.uk" className="hover:text-white underline underline-offset-4">
                admin@edenhealthcarerecruitment.co.uk
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button type="button" className="hover:text-white">Privacy Policy</button></li>
              <li><button type="button" className="hover:text-white">Terms of Service</button></li>
              <li><button type="button" className="hover:text-white">Disclaimer</button></li>
              <li><button type="button" className="hover:text-white">Credits</button></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
              <li><NavLink to="/about-us" className="hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/contact-us" className="hover:text-white">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-200/90 mb-3">Get exclusive news by signing up to our Newsletter.</p>
            <form action="https://formsubmit.co/admin@edenhealthcarerecruitment.co.uk" method="POST" className="flex flex-col gap-3 max-w-sm">
              {/* FormSubmit controls */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="Newsletter Signup" />
              <input type="hidden" name="source" value="Footer Newsletter" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                required
                className="bg-white rounded-full px-4 py-2 text-gray-700 placeholder-gray-400 outline-none"
              />
              <button type="submit" className="bg-red-600 text-white rounded-full px-5 py-2 inline-flex items-center justify-center gap-2 hover:bg-red-700">
                <MailOutlineIcon fontSize="small" />
                <span>Sign Up</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-10 border-t border-white/30" />

        {/* Copyright */}
        <div className="text-center text-gray-200 mt-4">
          Copyright © 2025, All rights reserved. designed by{' '}
          <a href="https://www.spemedia.co.zw/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">SpeMedia</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
