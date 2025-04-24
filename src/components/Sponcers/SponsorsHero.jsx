import React from 'react';
import { useTranslation } from 'react-i18next';

const SponsorsHero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="sponsors-hero" className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3d2ba7dcae-858cbb3ff94bdb0c4860.png" 
          alt="medical conference hall with modern architecture, blue tint, professional setting" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('sponsors.hero.title')}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {t('sponsors.hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              {t('sponsors.hero.buttons.becomeSponsor')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              {t('sponsors.hero.buttons.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsHero;