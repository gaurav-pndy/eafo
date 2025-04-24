import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const EVisaCountries = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const countryCodes = ["austria", "belgium", "china", "denmark"];

  const eVisaFullList = `Austria, Andorra, Bahrain, Belgium, Bulgaria, Vatican City, Hungary, Germany, Greece, Denmark, India, Indonesia, Iran, Ireland, Iceland, Spain, Italy, Cyprus, China (including Taiwan), Democratic People's Republic of Korea, Kuwait, Latvia, Lithuania, Liechtenstein, Luxembourg, Malaysia, Malta, Mexico, Monaco, Netherlands, Norway, Oman, Poland, Portugal, Romania, San Marino, Saudi Arabia, North Macedonia, Serbia, Singapore, Slovakia, Slovenia, Turkey, Philippines, Finland, France, Croatia, Czech Republic, Switzerland, Sweden, Estonia, Japan.`;

  return (
    <>
      <motion.section
        id="e-visa-countries"
        className="py-16 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("evisa.title")}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {countryCodes.map((countryCode, index) => (
                <motion.div
                  key={countryCode}
                  className="bg-white p-4 rounded-lg text-center"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {t(`evisa.countries.${countryCode}`)}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <span
                onClick={() => setShowModal(true)}
                className="text-blue-900 hover:text-blue-700 font-bold cursor-pointer inline-flex items-center"
              >
                {t("evisa.viewAll")}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              <IoClose />
            </button>
            <h3 className="text-xl font-bold mb-4 mt-5 text-center">
              {t(
                "evisa.modalTitle",
                "List of Countries, where Citizens can visit Russian Federation with an E-Visa"
              )}
            </h3>
            <div className="max-h-64 overflow-y-auto text-sm text-gray-700 leading-relaxed">
              {eVisaFullList}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EVisaCountries;
