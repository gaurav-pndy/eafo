import React from 'react';
import { useTranslation } from 'react-i18next';

const CultureSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-10" id="section-culture">
      <div className="order-1 md:order-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-landmark text-blue-700"></i>
          {t('aboutCity.culture.title')}
        </h2>
        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
          {t('aboutCity.culture.description1')}
        </p>
        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
          {t('aboutCity.culture.description2')}
        </p>
      </div>
      <div className="flex items-center justify-center order-2 md:order-2">
        <img 
          className="w-72 h-72 object-cover rounded-xl border border-blue-100 shadow" 
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eafo-magas-culture.jpg" 
          alt={t('aboutCity.culture.imageAlt')} 
        />
      </div>
    </div>
  );
};

export default CultureSection;