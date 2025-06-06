import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserMd,
  FaMicroscope,
  FaUserGraduate,
  FaIndustry,
  FaGlobe,
  FaUserNurse,
  FaFlask,
} from "react-icons/fa";
import { GiCancer } from "react-icons/gi";

const ForWhomCourse = () => {
  const { t } = useTranslation();

  const categories = t("for_whom_course.items", { returnObjects: true });

  const icons = [
    <FaUserMd className="text-5xl shrink-0  text-white" />,
    <FaMicroscope className="text-5xl shrink-0 text-white" />,
    <FaUserNurse className="text-5xl shrink-0  text-white" />,
    <FaUserGraduate className="text-5xl shrink-0  text-white" />,
    <FaFlask className="text-5xl shrink-0  text-white" />,
    <FaGlobe className="text-5xl shrink-0  text-white" />,
  ];

  return (
    <section className="w-full bg-[#1e3a8a] py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10  rounded-lg text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            {t("for_whom_course.title")}
          </h3>
        </div>

        {/* Grid Layout for Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border-2 border-white rounded-md p-4 md:p-6 flex flex-row-reverse  md:flex-col gap-2 items-center md:items-start md:gap-0 relative bg-transparent"
            >
              <div className="md:absolute top-4 right-4"> {icons[index]}</div>

              <div className="md:pr-12">
                {" "}
                {/* Add padding to right to avoid text overlapping with icon */}
                <h4 className="text-xl  text-white mb-1">{category}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomCourse;
