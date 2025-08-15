import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Services', path: '/our-services' },
  { name: 'Uk Visa Services', path: '/uk-visa-services' },
  { name: 'Visa Interview Coaching', path: '/visa-interview-coaching' },
  { name: 'CV Writing', path: '/cv-writing' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center py-3 px-4">
        <img src={process.env.PUBLIC_URL + '/images/logos/headerlogo.png'} alt="Jordan CV Careers & Visas" className="h-14 w-auto object-contain mr-6" />
        <nav className="flex-1">
          <ul className="flex space-x-6 justify-end items-center">
            {navLinks.map(link => (
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
      </div>
    </header>
  );
};

export default Header;
