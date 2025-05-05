import React from "react";
import { useTranslation } from "react-i18next";

const VenueMap = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">
          {t("venue.howToFind")}
        </h2>
        <p className="text-gray-600 mt-1">{t("venue.address")}</p>
      </div>
      <div className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=44.805307%2C43.172402&z=16.6&oid=136974690080"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default VenueMap;
