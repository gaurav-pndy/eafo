import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChalkboardTeacher, FaMicroscope, FaUsers, FaLandmark } from 'react-icons/fa';

const iconMap = [
  <FaChalkboardTeacher className="text-3xl text-blue-900 mb-4" />,
  <FaMicroscope className="text-3xl text-blue-900 mb-4" />,
  <FaUsers className="text-3xl text-blue-900 mb-4" />,
  <FaLandmark className="text-3xl text-blue-900 mb-4" />,
];

const FeaturesGrid = () => {
  const { t } = useTranslation();
  const features = t('courses.features', { returnObjects: true });

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {features.map((feature, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
          {iconMap[i]}
          <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
