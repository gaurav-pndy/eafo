import React from "react";

const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.2293286291965!2d37.502178076568676!3d55.80661898784504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549ed4e5b5ff1%3A0xb937801ca086121a!2sEurasian%20Federation%20of%20Oncology!5e0!3m2!1sen!2sin!4v1745592265892!5m2!1sen!2sin"
          // style="border:0;"
          frameBorder={0}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default MapSection;
