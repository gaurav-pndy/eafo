import React from 'react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">{t('partners.cta.title')}</h2>
        <p className="text-xl text-gray-600 mb-8">{t('partners.cta.subtitle')}</p>
        <button className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300">
          {t('partners.cta.button')}
        </button>
      </div>
    </section>
  );
};

export default CTASection;
