import React from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";

const WhatAwaitsYou = () => {
  const { t } = useTranslation();

  // Fetching items from translations
  const listItems = t("what_awaits_you.items", { returnObjects: true });

  return (
    <div className="px-4 bg-[#f5f5f5] lg:px-20 py-12 w-full ">
      {/* Left Tile */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white mb-5 p-4 md:p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-4xl font-bold ">Что вас ждёт:</h3>
        </div>

        {/* Right Tile */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col gap-4">
          {listItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {typeof item === "string" ? (
                // For regular list items
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 text-xl shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ) : (
                // For items with subpoints
                <>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 text-xl shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item.main}</p>
                  </div>
                  <ul className="ml-16 list-disc text-gray-600">
                    {item.subpoints.map((subItem, subIndex) => (
                      <li key={subIndex} className="leading-relaxed">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatAwaitsYou;
