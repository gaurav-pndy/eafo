import React from "react";
import { useTranslation } from "react-i18next";

const PartnerGrid = ({ id, titleKey, logos }) => {
  const { t } = useTranslation();

  // Calculate grid classes based on logo count
  const getGridLayoutClasses = () => {
    const count = logos.length;

    if (count === 1) {
      return "grid grid-cols-1 max-w-xs mx-auto";
    } else if (count === 2) {
      return "grid grid-cols-2 sm:grid-cols-2 max-w-2xl mx-auto";
    } else if (count === 3) {
      return "grid grid-cols-2 sm:grid-cols-3 max-w-5xl mx-auto";
    } else if (count === 5) {
      return "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-5xl mx-auto";
    } else {
      return "grid grid-cols-2 md:grid-cols-4";
    }
  };

  return (
    <div id={id} className="space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-5">{t(titleKey)}</h2>
        <div className={`${getGridLayoutClasses()} gap-8`}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white px-4 py-8 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerGrid;
