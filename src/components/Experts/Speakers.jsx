import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ChevronLeft } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";

const experts = [
  {
    image: "/speakers/ДРУЙ Александр Евгеньевич.jpg",
    nameKey: "experts.speakers.expert1.name",
    titleKey: "experts.speakers.expert1.title",
    locationKey: "experts.speakers.expert1.location",
    fullKey: "experts.speakers.expert1.full",
  },
  {
    image: "/speakers/ГИМРАНОВ Альберт Минусагитович.jpg",
    nameKey: "experts.speakers.expert2.name",
    titleKey: "experts.speakers.expert2.title",
    locationKey: "experts.speakers.expert2.location",
    fullKey: "experts.speakers.expert2.full",
  },
  {
    image: "/speakers/GUPTA Richa.jpg",
    nameKey: "experts.speakers.expert3.name",
    titleKey: "experts.speakers.expert3.title",
    locationKey: "experts.speakers.expert3.location",
    fullKey: "experts.speakers.expert3.full",
  },
  {
    image: "/speakers/ГУЗЬ Александр Олегович.jpg",
    nameKey: "experts.speakers.expert4.name",
    titleKey: "experts.speakers.expert4.title",
    locationKey: "experts.speakers.expert4.location",
    fullKey: "experts.speakers.expert4.full",
  },
  {
    image: "/speakers/IMG_8661.jpg",
    nameKey: "experts.speakers.expert5.name",
    titleKey: "experts.speakers.expert5.title",
    locationKey: "experts.speakers.expert5.location",
    fullKey: "experts.speakers.expert5.full",
  },
  {
    image: "/forum/expert6.jpg",
    nameKey: "experts.speakers.expert6.name",
    titleKey: "experts.speakers.expert6.title",
    locationKey: "experts.speakers.expert6.location",
    fullKey: "experts.speakers.expert6.full",
  },
  {
    image: "/speakers/РАНГАРАДЖАН Венкатеш.png",
    nameKey: "experts.speakers.expert7.name",
    titleKey: "experts.speakers.expert7.title",
    locationKey: "experts.speakers.expert7.location",
    fullKey: "experts.speakers.expert7.full",
  },

  {
    image: "/speakers/ТИМАШКОВ Иван Александрович.jpg",
    nameKey: "experts.speakers.expert10.name",
    titleKey: "experts.speakers.expert10.title",
    locationKey: "experts.speakers.expert10.location",
    fullKey: "experts.speakers.expert10.full",
  },
  {
    image: "/forum/expert11.jpg",
    nameKey: "experts.speakers.expert11.name",
    titleKey: "experts.speakers.expert11.title",
    locationKey: "experts.speakers.expert11.location",
    fullKey: "experts.speakers.expert11.full",
  },
];

const Speakers = () => {
  const { t } = useTranslation();
  const [selectedExpertIndex, setSelectedExpertIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSelectedExpertIndex(index);
    setOpen(true);
  };

  const handlePrev = () => {
    if (selectedExpertIndex !== null) {
      setSelectedExpertIndex(
        (prev) => (prev - 1 + experts.length) % experts.length
      );
    }
  };

  const handleNext = () => {
    if (selectedExpertIndex !== null) {
      setSelectedExpertIndex((prev) => (prev + 1) % experts.length);
    }
  };

  const selectedExpert =
    selectedExpertIndex !== null ? experts[selectedExpertIndex] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-gray-50 px-4 md:px-12"
    >
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
        {t("experts.confirmedTitle")}
      </h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experts.map((expert, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleOpen(idx)}
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={t(expert.nameKey)}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t h-28 pt-6 from-black/90 to-transparent w-full">
                <h4 className="text-2xl font-semibold">{t(expert.nameKey)}</h4>
                <p className="text-sm opacity-90">{t(expert.titleKey)}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-800 mb-2">{t(expert.locationKey)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal using shadcn */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedExpert && (
          <DialogContent className="sm:max-w-2xl ">
            <div className="w-full  flex relative flex-col items-center gap-6">
              <img
                src={selectedExpert.image}
                alt={t(selectedExpert.nameKey)}
                className="w-48 md:w-80 h-48 md:h-80 rounded-full object-cover shadow-md"
              />
              <h4 className="text-2xl md:text-4xl font-bold text-center">
                {t(selectedExpert.nameKey)}
              </h4>
              <p className="text-gray-700 md:text-xl text-center">
                {t(selectedExpert.fullKey)}
              </p>
              <p className="md:text-xl">{t(selectedExpert.locationKey)}</p>

              {/* Navigation Buttons */}
              <div className="flex absolute top-[50%] translate-y-[-50%] justify-between w-[120%] md:w-full">
                {/* <Button variant="outline" onClick={handlePrev}> */}
                <IoChevronBack
                  onClick={handlePrev}
                  className="text-5xl cursor-pointer"
                />

                {/* </Button> */}
                {/* <Button variant="outline" size="icon" onClick={handleNext}> */}
                <IoChevronForward
                  onClick={handleNext}
                  className="text-5xl cursor-pointer"
                />
                {/* </Button> */}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </motion.div>
  );
};

export default Speakers;
