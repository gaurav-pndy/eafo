import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">{t('partners.introText')}</p>
      </div>
    </section>
  );
};

export default SectionIntro;
