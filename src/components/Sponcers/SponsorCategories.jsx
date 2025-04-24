import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faStar,
  faMedal,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const SponsorCategories = () => {
  const { t } = useTranslation();
  const categories = t("sponsors.categories.items", { returnObjects: true });

  const getIcon = (iconName) => {
    switch (iconName) {
      case "crown":
        return faCrown;
      case "star":
        return faStar;
      case "medal":
        return faMedal;
      case "award":
        return faAward;
      default:
        return faCrown;
    }
  };

  const getBgColor = (id) => {
    switch (id) {
      case "platinum":
        return "from-gray-300 to-gray-500";
      case "gold":
        return "from-yellow-400 to-yellow-600";
      case "silver":
        return "from-gray-400 to-gray-500";
      case "bronze":
        return "from-yellow-700 to-yellow-800";
      default:
        return "from-gray-300 to-gray-500";
    }
  };

  const getButtonColor = (id) => {
    switch (id) {
      case "platinum":
        return "bg-gray-800 hover:bg-gray-700";
      case "gold":
        return "bg-yellow-600 hover:bg-yellow-500";
      case "silver":
        return "bg-gray-500 hover:bg-gray-400";
      case "bronze":
        return "bg-yellow-800 hover:bg-yellow-700";
      default:
        return "bg-gray-800 hover:bg-gray-700";
    }
  };

  return (
    <section id="sponsor-categories" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("sponsors.categories.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              id={`${category.id}-card`}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${
                  category.id === "platinum"
                    ? "from-gray-200"
                    : category.id === "gold"
                    ? "from-yellow-200"
                    : category.id === "silver"
                    ? "from-gray-100"
                    : "from-yellow-700/20"
                } to-white rounded-xl transform group-hover:scale-105 transition duration-300`}
              ></div>
              <div className="relative p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${getBgColor(
                    category.id
                  )} rounded-full flex items-center justify-center`}
                >
                  <FontAwesomeIcon
                    icon={getIcon(category.icon)}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <button
                  className={`${getButtonColor(
                    category.id
                  )} text-white px-6 py-3 rounded-lg transition duration-300`}
                >
                  {category.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorCategories;
