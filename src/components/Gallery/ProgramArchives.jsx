import { useTranslation } from "react-i18next";
import { AiFillFilePdf } from "react-icons/ai";

const years = [2011, 2012, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2022];

const ProgramArchives = () => {
  const { t } = useTranslation();

  return (
    <div id="programs-archive" className="mb-16">
      <h2 className="text-3xl font-bold text-blue-900 ">
        {t("archives.title")}
      </h2>
      <h5 className="mb-8 text-2xl mt-1 text-red-700 italic">
        {t("gallery.subtitle1")}
      </h5>
      <div className="flex flex-wrap justify-center gap-8">
        {years.map((year) => (
          <a
            key={year}
            target="_blank"
            href={`/pdfs/${year}.pdf`}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-2 flex items-center justify-center hover:scale-[120%] transition-all duration-300">
              <AiFillFilePdf className="text-red-500 text-5xl" />
            </div>
            <span className="text-lg font-semibold text-gray-800">{year}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProgramArchives;
