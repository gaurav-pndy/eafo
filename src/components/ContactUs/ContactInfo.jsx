import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaVk, FaYoutube } from 'react-icons/fa';

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-900">{t('contactUs.getInTouch')}</h3>
        <p className="text-gray-600">{t('contactUs.contactSubtitle')}</p>
      </div>
      <div className="flex items-start space-x-4">
        <i className="fa-solid fa-phone text-blue-900 mt-1"></i>
        <div>
          <h4 className="font-semibold">{t('contactUs.phone')}</h4>
          <p className="text-gray-600">+7-985-125-7788</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <i className="fa-solid fa-envelope text-blue-900 mt-1"></i>
        <div>
          <h4 className="font-semibold">{t('contactUs.email')}</h4>
          <p className="text-gray-600">path@eafo.info</p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold">{t('contactUs.socialMedia')}</h4>
        <div className="flex space-x-4">
  <span className="text-blue-900 hover:text-blue-700 cursor-pointer">
    <FaVk className="text-2xl" />
  </span>
  <span className="text-blue-900 hover:text-blue-700 cursor-pointer">
    <FaYoutube className="text-2xl" />
  </span>
</div>
      </div>
    </div>
  );
};

export default ContactInfo;
