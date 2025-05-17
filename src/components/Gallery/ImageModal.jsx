import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageModal = ({ src, onClose, onNext, onPrev }) => {
  if (!src) return null;

  // Keyboard navigation (left and right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="max-w-4xl mx-auto p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="preview"
          className="max-h-[80vh] w-auto transition-all duration-300"
        />

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          <i className="fa-solid fa-times"></i>
        </button>

        {/* Previous Button */}
        <button
          className="absolute left-2 lg:-left-10 top-1/2 transform -translate-y-1/2 text-white cursor-pointer "
          onClick={onPrev}
        >
          <IoIosArrowBack className="text-5xl" />
        </button>

        {/* Next Button */}
        <button
          className="absolute right-2 lg:-right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer "
          onClick={onNext}
        >
          <IoIosArrowForward className="text-5xl" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
