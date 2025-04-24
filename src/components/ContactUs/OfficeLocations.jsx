import React from 'react';
import { useTranslation } from 'react-i18next';

const offices = [
  {
    title: 'Moscow Office',
    lines: [
      'ANO EAFO',
      'Educational & Research Center',
      'Volokolamskoye Highway, 1, Building 1',
      'Office 606C',
      'Moscow, Russian Federation - 125080',
    ]
  },
  {
    title: 'Technical Partner Office',
    lines: [
      'Pasovit Technologies Private Limited',
      '715A, 7th Floor, Spencer Plaza Suite No. 718',
      'Anna Salai, Chennai',
      'Tamil Nadu – 600002, India',
    ]
  },
  {
    title: 'Mumbai Office',
    lines: [
      'Eurasian Cancer Research Council',
      'B – 1210, Golf Scappe',
      'Diamond Garden, Chembur',
      'Mumbai – 400071',
    ]
  },
  {
    title: 'Airdrie Office',
    lines: [
      'Eurasian Federation of Oncology',
      '5 Victoria Place',
      'Airdrie, Scotland',
      'United Kingdom - ML6 9BU',
    ]
  }
];

const OfficeLocations = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contactUs.officesTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">{office.title}</h3>
              <div className="space-y-2 text-gray-600">
                {office.lines.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
