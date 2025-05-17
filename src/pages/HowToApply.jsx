import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import PreRegisterForm from "@/components/PreRegisterForm";

const steps = [
  {
    title: "howToApply.step1.title",
    description: "howToApply.step1.description",
  },
  {
    title: "howToApply.step2.title",
    description: "howToApply.step2.description",
  },
  {
    title: "howToApply.step3.title",
    description: "howToApply.step3.description",
  },
  {
    title: "howToApply.step4.title",
    description: "howToApply.step4.description",
  },
  {
    title: "howToApply.step5.title",
    description: "howToApply.step5.description",
  },
  {
    title: "howToApply.step6.title",
    description: "howToApply.step6.description",
  },
  {
    title: "howToApply.step7.title",
    description: "howToApply.step7.description",
  },
];

const HowToApply = () => {
  const { t } = useTranslation();
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-16  px-5">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-16">
        {t("howToApply.title")}
      </h2>

      <div className="relative pl-2 lg:pl-0  ">
        <AnimatePresence>
          {steps
            .slice(0, showAllSteps ? steps.length : 2)
            .map((step, index) => (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                key={index}
                className={`relative pl-8 md:pl-16 pb-10  md:pb-16 border-l-3 ${
                  showAllSteps
                    ? index !== steps.length - 1
                      ? " border-[#1e3a8a]"
                      : " border-transparent"
                    : index !== 1
                    ? " border-[#1e3a8a]"
                    : " border-transparent"
                }  `}
              >
                <div className="absolute w-8 md:w-10 h-8 md:h-10 bg-[#1e3a8a] rounded-full -left-4.5 md:-left-[calc(1.25rem+1px)] top-0" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                  {" "}
                  {t(step.title)}{" "}
                  {index === 0 && (
                    <span
                      onClick={() => setShowForm(true)}
                      className="text-blue-700 cursor-pointer hover:underline "
                    >
                      {t("howToApply.clickHere")}
                    </span>
                  )}
                </h3>

                <div
                  className="text-gray-700 whitespace-pre-line ml-2 md:ml-4"
                  dangerouslySetInnerHTML={{ __html: t(step.description) }}
                ></div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowAllSteps(!showAllSteps)}
          className="mt-8 bg-[#1e3a8a] text-white px-16 py-3 rounded-2xl hover:bg-blue-800 cursor-pointer transition-all text-xl duration-300"
        >
          {showAllSteps
            ? t("howToApply.hideButton")
            : t("howToApply.showButton")}
        </button>
      </div>

      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default HowToApply;
