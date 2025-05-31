import React from 'react';
import { useTranslation } from 'react-i18next';

const HowToReachSection = () => {
  const { t } = useTranslation();

  return (
    <section id="section-how-to-reach" className="mb-20">
      <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
        <i className="fa-solid fa-route text-blue-700"></i>
        {t('aboutCity.howToReach.title')}
      </h2>
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        {t('aboutCity.howToReach.intro')}
      </p>
      <div className="space-y-10">
        {/* Plane */}
        <div id="how-to-reach-plane">
          <div className="flex items-center gap-3 mb-2">
            <i className="fa-solid fa-plane-departure text-blue-900 text-xl"></i>
            <span className="font-semibold text-blue-900 text-lg">
              {t('aboutCity.howToReach.byPlane.title')}
            </span>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <ul className="space-y-2 text-gray-700 text-base">
                {t('aboutCity.howToReach.byPlane.airports', { returnObjects: true }).map((airport, index) => (
                  <li key={index}>
                    <span className="font-medium">{airport.name}:</span> {airport.distance}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4 items-start">
              {t('aboutCity.howToReach.byPlane.qrCodes', { returnObjects: true }).map((qr, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <span className="text-sm text-gray-500">{qr.label}</span>
                  <img 
                    className="w-20 h-20 object-contain rounded bg-white border" 
                    src={qr.src} 
                    alt={qr.alt} 
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-base mt-3">
            {t('aboutCity.howToReach.byPlane.note')}
          </p>
          <div className="mt-6">
            {t('aboutCity.howToReach.byPlane.flights', { returnObjects: true }).map((flight, index) => (
              <React.Fragment key={index}>
                <span className="font-semibold text-blue-900">{flight.title}</span>
                <p className="text-gray-700 text-base mt-2">
                  {flight.description}<br />
                  <span className="font-semibold">{t('aboutCity.howToReach.byPlane.airlines')}</span> {flight.airlines}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Train */}
        {/* Train */}
<div id="how-to-reach-train">
  <div className="flex items-center gap-3 mb-2">
    <i className="fa-solid fa-train-subway text-blue-900 text-xl"></i>
    <span className="font-semibold text-blue-900 text-lg">
      {t('aboutCity.howToReach.byTrain.title')}
    </span>
  </div>
  <div className="bg-gray-50 rounded-lg p-6 shadow">
    <p className="text-gray-700 text-base mb-2">
      {t('aboutCity.howToReach.byTrain.description')}
    </p>
    <ul className="ml-6 list-disc text-gray-700 text-base space-y-1">
      {t('aboutCity.howToReach.byTrain.routes', { returnObjects: true }).map((route, index) => {
        if (typeof route === 'string') {
          return <li key={index}>{route}</li>;
        } else {
          return (
            <React.Fragment key={index}>
              <li className="font-medium">{route.category}</li>
              <ul className="ml-6 list-disc">
                {route.items.map((item, itemIndex) => (
                  <li key={`${index}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            </React.Fragment>
          );
        }
      })}
    </ul>
    <p className="text-gray-600 text-base mt-2">
      {t('aboutCity.howToReach.byTrain.note')}
    </p>
  </div>
</div>

        {/* Car */}
        <div id="how-to-reach-car">
          <div className="flex items-center gap-3 mb-2">
            <i className="fa-solid fa-car-side text-blue-900 text-xl"></i>
            <span className="font-semibold text-blue-900 text-lg">
              {t('aboutCity.howToReach.byCar.title')}
            </span>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <p className="text-gray-700 text-base">
              {t('aboutCity.howToReach.byCar.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToReachSection;