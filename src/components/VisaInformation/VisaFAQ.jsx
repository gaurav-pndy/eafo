import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const VisaFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = t("faqVisa.questions", { returnObjects: true });

  return (
    <section id="visa-faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("faqVisa.title")}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold">{faq.question}</span>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={`text-blue-900 transition-transform duration-200 ${
                      activeIndex === index ? "transform rotate-45" : ""
                    }`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaFAQ;
