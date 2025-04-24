import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaUserMd,
  FaUserGraduate,
  FaBriefcaseMedical,
  FaMicroscope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
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
      className="bg-white py-12 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <div className="text-center mb-6 lg:mb-10">
        {/* <p className="text-sm text-[#002379] font-semibold">
          {t("about_course.organized_by")}
        </p> */}
        <h2 className="text-2xl md:text-4xl font-bold mt-1">
          {t("about_course.about_XI")}
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Program Highlights */}
        <div className="bg-gray-50 py-6 px-2 lg:px-4 rounded-lg shadow-sm">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            {t("about_course.program_highlights")}
          </h3>
          <ul className="space-y-5  text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#002379] mt-1" />
              {t("about_course.highlight_1")}
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#002379] mt-1" />
              {t("about_course.highlight_2")}
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#002379] mt-1" />
              {t("about_course.highlight_3")}
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#002379] mt-1" />
              {t("about_course.highlight_4")}
            </li>
          </ul>
        </div>

        {/* Who Should Attend */}
        <div className="bg-gray-50 py-6 px-2 lg:px-4 rounded-lg shadow-sm">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            {t("about_course.who_should_attend")}
          </h3>
          <ul className="space-y-5 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <FaUserMd className="text-[#002379] mt-1" />
              {t("about_course.attendee_1")}
            </li>
            <li className="flex items-start gap-2">
              <FaUserGraduate className="text-[#002379] mt-1" />
              {t("about_course.attendee_2")}
            </li>
            <li className="flex items-start gap-2">
              <FaBriefcaseMedical className="text-[#002379] mt-1" />
              {t("about_course.attendee_3")}
            </li>
            <li className="flex items-start gap-2">
              <FaMicroscope className="text-[#002379] mt-1" />
              {t("about_course.attendee_4")}
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
