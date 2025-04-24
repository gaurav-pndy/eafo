import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { IoArrowForwardCircle, IoClose } from "react-icons/io5";

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

const VisaFreeCountries = () => {
  const { t } = useTranslation();
  const [modalContent, setModalContent] = useState(null);

  const countries90Days = [
    { key: "argentina" },
    { key: "brazil" },
    { key: "chile" },
  ];
  const countries30Days = [
    { key: "bosnia" },
    { key: "macedonia" },
    { key: "montenegro" },
  ];
  const countries14Days = [
    { key: "maldives" },
    { key: "nepal" },
    { key: "bhutan" },
  ];

  const openModal = (title) => setModalContent(title);
  const closeModal = () => setModalContent(null);

  const renderCountryList = (countries, baseKey) =>
    countries.map((country, index) => (
      <motion.li
        key={country.key}
        className="flex items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <FontAwesomeIcon icon={faCircleCheck} className="text-blue-900 mr-3" />
        <span>{t(`${baseKey}.${country.key}`)}</span>
      </motion.li>
    ));

  return (
    <section id="visa-free-countries" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInOnView>
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("visaFree.title")}
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 90-Day Stay */}
            <FadeInOnView delay={0.2}>
              <div
                onClick={() => openModal(t("visaFree.heading"))}
                className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">
                  {t("visaFree.stay90Days")}
                </h3>
                <ul className="space-y-2">
                  {renderCountryList(countries90Days, "visaFree.countries90")}
                </ul>
                <button
                  onClick={() => openModal(t("visaFree.stay90Days"))}
                  className="mt-4 text-blue-700 flex items-center gap-2 cursor-pointer"
                >
                  {t("visaFree.seeMore")}{" "}
                  <IoArrowForwardCircle className="text-lg" />
                </button>
              </div>
            </FadeInOnView>

            {/* 30-Day Stay */}
            <FadeInOnView delay={0.4}>
              <div
                onClick={() => openModal(t("visaFree.heading"))}
                className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">
                  {t("visaFree.stay30Days")}
                </h3>
                <ul className="space-y-2">
                  {renderCountryList(countries30Days, "visaFree.countries30")}
                </ul>
                <button className="mt-4 text-blue-700 flex items-center gap-2 cursor-pointer">
                  {t("visaFree.seeMore")}
                  <IoArrowForwardCircle className="text-lg" />
                </button>
              </div>
            </FadeInOnView>

            {/* 14-Day Stay */}
            <FadeInOnView delay={0.6}>
              <div
                onClick={() => openModal(t("visaFree.heading"))}
                className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">
                  {t("visaFree.stay14Days")}
                </h3>
                <ul className="space-y-2">
                  {renderCountryList(countries14Days, "visaFree.countries14")}
                </ul>
                <button className="mt-4 text-blue-700 flex items-center gap-2 cursor-pointer">
                  {t("visaFree.seeMore")}
                  <IoArrowForwardCircle className="text-lg" />
                </button>
              </div>
            </FadeInOnView>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            {/* Close Icon Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              <IoClose />
            </button>

            <h4 className="text-xl font-bold mb-4 text-center">
              {modalContent}
            </h4>
            <ul className="text-sm text-gray-700 text-left list-disc list-inside mb-4 space-y-1 max-h-80 overflow-y-auto pr-2">
              {t("visaFree.moreInfoPoints", { returnObjects: true }).map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default VisaFreeCountries;
