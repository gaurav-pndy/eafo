import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const CurrentSponsors = () => {
  const { t } = useTranslation();
  const featured = t("sponsors.currentSponsors.featured", {
    returnObjects: true,
  });
  const stats = t("sponsors.currentSponsors.stats", { returnObjects: true });

  return (
    <section id="current-sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl ">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("sponsors.currentSponsors.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Featured Sponsor */}
          <div
            id="featured-sponsor"
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  className="text-2xl text-blue-600"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{featured.name}</h3>
                <p className="text-gray-600">{featured.type}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">{featured.description}</p>
            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-blue-200 text-4xl"
              />
              <p className="italic text-gray-600">{featured.quote}</p>
            </div>
          </div>

          {/* Sponsorship Stats */}
          <div id="sponsor-stats" className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentSponsors;
