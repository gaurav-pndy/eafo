import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="participation-hero" className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('participation.hero.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('participation.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;