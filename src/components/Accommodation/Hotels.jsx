import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBed, FaDoorOpen, FaSpa, FaUtensils, FaWifi } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const Hotels = () => {
  const { t } = useTranslation();

  const [artisTab, setArtisTab] = useState("tab1");

  const tabs = ["tab1", "tab2", "tab3", "tab4", "tab5"];

  // Example image imports (you'll replace with actual paths or use import statements)
  const artisPlazaImages = {
    tab1: [
      "/accommodation/tab1/image1.jpg",
      "/accommodation/tab1/image2.jpg",
      "/accommodation/tab1/image3.jpg",
    ],
    tab2: [
      "/accommodation/tab2/image1.jpg",
      "/accommodation/tab2/image2.jpg",
      "/accommodation/tab2/image3.jpg",
    ],
    tab3: ["/accommodation/tab3/image1.jpg", "/accommodation/tab3/image2.jpg"],
    tab4: [
      "/accommodation/tab4/image1.jpg",
      "/accommodation/tab4/image2.jpg",
      "/accommodation/tab4/image3.jpg",
    ],
    tab5: [
      "/accommodation/tab5/image1.jpg",
      "/accommodation/tab5/image2.jpg",
      "/accommodation/tab5/image3.jpg",
    ],
  };

  const tabsDesc = {
    tab1: t("accommodation.artisPlaza.tabs.desc1"),
    tab2: t("accommodation.artisPlaza.tabs.desc2"),
    tab3: t("accommodation.artisPlaza.tabs.desc3"),
    tab4: t("accommodation.artisPlaza.tabs.desc4"),
    tab5: t("accommodation.artisPlaza.tabs.desc5"),
  };

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      {/* Smart Hotel */}
      <div className="">
        <div className="grid md:grid-cols-2  gap-6 md:gap-16 ">
          <div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
              {t("accommodation.artisPlaza.title")}
            </h2>
            <p className="text-gray-600 leading-7 ">
              {t("accommodation.artisPlaza.description")}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FaBed className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.artisPlaza.features.cozy")}
              </span>
              <span className="flex items-center gap-2">
                <MdPhoneIphone className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.artisPlaza.features.modern")}
              </span>
              <span className="flex items-center gap-2">
                <FaWifi className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.artisPlaza.features.wifi")}
              </span>

              <span className="flex items-center gap-2">
                <FaSpa className="text-xl text-[#1e3a8a]" />{" "}
                {t("accommodation.artisPlaza.features.spa")}
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
          <div className="overflow-x-auto pb-1.5 lg:pb-0">
            <div className="flex space-x-5 md:space-x-12 border-b border-gray-300 w-max min-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setArtisTab(tab)}
                  className={`pb-2 border-b-2 text-sm md:text-base whitespace-nowrap ${
                    artisTab === tab
                      ? "border-[#1e3a8a] text-[#1e3a8a]"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  {t(`accommodation.artisPlaza.tabs.${tab}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Images Placeholder */}

          <p className="mt-6 text-gray-800 "> {tabsDesc[artisTab]}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
            {artisPlazaImages[artisTab].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Artis Plaza ${artisTab} ${i + 1}`}
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
