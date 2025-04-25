import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const { i18n, t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative   w-full h-[60vh] lg:h-[calc(100vh-5.5rem)] flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/uxpilot-auth.appspot.com/dfdeaff2e4-f8782245060f665759be.png)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#002379]/70 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:leading-20">
          {t("hero.title")}
        </h1>
        <p className="text-2xl md:text-4xl font-semibold text-gray-300  mb-8">
          {t("hero.subtitle")}
        </p>

        <p className="text-xl md:text-3xl mb-2">{t("hero.location")}</p>
        <p className="text-xl md:text-3xl mb-8">{t("hero.dates")}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-[#70ad47] text-white px-8 hover:bg-[#4f8c2a]  border border-[#70ad47] md:text-xl  py-3 rounded-full font-semibold transition-all duration-300"
          >
            {t("hero.button")}
          </Link>
          {/* <Link
            to="/about"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#002379] transition-all duration-300"
          >
            {t("hero.course")}
          </Link> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
