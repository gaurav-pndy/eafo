import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Timer from "./Timer";
import { useTranslation } from "react-i18next";

const CourseSchedule = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-16 lg:py-32 flex justify-center items-center mx-auto bg-gray-100   overflow-hidden">
      <div className="p-4 xl:p-10  xl:w-[85%] grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-2 lg:gap-4  rounded-[10%]  relative">
        <div className="col-span-2 p-3 md:p-5 lg:p-3 xl:p-5 rounded-3xl flex items-center bg-white row-span-1 ">
          <h1
            className=" text-3xl text-[#9A0003] md:text-[3.25rem] lg:leading-13 font-[800] text-right"
            dangerouslySetInnerHTML={{ __html: t("schedule.heading") }}
          ></h1>
        </div>

        <div className="col-span-1 relative row-span-1 flex lg:hidden flex-col justify-center p-3 md:p-5 text-[#001554] rounded-3xl bg-white">
          <h2
            className=" text-2xl md:text-5xl font-[800] text-left"
            dangerouslySetInnerHTML={{ __html: t("schedule.venue.heading") }}
          ></h2>
          <h2
            className=" text-2xl md:text-5xl  font-[800] text-left "
            dangerouslySetInnerHTML={{ __html: t("schedule.venue.venue") }}
          ></h2>

          <a
            href="https://artisplaza.com/"
            target="_blank"
            className="text-[#08154E] absolute underline text-sm sm:text-base md:text-lg bottom-2 md:bottom-4 right-4"
          >
            Посмотреть
          </a>
        </div>

        <div className="col-span-1  row-span-1 lg:hidden rounded-3xl bg-white">
          <img
            src="/schedule/artis.png"
            alt="students image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="col-span-1 row-span-2  bg-white rounded-3xl p-3 md:p-5 py-8  text-[#001554] flex flex-col justify-evenly gap-2 relative">
          <div className="">
            <h3 className="font-bold md:mb-1 md:text-3xl lg:text-xl">
              {t("schedule.checkin.heading")}
            </h3>
            <p className="text-sm md:text-2xl lg:text-lg">
              {" "}
              {t("schedule.checkin.checkin")}
            </p>
          </div>

          <div className="">
            <h3 className=" font-bold md:mb-1  md:text-3xl lg:text-xl">
              {t("schedule.opening.heading")}
            </h3>
            <p className="text-sm md:text-2xl lg:text-lg">
              {" "}
              {t("schedule.opening.opening")}
            </p>
          </div>

          <div className="">
            <h3 className=" font-bold  md:mb-1 md:text-3xl lg:text-xl">
              {t("schedule.closing.heading")}
            </h3>
            <p className="text-sm md:text-2xl lg:text-lg">
              {" "}
              {t("schedule.closing.closing")}
            </p>
          </div>

          <div>
            <h3 className=" font-bold md:mb-1 md:text-3xl lg:text-xl">
              {t("schedule.checkout.heading")}
            </h3>
            <p className="text-sm md:text-2xl lg:text-lg">
              {" "}
              {t("schedule.checkout.checkout")}
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-1  rounded-3xl text-[#9A0003]  bg-white flex lg:hidden flex-col justify-center p-3 md:p-5 ">
          <h2
            className="md:text-3xl lg:text-2xl    text-center"
            dangerouslySetInnerHTML={{ __html: t("schedule.dates.heading") }}
          ></h2>
          <h2
            className=" md:text-3xl lg:text-2xl    font-[800]    text-center"
            dangerouslySetInnerHTML={{ __html: t("schedule.dates.date") }}
          ></h2>
        </div>
        <div className="col-span-1 row-span-1   rounded-3xl bg-white">
          <img
            src="/schedule/students.jpg"
            alt="students image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="col-span-1 row-span-1 relative hidden lg:flex flex-col justify-center p-3 xl:p-5 text-[#001554] rounded-3xl bg-white">
          <h2
            className=" text-3xl  lg:text-[2.3rem] 4 font-[800] text-center lg:text-left leading-10 break-words"
            dangerouslySetInnerHTML={{ __html: t("schedule.venue.heading") }}
          ></h2>
          <h2
            className=" text-3xl  lg:text-[2.3rem]  font-[800] text-center lg:text-left leading-10"
            dangerouslySetInnerHTML={{ __html: t("schedule.venue.venue") }}
          ></h2>

          <a
            href="https://artisplaza.com/"
            target="_blank"
            className="text-[#08154E] absolute bottom-4 right-4 text-lg underline"
          >
            Посмотреть
          </a>
        </div>

        <div className="col-span-1  row-span-1 rounded-3xl hidden lg:block bg-white">
          <img
            src="/schedule/artis.png"
            alt="students image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="col-span-1 row-span-1  rounded-3xl text-[#9A0003]  bg-white hidden lg:flex flex-col justify-center p-3 md:p-5 ">
          <h2
            className="md:text-3xl lg:text-2xl    text-center"
            dangerouslySetInnerHTML={{ __html: t("schedule.dates.heading") }}
          ></h2>
          <h2
            className=" md:text-3xl lg:text-2xl    font-[800]    text-center"
            dangerouslySetInnerHTML={{ __html: t("schedule.dates.date") }}
          ></h2>
        </div>
      </div>
    </div>
  );
};

export default CourseSchedule;
