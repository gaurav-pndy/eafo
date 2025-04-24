import React from 'react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-blue-900 text-white text-center" id="course-cta">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t('courses.ctaTitle')}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t('courses.ctaDesc')}</p>
        <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-100 transition duration-300">
          {t('courses.applyBtn')}
        </button>
      </div>
    </section>
  );
};

export default CTASection;
