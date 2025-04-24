import { useTranslation } from "react-i18next";

import { FaGlobe, FaGraduationCap } from "react-icons/fa";

import { FaHandsHolding } from "react-icons/fa6";
import { motion } from "framer-motion";

const courseItems = [
  {
    icon: <FaGlobe />,
    title: "whyUs.reason1",
    description: "whyUs.reason1Desc",
  },
  {
    icon: <FaHandsHolding />,
    title: "whyUs.reason2",
    description: "whyUs.reason2Desc",
  },
  {
    icon: <FaGraduationCap />,
    title: "whyUs.reason3",
    description: "whyUs.reason3Desc",
  },
];

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {t("whyUs.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
          {courseItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-2 text-[#1e3a8a] text-4xl">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{t(item.title)}</h3>
              <p className="text-sm text-gray-700">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
