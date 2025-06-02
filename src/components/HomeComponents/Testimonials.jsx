import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.person1.name"),
      review: t("testimonials.person1.review"),
      userImage: t("testimonials.person1.userImage"),
    },
    {
      name: t("testimonials.person2.name"),
      review: t("testimonials.person2.review"),
      userImage: t("testimonials.person2.userImage"),
    },
    {
      name: t("testimonials.person3.name"),
      review: t("testimonials.person3.review"),
      userImage: t("testimonials.person3.userImage"),
    },
    {
      name: t("testimonials.person4.name"),
      review: t("testimonials.person4.review"),
      userImage: t("testimonials.person4.userImage"),
      regalia: t("testimonials.person4.regalia"),
    },
    {
      name: t("testimonials.person5.name"),
      review: t("testimonials.person5.review"),
      userImage: t("testimonials.person5.userImage"),
      regalia: t("testimonials.person4.regalia"),
    },
  ];

  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl  relative mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {t("testimonials.title")}
        </h2>

        <div className="relative ">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            loop={true} // <-- this is required for infinite scrolling
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className=""
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={index}>
                <Card className="flex flex-col bg-red-100 items-center gap-4 p-4 text-center h-full">
                  <img
                    src={review.userImage}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover bg-gray-300"
                    alt={review.name}
                  />
                  <h3 className="font-bold text-xl text-[#1e3a8a]">
                    {review.name}
                  </h3>
                  {/* {review.regalia && (
                    <p className="text-purple-900 text-sm mt-2">
                      {review.regalia}
                    </p>
                  )} */}

                  <Button
                    className="mt-2 rounded-full px-5 border border-gray-400 hover:bg-gray-200 cursor-pointer transition-all font-semibold duration-300"
                    variant="outline"
                    onClick={() => setSelectedReview(review)}
                  >
                    {t("testimonials.button")}
                  </Button>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="button-prev absolute left-2 xl:-left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-5xl">
            <MdArrowBackIos className=" text-[#a21a1c] " />
          </button>
          <button className="button-next absolute -right-1 xl:-right-13 cursor-pointer  top-1/2 transform -translate-y-1/2 z-10  text-5xl">
            <MdArrowForwardIos className=" text-[#a21a1c] " />
          </button>
        </div>
      </div>

      <Dialog
        open={!!selectedReview}
        onOpenChange={() => setSelectedReview(null)}
      >
        <DialogOverlay className="bg-black bg-opacity-25 backdrop-blur-md" />
        <DialogContent className="lg:max-w-[80vw] max-h-[80vh] mx-auto bg-white rounded-lg shadow-lg p-2 lg:p-6 overflow-y-auto">
          {selectedReview && (
            <>
              <img
                src={selectedReview.userImage}
                alt={selectedReview.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
              />
              <div
                dangerouslySetInnerHTML={{ __html: selectedReview.review }}
                className="text-base "
              ></div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Testimonials;
