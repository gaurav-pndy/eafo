import React from "react";

// Components

import HeroSection from "../components/Courses/HeroSection";
import CTASection from "../components/Courses/CTASection";
import StructureSection from "../components/Courses/StructureSection";
import StatsGrid from "../components/Courses/StatsGrid";
import OverviewSection from "../components/Courses/OverviewSection";
import FeaturesGrid from "../components/Courses/FeaturesGrid";

const CoursesPage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <StructureSection />
      <CTASection />
    </>
  );
};

export default CoursesPage;
