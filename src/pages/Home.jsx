import React from "react";
import Hero from "../components/HomeComponents/Hero";
import AboutSection from "../components/HomeComponents/AboutSection";
import CourseContent from "../components/HomeComponents/CourseContent";
import WhyUs from "../components/HomeComponents/WhyUs";
import Prizes from "../components/HomeComponents/Prizes";
import Outcome from "../components/HomeComponents/Outcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <CourseContent />
      <WhyUs />
      <Prizes />
      <Outcome />
    </div>
  );
};

export default Home;
