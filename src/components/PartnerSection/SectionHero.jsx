import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionHero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('partners.heroTitle')}</h1>
        <p className="text-xl max-w-3xl mx-auto">{t('partners.heroSubtitle')}</p>
      </div>
    </section>
  );
};

export default SectionHero;
