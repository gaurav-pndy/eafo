import { useTranslation } from 'react-i18next';

const photos = [
  { src: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d33bf92459-b8611a49734dc1f87961.png', alt: 'photo1' },
  { src: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bd3e178f31-7bc5fd64f55781ad5970.png', alt: 'photo2' },
  { src: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d34bd49d02-9ab1808d660081c395e5.png', alt: 'photo3' },
  { src: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/65932cbf5e-e657e4dc44d2a4615318.png', alt: 'photo4' },
];

const PhotoGallery = ({ onImageClick }) => {
  const { t } = useTranslation();

  return (
    <div id="photo-gallery" className="mb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">{t('gallery.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((img, idx) => (
          <div key={idx} className="relative group cursor-pointer" onClick={() => onImageClick(idx)}>
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass text-white opacity-0 group-hover:opacity-100 text-2xl"></i>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
          <i className="fa-solid fa-images mr-2"></i>{t('gallery.button')}
        </button>
      </div>
    </div>
  );
};

export { photos };
export default PhotoGallery;
