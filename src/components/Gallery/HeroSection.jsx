import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery-hero" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/26f67a3692-311585270c36a316e612.png"
          alt={t("hero.alt")}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t("hero.title")}
          </h1>
          {/* <p className="text-xl text-blue-100">{t("hero.subtitle")}</p> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
