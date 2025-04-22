import { useTranslation } from "react-i18next";

import { FaChartLine, FaDna } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";

import { SlBadge } from "react-icons/sl";
const courseItems = [
  {
    icon: <FaDna />,
    title: "outcome.outcome1",
    description: "outcome.outcome1Desc",
  },
  {
    icon: <PiTestTubeFill />,
    title: "outcome.outcome2",
    description: "outcome.outcome2Desc",
  },
  {
    icon: <FaChartLine />,
    title: "outcome.outcome3",
    description: "outcome.outcome3Desc",
  },
];

const Outcome = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl  md:text-4xl font-bold text-center mb-10">
          {t("prizes.title")}
        </h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 ">
          {courseItems.map((item, idx) => (
            <div
              key={idx}
              className=" bg-white p-6 rounded-xl shadow hover:shadow-md transition "
            >
              <div className="mb-2  text-[#1e3a8a] text-4xl">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{t(item.title)}</h3>
              <p className="text-sm ">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcome;
