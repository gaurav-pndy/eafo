import HeroSection from '@/components/Gallery/HeroSection';
import ImageModal from '@/components/Gallery/ImageModal';
import PhotoGallery from '@/components/Gallery/PhotoGallery';
import ProgramArchives from '@/components/Gallery/ProgramArchives';
import { useState } from 'react';


const GalleryPage = () => {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <div className="text-base-content bg-white">
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <ProgramArchives />
          <PhotoGallery onImageClick={(src) => setModalSrc(src)} />
        </div>
      </section>
      <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </div>
  );
};

export default GalleryPage;
