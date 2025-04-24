import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPassport,
  faMobileScreen,
  faStamp,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

// Reusable animation wrapper
const FadeInOnView = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const VisaOptions = () => {
  const { t } = useTranslation();

  const options = [
    {
      icon: faPassport,
      titleKey: "visaOptions.visaFree.title",
      descKey: "visaOptions.visaFree.description",
    },
    {
      icon: faMobileScreen,
      titleKey: "visaOptions.eVisa.title",
      descKey: "visaOptions.eVisa.description",
    },
    {
      icon: faStamp,
      titleKey: "visaOptions.physicalVisa.title",
      descKey: "visaOptions.physicalVisa.description",
    },
  ];

  return (
    <section id="visa-options" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInOnView>
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("visaOptions.title")}
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {options.map((option, index) => (
              <FadeInOnView key={index} delay={index * 0.2}>
                <div
                  className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-900 flex flex-col justify-between"
                  style={{ minHeight: "230px", overflow: "hidden" }} // Set a fixed height and overflow control
                >
                  <div className="text-blue-900 text-3xl mb-4">
                    <FontAwesomeIcon icon={option.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t(option.titleKey)}
                  </h3>
                  <p className="text-gray-600">{t(option.descKey)}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaOptions;
