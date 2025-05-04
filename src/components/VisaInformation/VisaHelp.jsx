import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// Reusable fade-in animation component
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

const VisaHelp = () => {
  const { t } = useTranslation();

  return (
    <section id="visa-help" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnView>
            <h2 className="text-3xl font-bold mb-8">{t("visaHelp.title")}</h2>
          </FadeInOnView>

          <FadeInOnView delay={0.2}>
            <p className="text-xl mb-8">{t("visaHelp.description")}</p>
          </FadeInOnView>

          <FadeInOnView delay={0.4}>
            <Link to={"/contact-us"}>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-100 transition duration-300">
                {t("visaHelp.contactSupport")}
              </button>
            </Link>
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
};

export default VisaHelp;
