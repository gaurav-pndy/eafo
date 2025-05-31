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
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PreRegisterForm from "@/components/PreRegisterForm";

const ParticipationCategories = () => {
  const [activeTab, setActiveTab] = useState("competitive");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const compData = [
    {
      id: 1,
      title: t("participationCategories.tab1.item1.heading"),
      desc: t("participationCategories.tab1.item1.desc"),
      dialogHead: t("participationCategories.dialogHead1"),
      description: t("participationCategories.dialogText1"),
      list: [
        t("participationCategories.tab1.item1.point1"),
        t("participationCategories.tab1.item1.point2"),
        t("participationCategories.tab1.item1.point3"),
        t("participationCategories.tab1.item1.point4"),
        t("participationCategories.tab1.item1.point5"),
        t("participationCategories.tab1.item1.point6"),
        t("participationCategories.tab1.item1.point7"),
      ],
    },
    {
      id: 2,
      title: t("participationCategories.tab1.item2.heading"),
      desc: t("participationCategories.tab1.item2.desc"),
      dialogHead: t("participationCategories.dialogHead2"),
      description: t("participationCategories.dialogText2"),
      list: [
        t("participationCategories.tab1.item2.point1"),
        t("participationCategories.tab2.item1.point2"),
        t("participationCategories.tab2.item1.point3"),
        t("participationCategories.tab2.item1.point4"),
        t("participationCategories.tab2.item1.point5"),
        t("participationCategories.tab2.item1.point6"),
      ],
    },
  ];

  const nonCompData = [
    {
      id: 1,
      title: t("participationCategories.tab2.item1.heading"),
      desc: t("participationCategories.tab2.item1.desc"),
      dialogHead: t("participationCategories.dialogHead1"),
      description: t("participationCategories.dialogText1"),
      list: [
        t("participationCategories.tab2.item1.point1"),
        t("participationCategories.tab2.item1.point2"),
        t("participationCategories.tab2.item1.point3"),
        t("participationCategories.tab2.item1.point4"),
        t("participationCategories.tab2.item1.point5"),
      ],
    },
    {
      id: 2,
      title: t("participationCategories.tab2.item2.heading"),
      desc: t("participationCategories.tab2.item2.desc"),
      dialogHead: t("participationCategories.dialogHead2"),
      description: t("participationCategories.dialogText2"),
      list: [
        t("participationCategories.tab2.item1.point1"),
        t("participationCategories.tab2.item1.point2"),
        t("participationCategories.tab2.item1.point3"),
        t("participationCategories.tab2.item1.point4"),
        t("participationCategories.tab2.item1.point5"),
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

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
    <div className=" mx-auto py-16  min-h-screen">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl  font-bold text-center mb-12">
          {t("participationCategories.heading")}
        </h2>
        {/* <p className=" text-lg">{t("participationTabs.subtitle")}</p> */}
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-[#f1f1f1] border rounded-full overflow-hidden">
          <button
            onClick={() => setActiveTab("competitive")}
            className={`px-4 md:px-16 text-xs md:text-lg cursor-pointer py-3 font-medium transition-all duration-300 focus:outline-none ${
              activeTab === "competitive"
                ? "bg-[#08154e] text-white"
                : " text-black hover:text-[#08154e]"
            } rounded-full `}
          >
            {t("participationCategories.tab1.heading")}
          </button>
          <button
            onClick={() => setActiveTab("non-competitive")}
            className={`px-4 md:px-16 text-xs py-3 md:text-lg cursor-pointer font-medium transition-all duration-300 focus:outline-none ${
              activeTab === "non-competitive"
                ? "bg-[#08154e] text-white"
                : " text-black hover:text-[#08154e]"
            } rounded-full`}
          >
            {t("participationCategories.tab2.heading")}
          </button>
        </div>
      </div>

      {/* Course Cards */}
      {activeTab === "competitive" ? (
        <div className="max-w-7xl p-4 mx-auto">
          <div
            className="bg-[#f6f6f6] rounded-3xl p-4 md:p-8 mb-8"
            dangerouslySetInnerHTML={{
              __html: t(`participationCategories.tab1.description`),
            }}
          ></div>
          <div className="grid  pt-5 md:grid-cols-2 gap-6 lg:gap-14 mb-8">
            {compData.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-5 justify-between overflow-hidden p-4 md:p-8 rounded-3xl shadow-xl bg-[#f6f6f6] group"
              >
                <div>
                  <h3 className="font-bold mb-4">{item.title}</h3>

                  <p>{item.desc}</p>

                  <ul className="  mt-6  ">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="mb-2 flex gap-4 items-start">
                        <FaCheck className="text-green-600 shrink-0 translate-y-2" />
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      handleOpenDialog(item.description, item.dialogHead)
                    }
                    className="bg-[#d9d9d9] border border-gray-400 hover:bg-gray-300 cursor-pointer transition-all duration-300 px-5 py-2 text-gray-800 rounded-full"
                  >
                    {t(`participationCategories.moreDetails`)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl p-4 mx-auto">
          <div
            className="bg-[#f6f6f6] rounded-3xl p-4 md:p-8 mb-8"
            dangerouslySetInnerHTML={{
              __html: t(`participationCategories.tab2.description`),
            }}
          ></div>
          <div className="grid  md:grid-cols-2 gap-6 lg:gap-14 mb-8">
            {nonCompData.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-5 justify-between overflow-hidden p-4 bg-[#f6f6f6] md:p-8 rounded-3xl shadow-xl group"
              >
                <div>
                  <h3 className="font-bold mb-4">{item.title}</h3>

                  <p>{item.desc}</p>

                  <ul className="  mt-6">
                    {item.list.map((listItem, idx) => (
                      <li key={idx} className="mb-2 flex gap-2 items-start">
                        <FaCheck className="text-green-600 shrink-0 translate-y-2" />
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      handleOpenDialog(item.description, item.dialogHead)
                    }
                    className="bg-[#d9d9d9] border border-gray-400 hover:bg-gray-300 cursor-pointer transition-all duration-300 px-5 py-2 text-gray-800 rounded-full"
                  >
                    {t(`participationCategories.moreDetails`)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => setShowForm(true)}
          className="bg-white border border-gray-300  px-10 py-3 rounded-full font-bold text-xl hover:bg-gray-200 cursor-pointer transition-all duration-300"
        >
          Подать заявку
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-4xl !max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              <h2 dangerouslySetInnerHTML={{ __html: courseTitle }}></h2>
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

export default ParticipationCategories;
