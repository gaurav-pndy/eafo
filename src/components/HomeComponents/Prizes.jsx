import { useTranslation } from "react-i18next";

import { FaGlobe, FaGraduationCap, FaMedal, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHandsHolding } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
const courseItems = [
  {
    icon: <FaTrophy />,
    title: "prizes.prize1",
    description: "prizes.prize1Desc",
  },
  {
    icon: <SlBadge />,
    title: "prizes.prize2",
    description: "prizes.prize2Desc",
  },
  {
    icon: <FaMedal />,
    title: "prizes.prize3",
    description: "prizes.prize3Desc",
  },
];

const Prizes = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-[#1e3a8a]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl text-white md:text-4xl font-bold text-center mb-10">
          {t("prizes.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 text-center">
          {courseItems.map((item, idx) => (
            <div
              key={idx}
              className=" bg-white/10 p-6 rounded-xl shadow hover:shadow-md transition text-white"
            >
              <div className="mb-2 mx-auto w-fit text-4xl">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{t(item.title)}</h3>
              <p className="text-sm ">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Prizes;
