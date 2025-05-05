import { useTranslation } from 'react-i18next';

const WhatWeDo = () => {
  const { t } = useTranslation();
  const items = t('whatWeDo.items', { returnObjects: true });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t('whatWeDo.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-4 text-blue-900">
                <i className={`fa-solid ${item.icon} text-3xl mr-3`}></i>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
