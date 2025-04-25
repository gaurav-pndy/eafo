import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="awards-hero" className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/71555c82d7-47802eb30cfcf098272b.png"
          alt={t('Awards.hero.alt')}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">{t('Awards.hero.title')}</h1>
          <p className="text-xl text-blue-100">{t('Awards.hero.subtitle')}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
