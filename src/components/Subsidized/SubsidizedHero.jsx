import { useTranslation } from "react-i18next";

const SubsidizedHero = () => {
  const { t } = useTranslation();

  return (
    <section id="subsidized-hero" className="relative h-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/05230b733d-e5b18c4a64af7797b2e0.png"
          alt="medical students"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center  max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t("Subsidized.hero.title")}
          </h1>
          <p className="text-xl text-blue-100">
            {t("Subsidized.hero.subtitle")}
          </p>
          <p className="text-lg text-blue-200 mt-4">
            {t("Subsidized.hero.tagline")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubsidizedHero;
