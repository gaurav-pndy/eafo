import React from "react";
import { useTranslation } from "react-i18next";

const HotelsMap = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">
          {t("accommodation.location")}
        </h2>
      </div>
      <div className="w-full hidden md:block h-[400px] rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A64bb7ff6a17cb7a39367f1452beab1d109e0b192c78b87c4dd18a6fa23ffddf4&amp;source=constructor"
          width="1080"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-full md:hidden h-[400px] rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A64bb7ff6a17cb7a39367f1452beab1d109e0b192c78b87c4dd18a6fa23ffddf4&amp;source=constructor"
          width="394"
          height="397"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default HotelsMap;
