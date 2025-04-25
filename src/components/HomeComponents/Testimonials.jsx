import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Navigation module

const testimonials = [
  {
    nameKey: "testimonials.drPetrov.name",
    titleKey: "testimonials.drPetrov.title",
    quoteKey: "testimonials.drPetrov.quote",
    image: "/testimonials/alumni1.jpg",
  },
  {
    nameKey: "testimonials.drIvanova.name",
    titleKey: "testimonials.drIvanova.title",
    quoteKey: "testimonials.drIvanova.quote",
    image: "/testimonials/alumni2.jpg",
  },
  {
    nameKey: "testimonials.drVolkov.name",
    titleKey: "testimonials.drVolkov.title",
    quoteKey: "testimonials.drVolkov.quote",
    image: "/testimonials/alumni3.jpg",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-white overflow-x-hidden"
    >
      <div className="max-w-7xl  relative mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {t("testimonials.title")}
        </h2>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={false} // Disable default navigation
          modules={[Autoplay, Navigation]} // Include the Navigation module
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          className=" overflow-x-hidden "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="pb-4 md:p-5"
              // Added mx-2 (horizontal margin)
            >
              <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-md flex flex-col gap-3 z-10 mx-2">
                <img
                  src={testimonial.image}
                  alt={t(testimonial.nameKey)}
                  className="w-16 md:w-20 h-16 md:h-20 rounded-full object-cover"
                />
                <div>
                  <FaQuoteLeft className="text-[#cdd4e5] text-3xl mb-2" />
                  <p className="text-gray-700 md:text-lg">
                    “{t(testimonial.quoteKey)}”
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">{t(testimonial.nameKey)}</p>
                  <p className="text-sm text-gray-500">
                    {t(testimonial.titleKey)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex z-10 justify-between pr-8 top-[50%] translate-y-[-50%] absolute w-[98vw] mx-auto left-[50%] translate-x-[-50%] md:w-full">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="text-gray-600 text-4xl cursor-pointer absolute left-0 md:-left-5"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="text-gray-600 text-4xl cursor-pointer absolute right-0 md:-right-5"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
