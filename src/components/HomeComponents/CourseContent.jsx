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
    <div className="bg-gray-100 px-4 lg:px-10 py-16 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-4xl mb-10 font-bold">
          {t("course_content.heading")}
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-10 text-[#1e3a8a]">
          {/* Oncology */}
          <div
            onClick={() =>
              handleOpenDialog(oncoTopics, "По онкологии (клиническая)")
            }
            className="cursor-pointer flex items-center space-x-4 hover:bg-gray-200 p-4 rounded-lg"
          >
            <PiStudentBold className="text-3xl " />
            <span className=" font-semibold ">
              {t("course_content.button1")}
            </span>
          </div>

          {/* Oncopathology */}
          <div
            onClick={() =>
              handleOpenDialog(
                oncoTopics,
                "По онкопатологии (цито-, гисто- и молекулярно-генетические методы диагностики опухолей)"
              )
            }
            className="cursor-pointer flex items-start space-x-4 hover:bg-gray-200 p-4 rounded-lg"
          >
            <FaBookBookmark className="text-4xl " />
            <span className=" font-semibold ">
              {t("course_content.button2")}
            </span>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="!max-w-4xl">
            {/* <DialogHeader>
              <DialogTitle>{courseTitle}</DialogTitle>
            </DialogHeader> */}
            <div className="lg:text-lg text-gray-700  space-y-2 mt-4">
              {selectedCourse?.map((topic, index) => (
                <div key={index}>
                  <span dangerouslySetInnerHTML={{ __html: topic }}></span>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CourseContent;
