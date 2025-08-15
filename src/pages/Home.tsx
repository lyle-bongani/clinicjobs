import React from 'react';

import HomeHero from '../components/Home/HomeHero';
import HomeWhatWeOffer from '../components/Home/HomeWhatWeOffer';
import HomeAboutSection from '../components/Home/HomeAboutSection';
import HomeWhyChooseUs from '../components/Home/HomeWhyChooseUs';
import HomeWeAssistWith from '../components/Home/HomeWeAssistWith';
import HomeOurServices from '../components/Home/HomeOurServices';

const Home: React.FC = () => (
  <>
    <HomeHero />
    <HomeWhatWeOffer />
    <HomeAboutSection />
    <HomeWhyChooseUs />
    <HomeWeAssistWith />
    <HomeOurServices />
  </>
);

export default Home;
