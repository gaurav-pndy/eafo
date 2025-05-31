import { useTranslation } from "react-i18next";
import { FaWifi, FaConciergeBell, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const facilitiesList = [
  {
    key: "conference",
    img: "/venue/conference.jpg",
    imgAlt: "Conference Hall",
  },
  {
    key: "vip",
    img: "/venue/vip.webp",
    imgAlt: "VIP Hall",
  },
  {
    key: "restaurant",
    img: "/venue/restaurant.jpg",
    imgAlt: "Restaurant",
  },
];

const featureIcons = [
  {
    icon: <FaWifi className="text-5xl  mx-auto text-[#1e3a8a] mb-2" />,
    labelKey: "venue.facilities.features.wifi",
  },
  {
    icon: <FaConciergeBell className="text-5xl  mx-auto text-[#1e3a8a] mb-2" />,
    labelKey: "venue.facilities.features.service",
  },
  {
    icon: <FaGraduationCap className="text-5xl  mx-auto text-[#1e3a8a] mb-2" />,
    labelKey: "venue.facilities.features.environment",
  },
];

const Facilities = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto space-y-20">
      {facilitiesList.map(({ key, img, imgAlt }, index) => (
        <div
          key={key}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-12`}
        >
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-[#1e3a8a] mb-4">
              {t(`venue.facilities.${key}.title`)}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t(`venue.facilities.${key}.desc`)}
            </p>
          </div>
          <img
            src={img}
            alt={imgAlt}
            className="w-full md:w-1/2 h-60 md:h-80 rounded-xl shadow-lg object-cover"
          />
        </div>
      ))}

      <div className="text-center mt-10">
        <Link to="/about-city">
          <button className="bg-white border border-gray-300  px-10 py-3 rounded-full font-bold text-xl hover:bg-gray-200 cursor-pointer transition-all duration-300">
            Как добраться
          </button>
        </Link>
      </div>

      {/* Feature Row */}
      <div className=" bg-[#f9fafb] p-6 grid md:grid-cols-3 gap-6 md:gap-24">
        {featureIcons.map(({ icon, labelKey }, idx) => (
          <div key={idx} className="text-center ">
            {icon}
            <p className="font-bold text-lg mt-1">{t(labelKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
