import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PreRegisterForm from "../PreRegisterForm";
import { Link } from "react-router-dom";

const ParticipationTabs = () => {
  const [activeTab, setActiveTab] = useState("thematic-seminars");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const coursesData = [
    {
      id: 1,
      title: t("participationTabs.tab1.item1.title"),
      image: "/participation/tab1img1.jpg",
      dialogHead: t("participationTabs.tab1.item1.dialogHead"),
      description: t("participationTabs.tab1.item1.dialogText"),
    },
    {
      id: 1,
      title: t("participationTabs.tab1.item2.title"),
      image: "/participation/tab1img2.jpg",
      dialogHead: t("participationTabs.tab1.item2.dialogHead"),

      description: t("participationTabs.tab1.item2.dialogText"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  const courses = [
    {
      title: "button3",
      duration: t("course_content.duration3"),
      image: "/courses/image3.png",
      bgcolor: "bg-[#00134d]",
      dialogHead: t("course_content.dialogHead3"),

      dialogText: t("course_content.text3"),
      styles: "absolute  h-full   object-cover pointer-events-none ",
    },
    {
      title: "button4",
      duration: t("course_content.duration4"),
      image: "/courses/image4.png",
      bgcolor: "bg-[#4e7aff]",
      dialogHead: t("course_content.dialogHead4"),

      dialogText: t("course_content.text4"),
      styles:
        " absolute w-[90%] bottom-0 left-1/2 translate-x-[-50%]   object-cover pointer-events-none   ",
    },
    {
      title: "button5",
      duration: t("course_content.duration5"),
      image: "/courses/image5.png",
      bgcolor: "bg-[#760000]",
      dialogHead: t("course_content.dialogHead5"),

      dialogText: t("course_content.text5"),
      styles:
        " absolute  bottom-0 left-1/2 translate-x-[-50%]  object-cover pointer-events-none  ",
    },
    {
      title: "button6",
      duration: t("course_content.duration6"),
      image: "/courses/image6.png",
      bgcolor: "bg-[#9e9484]",
      dialogHead: t("course_content.dialogHead6"),

      dialogText: t("course_content.text6"),
      styles:
        " absolute -bottom-5 md:-bottom-10 left-1/2 translate-x-[-50%]  object-cover pointer-events-none  ",
    },
    {
      title: "button7",
      duration: t("course_content.duration7"),
      image: "/courses/image7.png",
      bgcolor: "bg-[#a16e30]",
      dialogHead: t("course_content.dialogHead7"),

      dialogText: t("course_content.text7"),
      styles:
        " absolute w-full bottom-0 left-1/2 translate-x-[-50%] h-52 md:h-60 object-cover pointer-events-none  ",
    },
    {
      title: "button8",
      duration: t("course_content.duration8"),
      image: "/courses/image8.png",
      bgcolor: "bg-[#402500]",
      dialogHead: t("course_content.dialogHead8"),

      dialogText: t("course_content.text8"),
      styles:
        " absolute  bottom-0 h-72 md:h-90 -left-14  object-cover pointer-events-none  ",
    },
    {
      title: "button9",
      duration: t("course_content.duration9"),
      image: "/courses/image9.png",
      bgcolor: "bg-[#312f2f]",
      dialogHead: t("course_content.dialogHead9"),

      dialogText: t("course_content.text9"),
      styles:
        " absolute h-72 md:h-90 w-full -bottom-14 md:-bottom-20 left-0   object-cover pointer-events-none  ",
    },
    {
      title: "button10",
      duration: t("course_content.duration10"),
      image: "/courses/image10.png",
      bgcolor: "bg-[#4e6c6f]",
      dialogHead: t("course_content.dialogHead10"),

      dialogText: t("course_content.text10"),
      styles:
        " absolute  bottom-4 left-1/2 translate-x-[-50%]  object-cover pointer-events-none  ",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");

  const handleOpenDialog = (course, title) => {
    setSelectedCourse(course);
    setCourseTitle(title);
    setOpen(true);
  };

  useEffect(() => {
    if (showForm) {
      setOpen(false);
    }
  }, [showForm]);

  return (
    <div className=" mx-auto py-6  min-h-screen">
      {/* Header */}
      <div className=" mb-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl  font-bold text-center mb-6">
          {t("participationTabs.title")}
        </h2>
        <div
          className=" text-lg"
          dangerouslySetInnerHTML={{ __html: t("participationTabs.subtitle1") }}
        ></div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-[#f1f1f1] border rounded-full overflow-hidden">
          <button
            onClick={() => setActiveTab("full-programs")}
            className={`px-4 md:px-16 text-xs md:text-lg cursor-pointer py-3 font-medium transition-all duration-300 focus:outline-none ${
              activeTab === "full-programs"
                ? "bg-[#08154e] text-white"
                : " text-black hover:text-[#08154e]"
            } rounded-full `}
          >
            {t("participationTabs.tab1.heading")}
          </button>
          <button
            onClick={() => setActiveTab("thematic-seminars")}
            className={`px-4 md:px-16 text-xs py-3 md:text-lg cursor-pointer font-medium transition-all duration-300 focus:outline-none ${
              activeTab === "thematic-seminars"
                ? "bg-[#08154e] text-white"
                : " text-black hover:text-[#08154e]"
            } rounded-full`}
          >
            {t("participationTabs.tab2.heading")}
          </button>
        </div>
      </div>

      {/* Course Cards */}
      {activeTab === "full-programs" ? (
        <div className="grid max-w-6xl p-4 mx-auto md:grid-cols-2 gap-6 mb-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="relative overflow-hidden rounded-3xl shadow-lg group"
            >
              <div className=" relative">
                {/* Simulated image with medical professional */}
                <div className=" flex items-center justify-center">
                  <img src={course.image} alt="" className="w-full h-full" />
                </div>

                {/* Course Title Overlay */}
                <div className="absolute bottom-0 w-full bg-black/50 px-6 xl:px-8 py-4 xl:py-5 flex items-center justify-between">
                  <h3 className="text-white text-lg lg:text-2xl font-bold ">
                    {course.title}
                  </h3>
                  <button
                    onClick={() =>
                      handleOpenDialog(course.description, course.dialogHead)
                    }
                    className="bg-white cursor-pointer px-5 lg:text-lg py-1.5 rounded-full"
                  >
                    {t("participationTabs.moreDetails")}
                  </button>
                </div>

                {/* More Details Button */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: ".swiper-button-next-custom2",
            prevEl: ".swiper-button-prev-custom2",
          }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.1,
              spaceBetween: 50,
            },
          }}
          className=" !py-10 !pb-20 "
        >
          {courses.map((course, index) => {
            const isActive = index === activeIndex % courses.length;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-4xl overflow-hidden transition-all  duration-500 ease-in-out cursor-pointer h-80 md:h-96 ${
                    isActive ? "scale-110 z-10" : "scale-95"
                  }`}
                >
                  <div
                    onClick={() =>
                      handleOpenDialog(course.dialogText, course.dialogHead)
                    }
                    className={`rounded-3xl p-4 px-3 relative ${course.bgcolor} shadow-md overflow-hidden`}
                    style={{
                      height: "100%",
                      textAlign: "center",
                      borderRadius: "2rem",
                    }}
                  >
                    {/* Background Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className={course.styles}
                      style={{
                        zIndex: 0,
                      }}
                    />

                    {course.bgcolor === "bg-[#a16e30]" && (
                      <div className="h-20  inset-0 top-28 md:top-36 absolute bottom-0 bg-gradient-to-b from-[#a16e30] from-10%  to-transparent"></div>
                    )}

                    {/* Overlay (Text Content) */}
                    <div className="relative z-10">
                      <h3
                        className="text-white text-lg md:text-2xl mb-2  font-bold leading-tight"
                        dangerouslySetInnerHTML={{
                          __html: t(`course_content.${course.title}`),
                        }}
                      ></h3>
                      {isActive && (
                        <span className="px-6 py-1 text-xs md:text-base bg-white/20 text-white font-bold rounded-full">
                          {course.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex  z-30 bg-[#ffffff] w-fit mx-auto px-3 py-2 rounded-full gap-3">
            <button className="swiper-button-prev-custom2 bg-[#d9d9d9]  p-2 rounded-full hover:bg-gray-400 cursor-pointer text-black transition-all duration-300">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next-custom2 bg-[#d9d9d9]  p-2 rounded-full hover:bg-gray-400 cursor-pointer text-black transition-all duration-300">
              <FaChevronRight />
            </button>
          </div>
        </Swiper>
      )}

      <div className="mt-16 mb-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl  font-bold text-center mb-6">
          {t("participationTabs.title2")}
        </h2>
        <div
          className=" text-lg"
          dangerouslySetInnerHTML={{ __html: t("participationTabs.subtitle2") }}
        ></div>
      </div>
      {/* Categories Button */}
      <div className="text-center mt-14">
        <Link to="/categories-of-participation">
          <button className="bg-white border border-gray-300  px-10 py-3 rounded-full font-bold text-xl hover:bg-gray-200 cursor-pointer transition-all duration-300">
            Категории участия
          </button>
        </Link>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-4xl !max-h-[80vh] md:!max-h-[90vh] overflow-y-auto">
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

export default ParticipationTabs;
