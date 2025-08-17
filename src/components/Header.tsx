import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Visa Interview Coaching', path: '/visa-interview-coaching' },
  { name: 'CV Writing', path: '/cv-writing' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <header className="bg-white shadow-none sticky top-0 z-50">
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
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none ${open ? 'invisible' : ''}`}
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

        {/* Mobile sidebar (drawer) */}
        <div className={`md:hidden fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setOpen(false)}
          />
          {/* Sidebar */}
          <aside
            className={`absolute left-0 top-0 h-full w-72 max-w-[80vw] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <img
                src={process.env.PUBLIC_URL + '/images/logos/Jordans CV Careers & Visas Logo.svg'}
                alt="Jordan CV Careers & Visas"
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-6">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-md px-5 py-4 ${
                          isActive
                            ? 'text-blue-800 bg-blue-50 font-semibold'
                            : 'text-gray-800 hover:text-blue-800 hover:bg-slate-50 transition-colors'
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
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Header;
