import React from "react";
import { useTranslation } from "react-i18next";

const HotelsMap = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">
          {t("accommodation.location")}
        </h2>
      </div>
      <div className="w-full hidden md:block h-full rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Acf4ef50a57102f0a868002c69db82753028565754808c9e9fa93a461ef953306&amp;source=constructor"
          width="1050"
          height="450"
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-full md:hidden h-full rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Acf4ef50a57102f0a868002c69db82753028565754808c9e9fa93a461ef953306&amp;source=constructor"
          width="416"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default HotelsMap;
