import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[500px] overflow-hidden " id="program-hero">
     
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/58bdecf460-5d101be4044139377212.png"
          alt="medical setting"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">{t("Program.hero.title")}</h1>
          <p className="text-xl text-blue-100">{t("Program.hero.subtitle")}</p>
          <p className="text-lg text-blue-200 mt-4">{t("Program.hero.date")}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
