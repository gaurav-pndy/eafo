import React from 'react';
import { useTranslation } from 'react-i18next';

const StatsGrid = () => {
  const { t } = useTranslation();
  const stats = t('courses.stats', { returnObjects: true });

  return (
    <div className="grid md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, i) => (
        <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
