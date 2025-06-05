import React from "react";
import { useTranslation } from "react-i18next";

const ContactHero = () => {
  const { t } = useTranslation();
  return (
    <section id="awards-hero" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://static.wixstatic.com/media/df6cc5_fa54fa49beb3401a8d02f2dda10a8b04~mv2.jpeg"
          alt="Contact Us Hero Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {" "}
            {t("contactUs.contactTitle")}
          </h1>
          {/* <p className="text-3xl text-blue-100">
            {" "}
            {t("contactUs.contactSubtitle")}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
