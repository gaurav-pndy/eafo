import React from "react";

const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="w-full hidden md:block h-[400px] rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Ab76de160a840684b42b149f954d8a6413f73fe47f64a0d7c725d80f5dd10956d&amp;source=constructor"
          width="1055"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-full md:hidden h-[400px] rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Ab76de160a840684b42b149f954d8a6413f73fe47f64a0d7c725d80f5dd10956d&amp;source=constructor"
          width="474"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
);

export default MapSection;
