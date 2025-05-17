import { useState } from "react";
import { useTranslation } from "react-i18next";

const photos = [
  {
    src: "/gallery/photo1.jpg",
    alt: "photo1",
  },
  {
    src: "/gallery/photo2.jpg",
    alt: "photo2",
  },
  {
    src: "/gallery/photo3.jpg",
    alt: "photo3",
  },
  {
    src: "/gallery/photo4.jpg",
    alt: "photo4",
  },
  {
    src: "/gallery/photo5.jpg",
    alt: "photo5",
  },
  {
    src: "/gallery/photo6.jpg",
    alt: "photo6",
  },
  {
    src: "/gallery/photo7.jpg",
    alt: "photo7",
  },
  {
    src: "/gallery/photo8.jpg",
    alt: "photo8",
  },
  {
    src: "/gallery/photo9.jpg",
    alt: "photo9",
  },
  {
    src: "/gallery/photo10.jpg",
    alt: "photo10",
  },
  {
    src: "/gallery/photo11.jpg",
    alt: "photo11",
  },
  {
    src: "/gallery/photo12.jpg",
    alt: "photo12",
  },
  {
    src: "/gallery/photo122.jpg",
    alt: "photo12",
  },
  {
    src: "/gallery/photo13.jpg",
    alt: "photo13",
  },
  {
    src: "/gallery/photo14.jpg",
    alt: "photo14",
  },
  {
    src: "/gallery/photo15.jpg",
    alt: "photo15",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d34bd49d02-9ab1808d660081c395e5.png",
    alt: "photo3",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/65932cbf5e-e657e4dc44d2a4615318.png",
    alt: "photo4",
  },
  {
    src: "/gallery/photo16.jpg",
    alt: "photo16",
  },
  {
    src: "/gallery/photo17.jpg",
    alt: "photo17",
  },
  {
    src: "/gallery/photo18.jpg",
    alt: "photo18",
  },
  {
    src: "/gallery/photo19.jpg",
    alt: "photo19",
  },
  {
    src: "/gallery/photo20.jpg",
    alt: "photo20",
  },
  {
    src: "/gallery/photo21.jpg",
    alt: "photo21",
  },
  {
    src: "/gallery/photo22.jpg",
    alt: "photo22",
  },
  {
    src: "/gallery/photo23.jpg",
    alt: "photo23",
  },
  {
    src: "/gallery/photo24.jpg",
    alt: "photo24",
  },
  {
    src: "/gallery/photo25.jpg",
    alt: "photo25",
  },
  {
    src: "/gallery/photo26.jpg",
    alt: "photo26",
  },
  {
    src: "/gallery/photo27.jpg",
    alt: "photo27",
  },
  {
    src: "/gallery/photo28.jpg",
    alt: "photo28",
  },
  {
    src: "/gallery/photo29.jpg",
    alt: "photo29",
  },
  {
    src: "/gallery/photo30.jpg",
    alt: "photo30",
  },
  {
    src: "/gallery/photo31.jpg",
    alt: "photo31",
  },
  {
    src: "/gallery/photo32.jpg",
    alt: "photo32",
  },
  {
    src: "/gallery/photo33.jpg",
    alt: "photo33",
  },
  {
    src: "/gallery/photo34.jpg",
    alt: "photo34",
  },
  {
    src: "/gallery/photo35.jpg",
    alt: "photo35",
  },
  {
    src: "/gallery/photo36.jpg",
    alt: "photo36",
  },
  {
    src: "/gallery/photo37.jpg",
    alt: "photo37",
  },
  {
    src: "/gallery/photo38.jpg",
    alt: "photo38",
  },
  {
    src: "/gallery/photo39.jpg",
    alt: "photo39",
  },
  {
    src: "/gallery/photo40.jpg",
    alt: "photo40",
  },
  {
    src: "/gallery/photo41.jpg",
    alt: "photo41",
  },
  {
    src: "/gallery/photo42.jpg",
    alt: "photo42",
  },
  {
    src: "/gallery/photo43.jpg",
    alt: "photo43",
  },
  {
    src: "/gallery/photo44.jpg",
    alt: "photo44",
  },
  {
    src: "/gallery/photo45.jpg",
    alt: "photo45",
  },
  {
    src: "/gallery/photo46.jpg",
    alt: "photo46",
  },
  {
    src: "/gallery/photo47.jpg",
    alt: "photo47",
  },
  {
    src: "/gallery/photo48.jpg",
    alt: "photo48",
  },
  {
    src: "/gallery/photo49.jpg",
    alt: "photo49",
  },
  {
    src: "/gallery/photo50.jpg",
    alt: "photo50",
  },
];

const PhotoGallery = ({ onImageClick }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, 8);

  return (
    <div id="photo-gallery" className="mb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        {t("gallery.title")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visiblePhotos.map((img, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer"
            onClick={() => onImageClick(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-40 md:h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass text-white opacity-0 group-hover:opacity-100 text-2xl"></i>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
        >
          <i
            className={`fa-solid ${
              showAll ? "fa-chevron-up" : "fa-images"
            } mr-2`}
          />
          {showAll ? t("gallery.showLess") : t("gallery.button")}
        </button>
      </div>
    </div>
  );
};

export { photos };
export default PhotoGallery;
