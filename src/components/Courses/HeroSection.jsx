import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="awards-hero" className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://static.wixstatic.com/media/df6cc5_fcedfd243b464b3cad96ae934ddb1fba~mv2.jpg"
          alt="Courses Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {" "}
            {t("courses.heroTitle")}
          </h1>
          <p className="text-xl text-blue-100">{t("courses.heroSubtitle")}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
