import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
  const { i18n, t } = useTranslation();

  return (
    <section
      className="relative   w-full h-[60vh] lg:h-[calc(100vh-5.5rem)] flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/uxpilot-auth.appspot.com/dfdeaff2e4-f8782245060f665759be.png)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#002379]/70 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-3xl mb-4">{t("hero.subtitle")}</p>
        <p className="text-sm md:text-xl mb-2">J{t("hero.dates")}</p>
        <p className="text-sm md:text-xl mb-8">{t("hero.location")}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-white text-[#002379] px-8 hover:bg-transparent hover:text-white border border-white  py-3 rounded-full font-semibold transition-all duration-300"
          >
            {t("hero.register")}
          </Link>
          <Link
            to="/about"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#002379] transition-all duration-300"
          >
            {t("hero.course")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
