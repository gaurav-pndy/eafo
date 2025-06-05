import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const FadeInOnView = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const VisaHero = () => {
  const { t } = useTranslation();

  return (
    <section id="awards-hero" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://static.wixstatic.com/media/df6cc5_755f2f7f3c2a44a7b66b19a3ccf73461~mv2.jpg"
          alt="Visa Information Hero Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {" "}
            {t("visaHero.title")}
          </h1>
          <p className="text-3xl text-blue-100">{t("visaHero.subtitle")}</p>
        </div>
      </div>
    </section>
  );
};

export default VisaHero;
