import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnerGrid = ({ id, titleKey, logos }) => {
  const { t } = useTranslation();

  return (
    <div id={id} className="space-y-8">
        <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-5">{t(titleKey)}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={logo.src} alt={logo.alt} className="w-full h-24 object-contain" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default PartnerGrid;
