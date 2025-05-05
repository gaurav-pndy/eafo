import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const VideoShowcase = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStart, setSliderStart] = useState(0); // For sliding effect

  const videos = [
    { id: "qZo1EijVMxY", title: t("video.title1") },
    { id: "UoHnhj7Gzf4", title: t("video.title2") },
    { id: "hwZi2iLTlu0", title: t("video.title3") },
    { id: "c_4SK4thQ3w", title: t("video.title4") },
    { id: "o1AHhQyC-0A", title: t("video.title5") },
    { id: "wQe390RRLMs", title: t("video.title6") },
  ];

  const visibleCount = 3; // Thumbnails to show at once

  const handleSlide = (direction) => {
    const total = videos.length;
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;

    setActiveIndex(nextIndex);

    // Update slider window if necessary
    if (direction === "next" && nextIndex >= sliderStart + visibleCount) {
      setSliderStart((prev) => (prev + 1) % total);
    } else if (direction === "prev" && nextIndex < sliderStart) {
      setSliderStart((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("video.title")}
        </h2>

        {/* Main Video */}
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8 bg-gray-100">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videos[activeIndex].id}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h3 className="text-xl font-semibold mb-8 text-center">
          {videos[activeIndex].title}
        </h3>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => handleSlide("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-100"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Row */}
          <div className="overflow-hidden px-10">
            <div
              className="flex transition-transform duration-500 gap-4"
              style={{
                transform: `translateX(-${
                  sliderStart * (100 / visibleCount)
                }%)`,
                width: `${(videos.length * 100) / visibleCount}%`,
              }}
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full max-w-[calc(100%/${visibleCount})] cursor-pointer group transition-all ${
                    index === activeIndex
                      ? "scale-105  pt-2 bg-white"
                      : "opacity-80 hover:opacity-100"
                  } rounded-lg`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg shadow-sm relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p
                    className={`mt-2 text-sm text-center ${
                      index === activeIndex
                        ? "font-semibold text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleSlide("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-100"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
