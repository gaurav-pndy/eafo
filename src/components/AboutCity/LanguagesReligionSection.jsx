import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguagesReligionSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-10" id="section-languages-religion">
      <div className="flex items-center justify-center order-2 md:order-1">
        <img 
          className="w-72 h-72 object-cover rounded-xl border border-blue-100 shadow" 
          src="/2.jpg" 
          alt={t('aboutCity.languagesReligion.imageAlt')} 
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-language text-blue-700"></i>
          {t('aboutCity.languagesReligion.title')}
        </h2>
        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
          {t('aboutCity.languagesReligion.languages')}
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t('aboutCity.languagesReligion.religions')}
        </p>
      </div>
    </div>
  );
};

export default LanguagesReligionSection;