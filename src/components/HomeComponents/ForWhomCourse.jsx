import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserMd,
  FaMicroscope,
  FaUserGraduate,
  FaIndustry,
  FaGlobe,
} from "react-icons/fa";
import { GiCancer } from "react-icons/gi";

const ForWhomCourse = () => {
  const { t } = useTranslation();

  // Fetching the list of categories from translations
  const categories = t("for_whom_course.items", { returnObjects: true });

  // Icons to match the categories
  const icons = [
    <FaUserMd className="text-6xl shrink-0 p-4 rounded-full text-[#0288D1] bg-[#c5ebff]" />, // Doctors
    <FaMicroscope className="text-6xl shrink-0 p-4 rounded-full text-[#0288D1] bg-[#c5ebff]" />, // Pathologists
    <GiCancer className="text-6xl shrink-0 p-4 rounded-full text-[#0288D1] bg-[#c5ebff]" />, // Oncologists
    <FaUserGraduate className="text-6xl shrink-0 p-4 rounded-full text-[#0288D1] bg-[#c5ebff]" />, // Students & Residents
    <FaIndustry className="text-6xl shrink-0 p-4 rounded-full text-[#0288D1] bg-[#c5ebff]" />, // Pharmaceutical & Medical Industry
    <FaGlobe className="text-6xl shrink-0 p-4 rounded-full text-[#0288D1] bg-[#c5ebff]" />, // International participants
  ];

  return (
    <section className="px-4 lg:px-20 py-12 max-w-6xl mx-auto">
      {/* Main Title */}
      <div className="mb-10  rounded-lg text-center">
        <h3 className="text-2xl md:text-4xl font-bold">
          {t("for_whom_course.title")}
        </h3>
      </div>

      {/* Grid Layout for Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-10 rounded-lg shadow-lg flex items-start gap-8"
          >
            <p className="text-gray-700  md:text-lg leading-relaxed">
              {category}
            </p>
            {icons[index]}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForWhomCourse;
