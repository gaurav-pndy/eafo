import React from 'react';
import { useTranslation } from 'react-i18next';

const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="section-location" className="mb-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-blue-700"></i>
            {t('aboutCity.location.title')}
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            {t('aboutCity.location.description')}
          </p>
        </div>
        <div className="flex-1 max-w-md">
          <div className="rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <img 
              className="w-full h-64 object-cover" 
              src="/1.jpg" 
              alt={t('aboutCity.location.imageAlt')} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;