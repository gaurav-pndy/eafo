import React from 'react';
import StatsGrid from './StatsGrid';
import FeaturesGrid from './FeaturesGrid';
import { useTranslation } from 'react-i18next';

const OverviewSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white" id="course-overview">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img className="rounded-xl shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0a0a940017-5a94c4060786b210ecdb.png" alt="conference" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('courses.overviewTitle')}</h2>
              <p className="text-gray-600 mb-4">{t('courses.overviewContent1')}</p>
              <p className="text-gray-600">{t('courses.overviewContent2')}</p>
            </div>
          </div>
          <StatsGrid />
          <FeaturesGrid />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
