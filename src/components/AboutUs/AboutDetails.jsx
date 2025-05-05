import { useTranslation } from 'react-i18next';
import { FaGlobe, FaGraduationCap, FaHandshake, FaHeartPulse } from 'react-icons/fa6'; // using FA6 version for consistency

const icons = [
  { icon: FaGlobe, label: 'global' },
  { icon: FaGraduationCap, label: 'education' },
  { icon: FaHandshake, label: 'collaboration' },
  { icon: FaHeartPulse, label: 'patient' }
];

const AboutDetails = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50 max-w-6xl mx-auto">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          {t('aboutDetails.title')}
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">{t('aboutDetails.paragraph1')}</p>
          <p className="text-gray-600 text-lg leading-relaxed">{t('aboutDetails.paragraph2')}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {icons.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center p-4 bg-blue-50 rounded-lg">
                <Icon className="text-3xl text-blue-900 mb-2 mx-auto" />
                <p className="text-sm text-blue-900">{t(`aboutDetails.${label}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
