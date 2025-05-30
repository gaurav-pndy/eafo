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
      className="py-16 bg-[#f1f1f1]  "
    >
      {/* <div className="text-center mb-10">
       
        <h2 className="text-2xl md:text-4xl font-bold mt-1">
          {t("about_course.about_XI")}
        </h2>
      </div> */}

      <div className="grid max-w-7xl px-4  xl:px-12 mx-auto grid-cols-2 lg:grid-cols-4  items-end gap-3 xl:gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#fbfbfb] px-4 py-6 xl:px-6 rounded-3xl flex flex-col justify-between h-full text-center"
        >
          <div>
            <h3 className="text-7xl  md:text-[6rem] font-[800] text-[#001554] mb-2">
              {t("about_course.stat_1.number")}
            </h3>
            <p
              className="text-[#1c2862] text-sm  md:text-xl md:leading-9 "
              dangerouslySetInnerHTML={{
                __html: t("about_course.stat_1.desc"),
              }}
            ></p>
          </div>
        </motion.div>

        {/* Tile 2 - Medium height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#fbfbfb] px-4 py-6 xl:px-6 rounded-3xl h-full text-center"
        >
          <div>
            <h3 className="text-7xl  md:text-[6rem] font-[800] text-[#001554] mb-2">
              {t("about_course.stat_2.number")}
            </h3>
            <p
              className="text-[#001554] text-sm md:text-xl md:leading-9 "
              dangerouslySetInnerHTML={{
                __html: t("about_course.stat_2.desc"),
              }}
            ></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#fbfbfb] px-4 py-6 xl:px-6  rounded-3xl flex flex-col  items-center h-full text-center"
        >
          <div>
            <h3 className="text-7xl lg:tracking-tighter xl:tracking-normal md:text-[6rem] font-[800] text-[#001554] mb-2">
              {t("about_course.stat_3.number")}
            </h3>
            <p
              className="text-[#001554] text-sm md:text-xl md:leading-9 "
              dangerouslySetInnerHTML={{
                __html: t("about_course.stat_3.desc"),
              }}
            ></p>
          </div>
        </motion.div>

        {/* Tile 4 - Tall height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#fbfbfb] overflow-hidden px-4 py-6 xl:px-6 rounded-3xl relative h-full text-left"
        >
          <div className="flex flex-col h-full justify-between relative z-10">
            <div>
              <p
                className="text-[#001554] text-sm md:text-xl md:leading-9 mt-2 mb-2 break-words"
                dangerouslySetInnerHTML={{
                  __html: t("about_course.stat_4"),
                }}
              ></p>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 md:right-12 flex justify-center items-end pointer-events-none">
            <img
              src="/certificate.png"
              alt="Certificate"
              className="object-contain w-14 md:w-22 rotate-[20deg] "
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
