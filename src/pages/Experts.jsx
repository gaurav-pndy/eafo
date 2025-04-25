import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserMd,
  FaFlask,
  FaDna,
  FaQuoteLeft,
  FaMicroscope,
  FaChalkboardTeacher,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
// import { Autoplay, Pagination } from "swiper";

const Experts = () => {
  const { t } = useTranslation();

  const speakerIcons = [
    <FaChalkboardTeacher className="text-[#6b7280] mr-2 text-xl" />,
    <FaMicroscope className="text-[#6b7280] mr-2 text-xl" />,
    <FaDna className="text-[#6b7280] mr-2 text-xl" />,
  ];

  return (
    <section className="text-gray-800 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-[#1e3a8f] relative text-white h-[400px] py-32 px-4"
      >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://static.wixstatic.com/media/df6cc5_dc61e86141bf4b2a8f0d9c110703f9fc~mv2.jpg"
            alt="Experts Hero Image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
        <div className="relative  max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t("experts.title")}
            </h2>
            <p className=" text-lg md:text-xl mx-auto">
              {t("experts.subtitle")}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center py-16 px-4 md:px-12 max-w-5xl mx-auto"
      >
        <p className="  mx-auto  md:text-lg">{t("experts.description")}</p>
        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {["speakers", "countries", "hours", "specializations"].map((key) => (
            <div key={key} className="">
              <p className="text-4xl font-bold text-[#1e3a8f]">
                <CountUp
                  end={parseInt(
                    t(`experts.stats.${key}.number`).replace(/\D/g, "")
                  )}
                  suffix="+"
                  duration={3}
                />
              </p>
              <p className="text-lg text-gray-600">
                {t(`experts.stats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Confirmed Speakers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="py-16 bg-gray-50 px-4 md:px-12"
      >
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
          {t("experts.confirmedTitle")}
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["michael", "sarah", "andreas"].map((id, idx) => (
            <div
              key={id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={`/testimonials/alumni${idx + 1}.jpg`}
                  alt={t(`experts.speakers.${id}.name`)}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t  from-black/70 to-transparent w-full">
                  <h4 className="text-2xl font-semibold">
                    {t(`experts.speakers.${id}.name`)}
                  </h4>
                  <p className="text-sm opacity-90">
                    {t(`experts.speakers.${id}.speciality`)}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-800 mb-2">
                  {t(`experts.speakers.${id}.org`)}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  {speakerIcons[idx]}
                  {t(`experts.speakers.${id}.field`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Invited Experts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gray-100 py-16 px-4 md:px-12"
      >
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
          {t("experts.invitedTitle")}
        </h3>
        <p className="text-center md:text-lg text-gray-600 mb-12">
          {t("experts.invitedDesc")}
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["oncology", "pathology", "biology"].map((id, idx) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-3">
                {idx === 0 && (
                  <FaHeartbeat className="text-[#1e3a8f] mr-2 text-2xl" />
                )}
                {idx === 1 && (
                  <FaMicroscope className="text-[#1e3a8f] mr-2 text-2xl" />
                )}
                {idx === 2 && (
                  <FaDna className="text-[#1e3a8f] mr-2 text-2xl" />
                )}
                <h4 className="font-semibold text-xl">
                  {t(`experts.invited.${id}.title`)}
                </h4>
              </div>
              <p className=" text-gray-600">
                {t(`experts.invited.${id}.desc`)}
              </p>
              <p className="text-sm mt-2 text-blue-800">
                {t(`experts.invited.${id}.count`)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-[#1e3a8f] text-white py-16 px-4 text-center"
      >
        <h3 className="text-2xl md:text-4xl font-semibold mb-6">
          {t("experts.ctaTitle")}
        </h3>
        <p className="mb-6 md:text-xl">{t("experts.ctaSubtitle")}</p>
        <button className="bg-white text-[#1e3a8f] font-medium px-8 py-3.5 rounded-full hover:bg-gray-200 transition">
          {t("experts.ctaButton")}
        </button>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="py-16 px-4 md:px-12"
      >
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
          {t("experts.testimonialTitle")}
        </h3>

        {/* Swiper for smaller screens */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          loop={true}
          className="md:!hidden border border-black"
        >
          {["robert", "elena"].map((id, index) => (
            <SwiperSlide key={id}>
              <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={`/testimonials/alumni${index + 1}.jpg`}
                    alt={t(`experts.testimonials.${id}.name`)}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">
                      {t(`experts.testimonials.${id}.name`)}
                    </p>
                    <p className="text-gray-500">
                      {t(`experts.testimonials.${id}.position`)}
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "{t(`experts.testimonials.${id}.quote`)}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Grid for larger screens */}
        <div className=" md:grid-cols-2 gap-16 max-w-5xl px-5 mx-auto hidden md:grid">
          {["robert", "elena"].map((id, index) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`/testimonials/alumni${index + 1}.jpg`}
                  alt={t(`experts.testimonials.${id}.name`)}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">
                    {t(`experts.testimonials.${id}.name`)}
                  </p>
                  <p className="text-gray-500">
                    {t(`experts.testimonials.${id}.position`)}
                  </p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "{t(`experts.testimonials.${id}.quote`)}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experts;
