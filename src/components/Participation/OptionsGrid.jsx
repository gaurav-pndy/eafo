import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const OptionsGrid = () => {
  const { t } = useTranslation();
  const options = t("participation.options", { returnObjects: true });

  return (
    <div className="grid md:grid-cols-3 gap-12">
      {options.map((option) => (
        <div
          key={option.id}
          id={option.id}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="text-4xl text-blue-900 mb-6">
            <FontAwesomeIcon icon={option.icon} />
          </div>
          <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">{option.description}</p>
            <ul className="space-y-3">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 mr-3"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {/* <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
              {t("participation.learnMore")}
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionsGrid;
