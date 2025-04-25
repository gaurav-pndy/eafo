import { useTranslation } from 'react-i18next';
import { FaMedal, FaStar, FaAward } from 'react-icons/fa';

const runners = [
  {
    icon: <FaMedal className="text-2xl text-gray-400 mt-1" />,
    titleKey: 'Awards.runner.cards.0.title',
    descKey: 'Awards.runner.cards.0.desc',
  },
  {
    icon: <FaStar className="text-2xl text-yellow-500 mt-1" />,
    titleKey: 'Awards.runner.cards.1.title',
    descKey: 'Awards.runner.cards.1.desc',
  },
  {
    icon: <FaAward className="text-2xl text-blue-500 mt-1" />,
    titleKey: 'Awards.runner.cards.2.title',
    descKey: 'Awards.runner.cards.2.desc',
  },
];

const RunnerUpPrizes = () => {
  const { t } = useTranslation();

  return (
    <div id="runner-up-prizes" className="bg-gray-50 rounded-2xl p-8 mb-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">{t('runner.title')}</h2>
      <div className="space-y-6">
        {runners.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold mb-2">{t(item.titleKey)}</h3>
              <p className="text-gray-600">{t(item.descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunnerUpPrizes;
