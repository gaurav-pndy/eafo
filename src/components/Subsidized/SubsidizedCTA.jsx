import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaQuestion } from "react-icons/fa";

const SubsidizedCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{t("Subsidized.cta.title")}</h2>
          <p className="text-gray-700 mb-8">{t("Subsidized.cta.description")}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center justify-center">
              <FaPaperPlane className="mr-2" />
              {t("Subsidized.cta.primary")}
            </button>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg border-2 border-blue-900 hover:bg-blue-50 transition duration-300 flex items-center justify-center">
              <FaQuestion className="mr-2" />
              {t("Subsidized.cta.secondary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidizedCTA;
