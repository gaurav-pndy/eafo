import React from "react";
import { useTranslation } from "react-i18next";

import { FaMedal, FaShuttleVan, FaTeamspeak } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";
import { LuMicroscope } from "react-icons/lu";
import { MdRecordVoiceOver } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { SiCodementor } from "react-icons/si";
import { FaComments, FaHandshake, FaUsers } from "react-icons/fa6";

const Advantages = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      title: t("advantages.tile1Title"),
      description: t("advantages.tile1Text"),
      icon: <FaComments className="text-5xl text-white" />,
    },
    {
      title: t("advantages.tile2Title"),
      description: t("advantages.tile2Text"),
      icon: <GiPublicSpeaker className="text-5xl text-white" />,
    },
    {
      title: t("advantages.tile3Title"),
      description: t("advantages.tile3Text"),
      icon: <FaUsers className="text-5xl text-white" />,
    },
    {
      title: t("advantages.tile4Title"),
      description: t("advantages.tile4Text"),
      icon: <FaHandshake className="text-5xl text-white" />,
    },
    {
      title: t("advantages.tile5Title"),
      description: t("advantages.tile5Text"),
      icon: <FaShuttleVan className="text-5xl text-white" />,
    },
    {
      title: t("advantages.tile6Title"),
      description: t("advantages.tile6Text"),
      icon: <FaMedal className="text-5xl text-white" />,
    },
  ];

  return (
    <div className="w-full bg-[#1e3a8a] py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t("advantages.heading")}
          </h2>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-2 border-white rounded-md p-4 md:p-6 flex flex-row-reverse  md:flex-col gap-2 items-center md:items-start md:gap-0 relative bg-transparent"
            >
              {/* Icon in upper right corner */}
              <div className="md:absolute top-4 right-4">{benefit.icon}</div>

              {/* Content */}
              <div className="md:pr-12">
                {" "}
                {/* Add padding to right to avoid text overlapping with icon */}
                <h4 className="text-2xl font-bold text-white mb-1">
                  {benefit.title}
                </h4>
                <p className="text-gray-200 text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
