import React from 'react';

const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl" >
      <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  </section>
);

export default MapSection;
