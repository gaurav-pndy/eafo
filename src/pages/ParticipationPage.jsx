import ComparisonTable from "../components/Participation/ComparisonTable";
import CtaSection from "../components/Participation/CtaSection";
import HeroSection from "../components/Participation/HeroSection";
import OptionsGrid from "../components/Participation/OptionsGrid";
import React from "react";

const ParticipationPage = () => {
  return (
    <div className="h-full text-base-content">
      <HeroSection />
      <section id="participation-options" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <OptionsGrid />
            <ComparisonTable />
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
};

export default ParticipationPage;
