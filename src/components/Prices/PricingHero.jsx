import { useTranslation } from "react-i18next";

const PricingHero = () => {
  const { t } = useTranslation();
  return (
    <section id="awards-hero" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/pricingHero.jpg"
          alt="Participation Hero Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {" "}
            {t("pricingHero.title")}
          </h1>
          <p className="text-xl text-blue-100">{t("pricingHero.subtitle")}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
