import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowUp, FaChartLine } from "react-icons/fa";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      {/* <div className="text-center mb-10">
       
        <h2 className="text-2xl md:text-4xl font-bold mt-1">
          {t("about_course.about_XI")}
        </h2>
      </div> */}
      {/* Grid with varying tile heights */}
      <div className="grid grid-cols-2 md:grid-cols-4  items-end gap-4">
        {/* Tile 1 - Short height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#8897c1] p-3 xl:p-6 rounded-3xl flex flex-col justify-between h-full md:h-52 lg:h-64"
        >
          <div>
            <h3 className="text-5xl  lg:text-7xl font-bold text-gray-800 mb-2">
              {t("about_course.stat_1.number")}
            </h3>
            <p className="text-gray-600 text-sm md:text-[0.9rem] lg:text-xl font-semibold ">
              {t("about_course.stat_1.desc")}
            </p>
          </div>
        </motion.div>

        {/* Tile 2 - Medium height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#d7dcea] p-3 xl:p-6 rounded-3xl md:h-44 lg:h-56"
        >
          <div>
            <h3 className="text-5xl  lg:text-7xl font-bold text-gray-800 mb-2">
              {t("about_course.stat_2.number")}
            </h3>
            <p className="text-gray-600 text-sm md:text-[0.9rem] lg:text-xl font-semibold ">
              {t("about_course.stat_2.desc")}
            </p>
          </div>
        </motion.div>

        {/* Tile 3 - Medium height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#bdc5dd] p-3 xl:p-6 rounded-3xl flex flex-col  items-center h-full md:h-60 lg:h-72"
        >
          <div>
            <h3 className="text-5xl  lg:text-7xl font-bold text-gray-800 mb-2">
              {t("about_course.stat_3.number")}
            </h3>
            <p className="text-gray-600 text-sm md:text-[0.9rem] lg:text-xl font-semibold ">
              {t("about_course.stat_3.desc")}
            </p>
          </div>
        </motion.div>

        {/* Tile 4 - Tall height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#f2f3f8] overflow-hidden p-3 pb-0 xl:p-6 rounded-3xl md:h-72 lg:h-86"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div>
                {/* <h3 className="text-3xl font-bold text-gray-800">+600</h3> */}
                <p className="text-gray-600 text-sm md:text-[0.9rem] lg:text-xl font-semibold mt-2 mb-2 break-words">
                  {t("about_course.stat_4")}
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <div className="w-full h-32 md:h-34 lg:h-48 relative overflow-hidden ">
                <div className="absolute inset-0 flex justify-center items-center">
                  <img
                    src="/tile4.png"
                    alt="Certificate"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
