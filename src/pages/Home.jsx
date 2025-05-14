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
import AboutEAFO from "../components/HomeComponents/AboutEAFO";
import ForumExperts from "../components/HomeComponents/ForumExperts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Timer from "@/components/HomeComponents/Timer";
import WhatAwaitsYou from "@/components/HomeComponents/WhatAwaitsYou";
import ForWhomCourse from "@/components/HomeComponents/ForWhomCourse";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          const offset = 80; // Adjust based on your fixed header height
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <Timer />
      <AboutSection />
      <CourseContent />
      <CourseSchedule />
      {/* <ForumExperts /> */}
      <WhyUs />
      <Prizes />
      <WhatAwaitsYou />
      <ForWhomCourse />
      <FaqSection />
      <Testimonials />

      {/* <Outcome /> */}
      <AboutEAFO />
      <Partners />
    </div>
  );
};

export default Home;
