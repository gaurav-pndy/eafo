const ImageModal = ({ src, onClose }) => {
    if (!src) return null;
  
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={onClose}>
        <div className="max-w-4xl mx-auto p-4 relative">
          <img src={src} alt="preview" className="max-h-[80vh] w-auto" />
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
    );
  };
  
  export default ImageModal;
  