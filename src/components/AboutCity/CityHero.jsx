import React from 'react';
import { useTranslation } from 'react-i18next';

const CityHero = () => {
  const { t } = useTranslation();

  return (
    <section id="city-hero" className="relative h-[390px] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eafo-magas-city-hero.jpg" 
          alt={t('aboutCity.hero.alt')} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-2">
          {t('aboutCity.hero.title')}
        </h1>
        <p className="text-2xl text-white/90 font-medium">
          {t('aboutCity.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default CityHero;