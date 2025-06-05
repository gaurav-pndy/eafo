import { useTranslation } from "react-i18next";

const VenueHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 overflow-hidden " id="program-hero">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/venue/venue-hero.webp"
          alt="Artis Plaza image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t("venue.title")}
          </h1>
          <p className="text-3xl text-blue-100">{t("venue.subtitle")}</p>
        </div>
      </div>
    </section>
  );
};

export default VenueHero;
