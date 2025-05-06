import { useState } from "react";
import { useTranslation } from "react-i18next";

const photos = [
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d33bf92459-b8611a49734dc1f87961.png",
    alt: "photo1",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/bd3e178f31-7bc5fd64f55781ad5970.png",
    alt: "photo2",
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
];

const PhotoGallery = ({ onImageClick }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, 4);

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
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass text-white opacity-0 group-hover:opacity-100 text-2xl"></i>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            <i className="fa-solid fa-images mr-2"></i>
            {t("gallery.button")}
          </button>
        </div>
      )}
    </div>
  );
};

export { photos };
export default PhotoGallery;
