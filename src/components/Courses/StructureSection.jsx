import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaCertificate } from 'react-icons/fa';

const StructureSection = () => {
  const { t } = useTranslation();
  const programItems = t('courses.programItems', { returnObjects: true });
  const certItems = t('courses.certItems', { returnObjects: true });

  return (
    <section className="py-16 bg-gray-50" id="course-structure">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('courses.structureTitle')}</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">{t('courses.programTitle')}</h3>
                <ul className="space-y-3">
                  {programItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t('courses.certTitle')}</h3>
                <ul className="space-y-3">
                  {certItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCertificate className="text-blue-900 mt-1 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
