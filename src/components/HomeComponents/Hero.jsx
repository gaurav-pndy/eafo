import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PreRegisterForm from "../PreRegisterForm";

const Hero = () => {
  const { i18n, t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full lg:max-h-[calc(100vh-5.5rem)] bg-[#f2f3f8] flex flex-col"
    >
      {/* Main container with background image on right for desktop */}
      <div className="w-full min-h-[auto] lg:max-h-[calc(100vh-5.5rem)]  relative flex flex-col-reverse lg:flex-row  overflow-hidden lg:px-10 lg:gap-6 xl:gap-0 xl:px-32 lg:py-16 xl:py-6 ">
        {/* Left side - Content section */}
        <div className="w-full lg:w-[55%] px-4 md:px-10 lg:px-0 py-6 md:py-10 flex flex-col text-center lg:text-left justify-center">
          {/* Red header */}
          <div className="lg:mb-2">
            <p className="text-[#9a0002] font-bold text-lg md:text-3xl lg:text-5xl ">
              {t("heroSection.title1")}
            </p>
          </div>

          {/* Main title */}
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold text-[#001554] lg:mb-4">
            {t("heroSection.subtitle")}
          </h1>

          {/* Subtitle with specializations */}
          <h2 className=" md:text-2xl lg:text-4xl text-[#2b3370] lg:mb-4">
            {" "}
            {t("heroSection.subtitle2")}
          </h2>

          <p
            className="text-xs md:text-base lg:text-xl text-[#010b54] lg:mb-4"
            dangerouslySetInnerHTML={{ __html: t("heroSection.subtitle3") }}
          />

          <p className="text-lg md:text-2xl lg:text-3xl font-[800] text-[#a21a1c] ">
            {t("heroSection.dates")}
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-[800] text-[#001353] mb-2">
            {t("heroSection.location")}
          </p>

          <h2 className="text-xs md:text-base text-[#010b54] mb-4 lg:mb-8" dangerouslySetInnerHTML={{ __html: t("heroSection.subtitle4") }}>
            
          </h2>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start ">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#8B0000] text-white px-20 cursor-pointer py-2 rounded-full font-semibold hover:bg-[#A00000] transition-all duration-300 text-lg"
            >
              Подать заявку
            </button>
          </div>
        </div>

        {/* Right side - Image section (hidden on mobile, visible on desktop) */}
        <div className="hidden lg:block lg:w-[45%] relative ">
          <div className="h-full w-full overflow-hidden flex justify-end">
            <img
              src="/hero-image.jpg"
              alt="City view"
              className="w-[26rem] xl:w-[32rem] h-full rounded-3xl  object-cover"
            />
          </div>
        </div>

        {/* Mobile image section - full width below content */}
        <div className="lg:hidden w-full h-64 md:h-96 relative ">
          <div className="h-full w-full ">
            <img
              src="/hero-image.jpg"
              alt="City view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </motion.section>
  );
};

export default Hero;
