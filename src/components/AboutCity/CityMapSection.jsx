import React from "react";
import { useTranslation } from "react-i18next";

const CityMapSection = () => {
  const { t } = useTranslation();

  return (
    <section id="city-map-section" className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
        <i className="fa-solid fa-map-location-dot text-blue-700"></i>
        {t("aboutCity.map.title")}
      </h2>
      <div className="rounded-xl overflow-hidden shadow-lg border border-blue-100 h-[400px]">
        <iframe
          className="w-full h-full"
          src="https://yandex.com/map-widget/v1/?ll=44.813211%2C43.170719&z=14&l=map"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={t("aboutCity.map.iframeTitle")}
        />
      </div>
    </section>
  );
};

export default CityMapSection;
