import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Timer from "./Timer";
import { useTranslation } from "react-i18next";

const CourseSchedule = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-16 lg:py-32 flex justify-center items-center mx-auto bg-gray-100   overflow-hidden">
      <div className="p-4 lg:p-10 lg:pt-24 lg:w-[90%] xl:w-[70%] flex flex-col rounded-[10%] bg-white relative">
        {/* Calendar animation/image */}
        <div className="flex lg:absolute -top-25 -left-6  mx-auto">
          <img
            src="/calendar.png"
            alt="Calendar image"
            className="w-40 lg:w-[26rem] h-40 lg:h-[26rem]"
          />
        </div>

        {/* Countdown Timer */}

        {/* Event Information */}
        <div className=" flex flex-col lg:flex-row justify-around">
          <div className="lg:w-1/2 pb-14  flex items-end">
            <h1 className=" text-3xl lg:text-[3.25rem] lg:leading-14 font-bold text-center lg:text-left">
              {t("schedule.heading")}
            </h1>
          </div>

          <div className="lg:w-1/2  rounded-[10%] p-6  text-gray-800 text-center relative">
            <div className="absolute  left-[50%] translate-x-[-50%]  -top-28 lg:-top-36   scale-50">
              <Timer />
            </div>

            <div className="mb-5 mt-8 lg:mt-0">
              <h3 className="text-white py-2 rounded-2xl bg-[#1e3a8a] font-bold  mb-1">
                {t("schedule.dates.heading")}
              </h3>
              <p> {t("schedule.dates.date")}</p>
            </div>

            <div className="mb-5">
              <h3 className="text-white py-2 rounded-2xl bg-[#1e3a8a] font-bold  mb-1">
                {t("schedule.venue.heading")}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: t("schedule.venue.venue") }}
              ></p>
            </div>

            <div className="mb-5">
              <h3 className="text-white py-2 rounded-2xl bg-[#1e3a8a] font-bold mb-1 ">
                {t("schedule.checkin.heading")}
              </h3>
              <p> {t("schedule.checkin.checkin")}</p>
            </div>

            <div className="mb-5">
              <h3 className="text-white py-2 rounded-2xl bg-[#1e3a8a] font-bold mb-1 ">
                {t("schedule.opening.heading")}
              </h3>
              <p> {t("schedule.opening.opening")}</p>
            </div>

            <div className="mb-5">
              <h3 className="text-white py-2 rounded-2xl bg-[#1e3a8a] font-bold  mb-1">
                {t("schedule.closing.heading")}
              </h3>
              <p> {t("schedule.closing.closing")}</p>
            </div>

            <div>
              <h3 className="text-white py-2 rounded-2xl bg-[#1e3a8a] font-bold  mb-1">
                {t("schedule.checkout.heading")}
              </h3>
              <p> {t("schedule.checkout.checkout")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSchedule;
