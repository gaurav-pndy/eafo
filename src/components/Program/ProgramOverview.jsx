import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa6";

const ProgramOverview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {t("Program.overview.title")}
          </h2>
          <p className="text-gray-700 mb-6">
            {t("Program.overview.description")}
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition duration-300">
              <FaDownload />
              {t("Program.overview.download")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
