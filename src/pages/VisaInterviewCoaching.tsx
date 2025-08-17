import React from 'react';
import VisaInterviewHeroSection from '../components/VisaInterviewCoaching/VisaInterviewHeroSection';
import PackageSection from '../components/VisaInterviewCoaching/PackageSection';
import BundleSection from '../components/VisaInterviewCoaching/BundleSection';
import PremiumSection from '../components/VisaInterviewCoaching/PremiumSection';

const VisaInterviewCoaching: React.FC = () => (
  <div className="bg-white">
    <VisaInterviewHeroSection />
    <PackageSection />
    <BundleSection />
    <PremiumSection />
  </div>
);

export default VisaInterviewCoaching;
