import HeroSection from "@/components/Gallery/HeroSection";
import ImageModal from "@/components/Gallery/ImageModal";
import PhotoGallery from "@/components/Gallery/PhotoGallery";
import ProgramArchives from "@/components/Gallery/ProgramArchives";
import { useState } from "react";
import { photos } from "@/components/Gallery/PhotoGallery"; // Import your photos array

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Navigate to the next image
  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }
  };

  // Navigate to the previous image
  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
      );
    }
  };

  // Open image modal with the selected index
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  // Close modal
  const handleClose = () => {
    setCurrentIndex(null);
  };

  return (
    <div className="text-base-content bg-white">
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <ProgramArchives />
          <PhotoGallery onImageClick={handleImageClick} />
        </div>
      </section>

      <ImageModal
        src={currentIndex !== null ? photos[currentIndex].src : null}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default GalleryPage;
