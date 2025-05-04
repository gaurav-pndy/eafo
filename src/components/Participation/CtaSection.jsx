import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PreRegisterForm from "../PreRegisterForm";

const CtaSection = () => {
  const { t } = useTranslation();
  const ctaData = t("participation.cta", { returnObjects: true });
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="participation-cta" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{ctaData.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{ctaData.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {ctaData.buttons.map((button, index) => (
              <button
                onClick={() => setShowForm(true)}
                key={index}
                className={`px-8 py-4 rounded-full transition duration-300 ${
                  button.variant === "primary"
                    ? "bg-blue-900 text-white hover:bg-blue-800"
                    : "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50"
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
        {showForm && (
          <PreRegisterForm
            courseId="67fb8bc722a71bd3d19d580d"
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </section>
  );
};

export default CtaSection;
