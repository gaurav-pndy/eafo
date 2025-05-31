import React from 'react';
import { useTranslation } from 'react-i18next';

const CityMapSection = () => {
  const { t } = useTranslation();

  return (
    <section id="city-map-section" className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
        <i className="fa-solid fa-map-location-dot text-blue-700"></i>
        {t('aboutCity.map.title')}
      </h2>
      <div className="rounded-xl overflow-hidden shadow-lg border border-blue-100 h-[400px]">
        <iframe 
          className="w-full h-full" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.6546471170157!2d44.81321147793492!3d43.17071957112167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404e8e5b4df5a013%3A0x8f14b1c2b5f7b0b0!2z0JzQntCj0J7QkdCaLCDQmtC-0LvQuNGG0LAg0JjQvtGB0LrQstCwLCA2LCDQn9C-0YHRltC80L7QvNC4LCDQodC10YDQvdC10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KDQtdGB0L8u!5e0!3m2!1sru!2sru!4v1717422729428!5m2!1sru!2sru" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={t('aboutCity.map.iframeTitle')}
        ></iframe>
      </div>
    </section>
  );
};

export default CityMapSection;