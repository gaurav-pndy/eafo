import React from "react";
import { useTranslation } from "react-i18next";
import { FaLandmark } from "react-icons/fa";

const CultureSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid mb-16 md:grid-cols-2 gap-10" id="section-culture">
      <div className="order-1 md:order-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-4">
          <FaLandmark className=" text-blue-700" />
          {t("aboutCity.culture.title")}
        </h2>
        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
          {t("aboutCity.culture.description1")}
        </p>
        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
          {t("aboutCity.culture.description2")}
        </p>
      </div>
      <div className="flex items-center justify-center order-2 md:order-2">
        <img
          className="w-full h-72 object-cover rounded-xl border border-blue-100 shadow"
          src="/3.jpg"
          alt={t("aboutCity.culture.imageAlt")}
        />
      </div>
    </div>
  );
};

export default CultureSection;
