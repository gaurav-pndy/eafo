import React from "react";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Chairmen = () => {
  const { t } = useTranslation();
  // Doctor data
  const doctors = [
    {
      name: t("chairmen.chairman1.name"),
      details: t("chairmen.chairman1.details"),
      location: t("chairmen.chairman1.location"),
      imageUrl: "/doctors/image4.avif",
    },
    {
      name: t("chairmen.chairman2.name"),
      details: t("chairmen.chairman2.details"),
      location: t("chairmen.chairman2.location"),
      imageUrl: "/doctors/image5.avif",
    },
    {
      name: t("chairmen.chairman3.name"),
      details: t("chairmen.chairman3.details"),
      location: t("chairmen.chairman3.location"),
      imageUrl: "/doctors/image6.avif",
    },
    {
      name: t("chairmen.chairman4.name"),
      details: t("chairmen.chairman4.details"),
      location: t("chairmen.chairman4.location"),
      imageUrl: "/doctors/image7.avif",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 xl:px-0">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Председатели:</h2>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          //   pagination={{
          //     clickable: true,
          //     dynamicBullets: true,
          //   }}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-full"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[26rem]">
                {/* Doctor Image */}
                <img
                  src={doctor.imageUrl}
                  alt={`Dr. ${doctor.name}`}
                  className="w-full h-full object-cover"
                />

                {/* Info Card */}
                <div className="absolute bottom-2 left-2 right-2 bg-white rounded-2xl p-2 shadow-md">
                  <h3 className="text-lg font-bold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600">{doctor.details}</p>
                  <p className="text-xs text-gray-600">{doctor.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons can be added here if needed */}
      </div>
    </div>
  );
};

export default Chairmen;
