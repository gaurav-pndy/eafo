import React, { useEffect, useRef, useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaBookBookmark } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PreRegisterForm from "../PreRegisterForm";
import { Link } from "react-router-dom";

const CourseContent = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  const cardData = [
    {
      button: "button1",
      content: "oncoTopics",
      image: "/participation/tab1img1.jpg",
      bgcolor: "bg-[#011753]",
      dialogHead: t("course_content.dialogHead1"),
      dialogText: t("course_content.text1"),
    },
    {
      button: "button2",
      content: "oncoTopics",
      image: "/participation/tab1img2.jpg",
      bgcolor: "bg-[#4e629d]",
      dialogHead: t("course_content.dialogHead2"),

      dialogText: t("course_content.text2"),
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");

  const oncoTopics = t("course_content.list", { returnObjects: true });

  useEffect(() => {
    if (showForm) {
      setOpen(false);
    }
  }, [showForm]);

  const handleOpenDialog = (course, title) => {
    setSelectedCourse(course);
    setCourseTitle(title);
    setOpen(true);
  };

  const scrollRef = useRef(null);

  return (
    <div className="  py-16   bg-[#f2f3f8]">
      <div className=" flex max-w-7xl px-4 md:px-6 mx-auto  gap-4 flex-col lg:flex-row">
        <div className="lg:w-[45%]   flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-[#9a0104] lg:mb-2">
              {t("course_content.title")}
            </h1>
            {/* <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-[#9a0104] lg:mb-2">
              {t("course_content.heading")}
            </h1> */}
            <h1
              className="text-2xl md:text-4xl lg:text-[2.5rem]   lg:leading-14  text-[#011753] mb-6"
              dangerouslySetInnerHTML={{ __html: t("course_content.subtitle") }}
            ></h1>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-start ">
            <Link to="/participation-variants">
              <button className="bg-[#001554] cursor-pointer text-white px-20 py-2.5 rounded-full font-semibold hover:bg-[#001554] transition-all duration-300 text-xl">
                Выберите курс
              </button>
            </Link>
          </div>
        </div>

        <div className="relative  lg:w-[55%]    overflow-hidden  grid grid-cols-2 gap-4 md:gap-6  ">
          {cardData.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenDialog(item.dialogText, item.dialogHead)}
              className={`cursor-pointer ${item.bgcolor} transition-all duration-300 p-4 md:p-8 rounded-xl md:rounded-3xl text-white flex flex-col justify-between items-center space-y-3 h-full`}
            >
              <div className=" ">
                <img
                  src={item.image}
                  alt="course_image"
                  className="w-32 md:w-56 h-36 md:h-60 object-cover rounded-xl md:rounded-3xl "
                />
              </div>
              <h3
                className="font-bold text-center  md:text-2xl md:mb-5"
                dangerouslySetInnerHTML={{
                  __html: t(`course_content.${item.button}`),
                }}
              ></h3>
              <span className="px-5 py-1 text-xs md:text-base bg-white/20 text-white font-bold rounded-full">
                17 дней
              </span>
            </div>
          ))}

          {/* Custom Navigation */}
          {/* <div className="mt-10 lg:mt-6 justify-center flex bg-[#ffffff] w-fit lg:absolute left-32 xl:left-32 bottom-0  mx-auto px-3 py-2 rounded-full gap-3 custom-left">
            <button className="swiper-button-prev-custom bg-[#d9d9d9]  p-2 rounded-full hover:bg-gray-400 cursor-pointer text-black transition-all duration-300">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next-custom bg-[#d9d9d9]  p-2 rounded-full hover:bg-gray-400 cursor-pointer text-black transition-all duration-300">
              <FaChevronRight />
            </button>
          </div> */}
        </div>

        <div className="flex lg:hidden mt-10 lg:mt-0 justify-center lg:justify-start ">
          <Link to="/participation-variants">
            <button className="bg-[#001554] text-white px-20 py-2.5 rounded-full font-semibold hover:bg-[#001554] transition-all duration-300 text-xl">
              Выбери курс
            </button>
          </Link>
        </div>

        {/* Modal */}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-4xl !max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              <h2
                className="text-2xl font-bold"
                dangerouslySetInnerHTML={{ __html: courseTitle }}
              ></h2>
            </DialogTitle>
          </DialogHeader>
          <div className="lg:text-lg text-gray-700  space-y-2 mt-4">
            <span dangerouslySetInnerHTML={{ __html: selectedCourse }}></span>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowForm(true)}
                className="w-full md:w-auto bg-[#1e3b8b] hover:bg-blue-950 cursor-pointer text-white font-semibold py-3 px-8 rounded-4xl"
              >
                {t("course_content.submitButton")}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default CourseContent;
