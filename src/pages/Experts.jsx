import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserMd,
  FaFlask,
  FaDna,
  FaQuoteLeft,
  FaMicroscope,
  FaChalkboardTeacher,
} from "react-icons/fa";

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
      <div className="bg-[#1e3a8f] text-white text-center py-32 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {t("experts.title")}
        </h2>
        <p className="max-w-4xl text-lg md:text-xl mx-auto">
          {t("experts.subtitle")}
        </p>
      </div>

      {/* Overview */}
      <div className="text-center py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <p className="  mx-auto  md:text-lg">{t("experts.description")}</p>
        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {["speakers", "countries", "hours", "specializations"].map((key) => (
            <div key={key} className="">
              <p className="text-4xl font-bold text-[#1e3a8f]">
                {t(`experts.stats.${key}.number`)}
              </p>
              <p className="text-lg text-gray-600">
                {t(`experts.stats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmed Speakers */}
      <div className="py-16 bg-gray-50 px-4 md:px-12">
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
      </div>

      {/* Invited Experts */}
      <div className="bg-gray-100 py-10 px-4 md:px-12">
        <h3 className="text-2xl font-semibold text-center mb-4">
          {t("experts.invitedTitle")}
        </h3>
        <p className="text-center text-gray-600 mb-8">
          {t("experts.invitedDesc")}
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["oncology", "pathology", "biology"].map((id, idx) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-3">
                {idx === 0 && <FaUserMd className="text-blue-700 mr-2" />}
                {idx === 1 && <FaFlask className="text-blue-700 mr-2" />}
                {idx === 2 && <FaDna className="text-blue-700 mr-2" />}
                <h4 className="font-semibold">
                  {t(`experts.invited.${id}.title`)}
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                {t(`experts.invited.${id}.desc`)}
              </p>
              <p className="text-xs mt-2 text-gray-500">
                {t(`experts.invited.${id}.count`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800 text-white py-12 px-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{t("experts.ctaTitle")}</h3>
        <p className="mb-6">{t("experts.ctaSubtitle")}</p>
        <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition">
          {t("experts.ctaButton")}
        </button>
      </div>

      {/* Testimonials */}
      <div className="py-10 px-4 md:px-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          {t("experts.testimonialTitle")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {["robert", "elena"].map((id) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start">
                <FaQuoteLeft className="text-blue-700 text-xl mr-3 mt-1" />
                <div>
                  <p className="text-sm italic">
                    {t(`experts.testimonials.${id}.quote`)}
                  </p>
                  <p className="mt-4 font-semibold">
                    {t(`experts.testimonials.${id}.name`)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t(`experts.testimonials.${id}.position`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
