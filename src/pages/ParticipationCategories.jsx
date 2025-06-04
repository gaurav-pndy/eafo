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
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import PreRegisterForm from "@/components/PreRegisterForm";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ParticipationCategories = () => {
  const [activeTab, setActiveTab] = useState("competitive");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        t("participationCategories.tab1.item1.point8"),
      ],
      note: t("participationCategories.tab1.item1.note"),
    },
    {
      id: 2,
      title: t("participationCategories.tab1.item2.heading"),
      desc: t("participationCategories.tab1.item2.desc"),
      dialogHead: t("participationCategories.dialogHead2"),
      description: t("participationCategories.dialogText2"),
      list: [
        t("participationCategories.tab1.item2.point1"),
        t("participationCategories.tab1.item2.point2"),
        t("participationCategories.tab1.item2.point3"),
        t("participationCategories.tab1.item2.point4"),
        t("participationCategories.tab1.item2.point5"),
        t("participationCategories.tab1.item2.point6"),
      ],
      note: t("participationCategories.tab1.item2.note"),
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
        t("participationCategories.tab2.item1.point6"),
        t("participationCategories.tab2.item1.point7"),
      ],
      note: t("participationCategories.tab2.item1.note"),
    },
    {
      id: 2,
      title: t("participationCategories.tab2.item2.heading"),
      desc: t("participationCategories.tab2.item2.desc"),
      dialogHead: t("participationCategories.dialogHead2"),
      description: t("participationCategories.dialogText2"),
      list: [
        t("participationCategories.tab2.item2.point1"),
        t("participationCategories.tab2.item2.point2"),
        t("participationCategories.tab2.item2.point3"),
        t("participationCategories.tab2.item2.point4"),
        t("participationCategories.tab2.item2.point5"),
        t("participationCategories.tab2.item2.point6"),
      ],
      note: t("participationCategories.tab2.item2.note"),
    },
    {
      id: 3,
      title: t("participationCategories.tab2.item3.heading"),
      desc: t("participationCategories.tab2.item3.desc"),
      dialogHead: t("participationCategories.dialogHead2"),
      description: t("participationCategories.dialogText2"),
      list: [
        t("participationCategories.tab2.item3.point1"),
        t("participationCategories.tab2.item3.point2"),
        t("participationCategories.tab2.item3.point3"),
        t("participationCategories.tab2.item3.point4"),
      ],
      note: t("participationCategories.tab2.item2.note"),
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
      <div className="  px-4 max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl  font-bold text-center mb-6">
          {t("participationCategories.heading")}
        </h2>
        <div
          className=" text-lg"
          dangerouslySetInnerHTML={{ __html: t("participationTabs.subtitle2") }}
        ></div>
        {/* <p className=" text-lg">{t("participationTabs.subtitle")}</p> */}
      </div>

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

      {activeTab === "competitive" ? (
        <div className="max-w-7xl p-4 mx-auto text-lg">
          <div
            className="bg-[#f6f6f6] rounded-3xl p-4 md:p-8 mb-8"
            dangerouslySetInnerHTML={{
              __html: t(`participationCategories.tab1.description`),
            }}
          ></div>
          <div className="grid  pt-5 md:grid-cols-2 gap-6 lg:gap-14 mb-8">
            {compData.map((item, index) => (
              <div
                key={item.id}
                className=" mb-4  h-fit  cursor-pointer relative flex flex-col gap-5 justify-between overflow-hidden p-4 bg-[#f6f6f6] md:p-8 rounded-3xl shadow-xl group"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`font-bold `}>{item.title}</h3>
                  {openIndex === index ? (
                    <FaMinus className=" " />
                  ) : (
                    <FaPlus className="" />
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-4  text-gray-800 overflow-hidden">
                        <div>
                          <p>{item.desc}</p>

                          <ul className="  my-6   ">
                            {item.list.map((listItem, idx) => (
                              <li
                                key={idx}
                                className="mb-2 flex gap-4 items-start"
                              >
                                <FaCheck className="text-green-600 shrink-0 translate-y-2" />
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                          <p>{item.note}</p>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => setShowForm(true)}
                            className="bg-[#8B0000] text-white px-5  cursor-pointer py-2 rounded-full font-bold hover:bg-[#A00000] transition-all duration-300 "
                          >
                            Подать заявку
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl p-4 mx-auto text-lg">
          <div
            className="bg-[#f6f6f6] rounded-3xl p-4 md:p-8 mb-8"
            dangerouslySetInnerHTML={{
              __html: t(`participationCategories.tab2.description`),
            }}
          ></div>
          <div className="grid  md:grid-cols-2  gap-6 lg:gap-14 mb-8">
            {nonCompData.map((item, index) => (
              <div
                key={item.id}
                className=" mb-4  h-fit  cursor-pointer relative flex flex-col gap-5 justify-between overflow-hidden p-4 bg-[#f6f6f6] md:p-8 rounded-3xl shadow-xl group"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`font-bold `}>{item.title}</h3>
                  {openIndex === index ? (
                    <FaMinus className=" " />
                  ) : (
                    <FaPlus className="" />
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-4  text-gray-800 overflow-hidden">
                        <div>
                          <p>{item.desc}</p>

                          <ul className="  my-6   ">
                            {item.list.map((listItem, idx) => (
                              <li
                                key={idx}
                                className="mb-2 flex gap-4 items-start"
                              >
                                <FaCheck className="text-green-600 shrink-0 translate-y-2" />
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                          <p>{item.note}</p>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => setShowForm(true)}
                            className="bg-[#8B0000] text-white px-5  cursor-pointer py-2 rounded-full font-bold hover:bg-[#A00000] transition-all duration-300 "
                          >
                            Подать заявку
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div className="text-center mt-10">
        <button
          onClick={() => setShowForm(true)}
          className="bg-white border border-gray-300  px-10 py-3 rounded-full font-bold text-xl hover:bg-gray-200 cursor-pointer transition-all duration-300"
        >
          Подать заявку
        </button>
      </div> */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-4xl !max-h-[80vh] md:!max-h-[90vh] overflow-y-auto">
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
