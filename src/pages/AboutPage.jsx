import AboutDetails from '@/components/AboutUs/AboutDetails';
import AboutHero from '@/components/AboutUs/AboutHero';
import ContactCTA from '@/components/AboutUs/ContactCTA';
import Mission from '@/components/AboutUs/Mission';
import Team from '@/components/AboutUs/Team';
import VideoShowcase from '@/components/AboutUs/VideoShowcase';
import WhatWeDo from '@/components/AboutUs/WhatWeDo';
import React from 'react';

// Components


const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <AboutDetails />
      <WhatWeDo />
      <VideoShowcase />
      <Team />
      <ContactCTA />
    </>
  );
};

export default AboutPage;
