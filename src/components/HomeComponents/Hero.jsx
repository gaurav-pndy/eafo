import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PreRegisterForm from "../PreRegisterForm";

const Hero = () => {
  const { i18n, t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full lg:min-h-[calc(100vh-5.5rem)] flex flex-col"
    >
      {/* Left side - Dark blue section with text */}
      <div className="w-full min-h-[auto] lg:min-h-[calc(100vh-5rem)] bg-[#1e3a8a] text-white flex flex-col-reverse lg:flex-row justify-end items-center lg:[border-radius:0%_0%_10%_10%_/10%_10%_0%_20%] pt-6 lg:pt-0 overflow-auto">
        <div className="w-full py-6 md:py-16 px-4 md:px-10 lg:px-20 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
            {t("heroSection.title1")}
          </h1>

          <h1 className="text-2xl md:text-5xl font-semibold mb-4 lg:mb-6">
            {t("heroSection.subtitle")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 lg:mb-6">
            {t("heroSection.subtitle2")}
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-10 lg:mb-12">
            {t("heroSection.subtitle3")}
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setShowForm(true)}
              target="_blank"
              className="bg-white text-[#1e3a8a] hover:text-white px-8 hover:bg-[#1e3a8a] w-full md:w-fit border border-white cursor-pointer md:text-xl py-3 rounded-full font-semibold transition-all duration-300"
            >
              {t("heroSection.button")}
            </button>
            <a
              href="https://basic.eafo.info/"
              target="_blank"
              className="border border-white px-8 py-3 rounded-full w-full md:w-fit font-semibold hover:bg-white md:text-xl hover:text-[#002379] transition-all duration-300"
            >
              {t("heroSection.course")}
            </a>
          </div>
        </div>

        <div className="w-full h-[35vh] md:h-[40vh] lg:h-screen lg:w-[65%] right-0 lg:rounded-tl-[20%] rounded-bl-[20%] rounded-br-[20%] lg:rounded-br-none overflow-hidden">
          <div className="h-full inset-0 overflow-hidden">
            <img
              src="/heroImg.jpg"
              alt="Woman working on laptop"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>

        {showForm && (
          <PreRegisterForm
            courseId="67fb8bc722a71bd3d19d580d"
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
