import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SponsorCTA = () => {
  const { t } = useTranslation();
  const buttons = t("sponsors.cta.buttons", { returnObjects: true });

  return (
    <section id="sponsor-cta" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("sponsors.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("sponsors.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              {buttons.download}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              {buttons.contact}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCTA;
