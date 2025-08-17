import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Uk Visa Services', path: '/uk-visa-services' },
  { name: 'Visa Interview Coaching', path: '/visa-interview-coaching' },
  { name: 'CV Writing', path: '/cv-writing' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src={process.env.PUBLIC_URL + '/images/logos/Jordans CV Careers & Visas Logo.svg'}
            alt="Jordan CV Careers & Visas"
            className="h-12 w-auto object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-800 font-semibold border-b-2 border-blue-800 pb-1'
                        : 'text-gray-800 hover:text-blue-800 transition-colors'
                    }
                    end={link.name === 'Home'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${open ? 'hidden' : 'block'}`}
            >
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5H4.5Z" clipRule="evenodd" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 ${open ? 'block' : 'hidden'}`}
            >
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="pt-3">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive
                          ? 'text-blue-800 font-semibold'
                          : 'text-gray-800 hover:text-blue-800 transition-colors'
                      }`
                    }
                    end={link.name === 'Home'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
