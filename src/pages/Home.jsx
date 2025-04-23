import React from "react";
import Hero from "../components/HomeComponents/Hero";
import AboutSection from "../components/HomeComponents/AboutSection";
import CourseContent from "../components/HomeComponents/CourseContent";
import WhyUs from "../components/HomeComponents/WhyUs";
import Prizes from "../components/HomeComponents/Prizes";
import Outcome from "../components/HomeComponents/Outcome";
import CourseSchedule from "../components/HomeComponents/CourseSchedule";
import FaqSection from "../components/HomeComponents/FaqSection";
import Testimonials from "../components/HomeComponents/Testimonials";
import Partners from "../components/HomeComponents/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <CourseContent />
      <CourseSchedule />
      <WhyUs />
      <Prizes />
      <FaqSection />
      <Testimonials />
      <Partners />
      <Outcome />
    </div>
  );
};

export default Home;
