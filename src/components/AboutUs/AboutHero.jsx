import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutHero.title')}</h1>
        <p className="text-xl max-w-3xl mx-auto">{t('aboutHero.subtitle')}</p>
      </div>
    </section>
  );
};

export default AboutHero;
