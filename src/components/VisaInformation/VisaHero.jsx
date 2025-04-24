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
    <section
      id="visa-hero"
      className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <FadeInOnView>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("visaHero.title")}
            </h1>
          </FadeInOnView>

          <FadeInOnView delay={0.2}>
            <p className="text-xl max-w-3xl mx-auto">
              {t("visaHero.subtitle")}
            </p>
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
};

export default VisaHero;
