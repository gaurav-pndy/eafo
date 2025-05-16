import React, { useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaBookBookmark } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const CourseContent = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");

  const oncoTopics = t("course_content.list", { returnObjects: true });

  const handleOpenDialog = (course, title) => {
    setSelectedCourse(course);
    setCourseTitle(title);
    setOpen(true);
  };

  return (
    <div className=" px-4 lg:px-10 py-16 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-4xl mb-10 font-bold">
          {t("course_content.heading")}
        </h2>

        <div className="flex flex-col  space-y-4 text-[#1e3a8a]">
          {/* Oncology */}
          <div
            onClick={() =>
              handleOpenDialog(oncoTopics, t("course_content.dialogHead1"))
            }
            className="cursor-pointer flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-3xl " />
            <span className=" font-semibold ">
              {t("course_content.button1")}
            </span>
          </div>

          {/* Oncopathology */}
          <div
            onClick={() =>
              handleOpenDialog(oncoTopics, t("course_content.dialogHead1"))
            }
            className="cursor-pointer flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-4xl " />
            <span className=" font-semibold ">
              {t("course_content.button2")}
            </span>
          </div>

          <div
            onClick={() =>
              handleOpenDialog(
                t("course_content.text"),
                t("course_content.dialogHead1")
              )
            }
            className="cursor-pointer flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-4xl " />
            <span className=" font-semibold ">
              {t("course_content.button3")}
            </span>
          </div>

          <div
            onClick={() =>
              handleOpenDialog(
                t("course_content.text"),
                t("course_content.dialogHead1")
              )
            }
            className="cursor-pointer flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-4xl " />
            <span className=" font-semibold ">
              {t("course_content.button4")}
            </span>
          </div>

          <div
            onClick={() =>
              handleOpenDialog(
                t("course_content.text"),
                t("course_content.dialogHead1")
              )
            }
            className="cursor-pointer flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-4xl " />
            <span className=" font-semibold ">
              {t("course_content.button5")}
            </span>
          </div>
          <div
            onClick={() =>
              handleOpenDialog(
                t("course_content.text"),
                t("course_content.dialogHead1")
              )
            }
            className="cursor-pointer flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-4xl " />
            <span className=" font-semibold ">
              {t("course_content.button6")}
            </span>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="!max-w-4xl">
            <DialogHeader>
              <DialogTitle>
                <h2 dangerouslySetInnerHTML={{ __html: courseTitle }}></h2>
              </DialogTitle>
            </DialogHeader>
            <div className="lg:text-lg text-gray-700  space-y-2 mt-4">
              {Array.isArray(selectedCourse) ? (
                selectedCourse.map((topic, index) => (
                  <div key={index}>
                    <span dangerouslySetInnerHTML={{ __html: topic }}></span>
                  </div>
                ))
              ) : (
                <div>
                  <span
                    dangerouslySetInnerHTML={{ __html: selectedCourse }}
                  ></span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CourseContent;
