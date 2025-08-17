import React from 'react';
import AboutHeroSection from '../components/AboutUs/AboutHeroSection';
import AboutCommitmentSection from '../components/AboutUs/AboutCommitmentSection';

const AboutUs: React.FC = () => (
  <div className="bg-white">
    <AboutHeroSection />
    <AboutCommitmentSection />
  </div>
);

export default AboutUs;
