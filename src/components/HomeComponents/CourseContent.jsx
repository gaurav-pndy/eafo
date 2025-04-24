import { useTranslation } from "react-i18next";

import { FaBone, FaDna, FaMicroscope, FaUsers, FaXRay } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";
import { FaHospital, FaChartLine } from "react-icons/fa6";
import { motion } from "framer-motion";

const courseItems = [
  {
    icon: <FaMicroscope />,
    title: "course_content.clinicalOncology",
    description: "course_content.clinicalOncologyDesc",
  },
  {
    icon: <FaDna />,
    title: "course_content.molecularDiagnosis",
    description: "course_content.molecularDiagnosisDesc",
  },
  {
    icon: <FaHospital />,
    title: "course_content.oncohematology",
    description: "course_content.oncohematologyDesc",
  },
  {
    icon: <FaBone />,
    title: "course_content.boneTumors",
    description: "course_content.boneTumorsDesc",
  },
  {
    icon: <FaXRay />,
    title: "course_content.radiologicalDiagnostics",
    description: "course_content.radiologicalDiagnosticsDesc",
  },
  {
    icon: <FaUsers />,
    title: "course_content.clinicalDemonstrations",
    description: "course_content.clinicalDemonstrationsDesc",
  },
  {
    icon: <FaDna />,
    title: "course_content.cancerBiology",
    description: "course_content.cancerBiologyDesc",
  },
  {
    icon: <PiTestTubeFill />,
    title: "course_content.hematology",
    description: "course_content.hematologyDesc",
  },
  {
    icon: <FaChartLine />,
    title: "course_content.careerDevelopment",
    description: "course_content.careerDevelopmentDesc",
  },
];

const CourseContent = () => {
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
          {t("course_content.courseOverview")}
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

export default CourseContent;
