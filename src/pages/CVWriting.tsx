import React from 'react';
import CVHeroSection from '../components/CVWriting/CVHeroSection';
import PackageRevampSection from '../components/CVWriting/PackageRevampSection';

const CVWriting: React.FC = () => (
  <div className="bg-white">
    <CVHeroSection />
    <PackageRevampSection />
  </div>
);

export default CVWriting;
