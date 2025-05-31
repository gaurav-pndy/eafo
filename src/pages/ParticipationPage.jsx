import Packages from "@/components/Participation/Packages";
import ComparisonTable from "../components/Participation/ComparisonTable";
import CtaSection from "../components/Participation/CtaSection";
import HeroSection from "../components/Participation/HeroSection";
import OptionsGrid from "../components/Participation/OptionsGrid";
import React from "react";
import Categories from "@/components/Participation/Categories";
import ParticipationTabs from "@/components/Participation/ParticipationTabs";

const ParticipationPage = () => {
  return (
    <div className="h-full text-base-content">
      {/* <HeroSection /> */}
      <section id="participation-options" className="py-16 bg-white">
        <ParticipationTabs />
        {/* <OptionsGrid />
        <Packages />
        <Categories /> */}
        {/* <ComparisonTable /> */}
      </section>
      {/* <CtaSection /> */}
    </div>
  );
};

export default ParticipationPage;
