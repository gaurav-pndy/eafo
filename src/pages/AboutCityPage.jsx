import React from "react";
import CityHero from "../components/AboutCity/CityHero";
import LocationSection from "../components/AboutCity/LocationSection";
import LanguagesReligionSection from "../components/AboutCity/LanguagesReligionSection";
import CultureSection from "../components/AboutCity/CultureSection";
import HowToReachSection from "../components/AboutCity/HowToReachSection";
import CityMapSection from "../components/AboutCity/CityMapSection";

const AboutCityPage = () => {
  return (
    <div>
      <CityHero />
      <main id="about-city-main" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <LocationSection />
          <LanguagesReligionSection />
          <CultureSection />
          <HowToReachSection />
          <CityMapSection />
        </div>
      </main>
    </div>
  );
};

export default AboutCityPage;
