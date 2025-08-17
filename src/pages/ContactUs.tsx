import React from 'react';
import ContactHeroSection from '../components/ContactUs/ContactHeroSection';
import ContactMainSection from '../components/ContactUs/ContactMainSection';

const ContactUs: React.FC = () => (
  <div className="bg-white">
    <ContactHeroSection />
    <ContactMainSection />
  </div>
);

export default ContactUs;
