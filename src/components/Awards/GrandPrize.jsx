import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaPlaneDeparture, FaUniversity, FaTrophy } from 'react-icons/fa';

const prizeList = [
  {
    icon: <FaGraduationCap className="text-4xl text-blue-900" />,
    titleKey: 'Awards.grand.cards.0.title',
    descKey: 'Awards.grand.cards.0.desc',
  },
  {
    icon: <FaPlaneDeparture className="text-4xl text-blue-900" />,
    titleKey: 'Awards.grand.cards.1.title',
    descKey: 'Awards.grand.cards.1.desc',
  },
  {
    icon: <FaUniversity className="text-4xl text-blue-900" />,
    titleKey: 'Awards.grand.cards.2.title',
    descKey: 'Awards.grand.cards.2.desc',
  },
];

const GrandPrize = () => {
  const { t } = useTranslation();

  return (
    <div id="grand-prize" className="mb-16">
      <div className="text-center mb-12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-4">
          <FaTrophy className="text-5xl text-yellow-500" />
        </div>
        <h2 className="text-3xl font-bold text-blue-900">{t('Awards.grand.title')}</h2>
        <p className="text-gray-600 mt-2">{t('Awards.grand.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {prizeList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-center mb-4">{t(item.titleKey)}</h3>
            <p className="text-gray-600">{t(item.descKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrandPrize;
