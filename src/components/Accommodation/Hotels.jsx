import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBed, FaDoorOpen, FaSpa, FaUtensils, FaWifi } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const Hotels = () => {
  const { t } = useTranslation();

  const [smartTab, setSmartTab] = useState("standard");
  const [businessTab, setBusinessTab] = useState("standard");

  const smartTabs = ["standard", "twin", "studio"];
  const businessTabs = ["standard", "semiSuite", "luxury", "apartment"];

  // Example image imports (you'll replace with actual paths or use import statements)
  const smartHotelImages = {
    standard: [
      "/accommodation/smart-standard-1.webp",
      "/accommodation/smart-standard-1.webp",
      "/accommodation/smart-standard-1.webp",
    ],
    twin: [
      "/accommodation/smart-twin-1.webp",
      "/accommodation/smart-twin-1.webp",
      "/accommodation/smart-twin-1.webp",
    ],
    studio: [
      "/accommodation/smart-studio-1.webp",
      "/accommodation/smart-studio-1.webp",
      "/accommodation/smart-studio-1.webp",
    ],
  };

  const businessHotelImages = {
    standard: [
      "/accommodation/business-2room-1.jpg",
      "/accommodation/business-2room-2.jpg",
      "/accommodation/business-2room-3.jpg",
    ],
    semiSuite: [
      "/accommodation/business-suite-1.jpg",
      "/accommodation/business-suite-2.jpg",
      "/accommodation/business-suite-3.jpg",
    ],
    luxury: [
      "/accommodation/business-luxury-1.jpg",
      "/accommodation/business-luxury-2.jpg",
      "/accommodation/business-luxury-3.jpg",
    ],
    apartment: [
      "/accommodation/business-apt-1.jpg",
      "/accommodation/business-apt-2.jpg",
      "/accommodation/business-apt-3.jpg",
    ],
  };

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      {/* Smart Hotel */}
      <div className="mb-12">
        <div className="grid md:grid-cols-2  gap-6 md:gap-16 ">
          <div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
              {t("accommodation.smartHotel.title")}
            </h2>
            <p className="text-gray-600 leading-7 ">
              {t("accommodation.smartHotel.description")}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FaBed className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.smartHotel.features.cozy")}
              </span>
              <span className="flex items-center gap-2">
                <MdPhoneIphone className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.smartHotel.features.modern")}
              </span>
              <span className="flex items-center gap-2">
                <FaWifi className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.smartHotel.features.wifi")}
              </span>

              <span className="flex items-center gap-2">
                <FaSpa className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.smartHotel.features.spa")}
              </span>
            </div>
          </div>
          <img
            src="/accommodation/smart-main.webp"
            alt="Smart Hotel"
            className="rounded-xl w-full md:h-90 object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex space-x-5 md:space-x-10 border-b border-gray-300">
            {smartTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSmartTab(tab)}
                className={`pb-2 border-b-2 text-sm md:text-base ${
                  smartTab === tab
                    ? "border-[#1e3a8a] text-[#1e3a8a]"
                    : "border-transparent text-gray-500"
                }`}
              >
                {t(`accommodation.smartHotel.tabs.${tab}`)}
              </button>
            ))}
          </div>
          {/* Images Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4">
            {smartHotelImages[smartTab].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Smart Hotel ${smartTab} ${i + 1}`}
                className="h-32 md:h-48 w-full object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Business Hotel */}
      <div className="mt-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 ">
          <img
            src="/accommodation/hotel2-main.jpg"
            alt="Business Hotel"
            className="rounded-xl w-full  md:h-90 object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
              {t("accommodation.businessHotel.title")}
            </h2>
            <p className="text-gray-600 leading-7 ">
              {t("accommodation.businessHotel.description")}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FaDoorOpen className="text-xl text-[#1e3a8a]" />
                {t("accommodation.businessHotel.features.spacious")}
              </span>
              <span className="flex items-center gap-2">
                <FaWifi className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.businessHotel.features.wifi")}
              </span>
              <span className="flex items-center gap-2">
                <FaUtensils className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.businessHotel.features.breakfast")}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex space-x-5 md:space-x-10 border-b border-gray-300">
            {businessTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setBusinessTab(tab)}
                className={`pb-2 border-b-2 text-sm md:text-base ${
                  businessTab === tab
                    ? "border-[#1e3a8a] text-[#1e3a8a]"
                    : "border-transparent text-gray-500"
                }`}
              >
                {t(`accommodation.businessHotel.tabs.${tab}`)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4">
            {businessHotelImages[businessTab].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Business Hotel ${businessTab} ${i + 1}`}
                className="h-32 md:h-48 w-full object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
