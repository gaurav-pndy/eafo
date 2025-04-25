import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-blue-900 hover:text-blue-700 font-bold cursor-pointer inline-flex items-center">
                    {t("evisa.viewAll")}{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </DialogTrigger>
                <DialogContent className="md:w-[60vw] !max-w-none border-2 border-blue-700">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">
                      {t(
                        "evisa.modalTitle",
                        "List of Countries, where Citizens can visit Russian Federation with an E-Visa"
                      )}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-lg max-h-[60vh] text-gray-700 leading-relaxed mt-4 whitespace-pre-wrap">
                    {eVisaFullList}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default EVisaCountries;
