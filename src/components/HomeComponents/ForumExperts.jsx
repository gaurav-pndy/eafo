import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Navigation module
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const experts = [
  {
    image: "/forum/expert1.jpg",
    nameKey: "forum.expert1.name",
    titleKey: "forum.expert1.title",
  },
  {
    image: "/forum/expert2.jpg",
    nameKey: "forum.expert2.name",
    titleKey: "forum.expert2.title",
  },
  {
    image: "/forum/expert3.jpg",
    nameKey: "forum.expert3.name",
    titleKey: "forum.expert3.title",
  },
  {
    image: "/forum/expert4.jpg",
    nameKey: "forum.expert4.name",
    titleKey: "forum.expert4.title",
  },
  {
    image: "/forum/expert5.jpg",
    nameKey: "forum.expert5.name",
    titleKey: "forum.expert5.title",
  },
  {
    image: "/forum/expert6.jpg",
    nameKey: "forum.expert6.name",
    titleKey: "forum.expert6.title",
  },
  {
    image: "/forum/expert7.jpg",
    nameKey: "forum.expert7.name",
    titleKey: "forum.expert7.title",
  },
  {
    image: "/forum/expert8.png",
    nameKey: "forum.expert8.name",
    titleKey: "forum.expert8.title",
  },
  {
    image: "/forum/expert9.jpg",
    nameKey: "forum.expert9.name",
    titleKey: "forum.expert9.title",
  },
  {
    image: "/forum/expert10.jpg",
    nameKey: "forum.expert10.name",
    titleKey: "forum.expert10.title",
  },
  {
    image: "/forum/expert11.jpg",
    nameKey: "forum.expert11.name",
    titleKey: "forum.expert11.title",
  },
];

const ForumExperts = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-gradient-to-b from-white via-[#f9f9f9] to-white overflow-hidden"
    >
      <div className="max-w-6xl relative mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          {t("forum.title")}
        </h2>

        {/* Desktop and Mobile slider with custom navigation arrows */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={false} // Disable default navigation
          modules={[Autoplay, Navigation]} // Include the Navigation module
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="overflow-hidden"
        >
          {experts.map((expert, index) => (
            <SwiperSlide key={index}>
              <div className="text-center overflow-hidden">
                <img
                  src={expert.image}
                  alt={t(expert.nameKey)}
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-md overflow-x-hidden"
                />
                <p className="mt-6 mb-2 text-lg font-semibold">
                  {t(expert.nameKey)}
                </p>
                <p className=" text-gray-600">{t(expert.titleKey)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation arrows */}
        <div className="flex z-10 justify-between pr-8 top-[50%] translate-y-[-50%] absolute   w-full">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="text-gray-600 text-4xl cursor-pointer "
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="text-gray-600 text-4xl cursor-pointer "
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ForumExperts;
