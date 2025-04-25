import { useTranslation } from 'react-i18next';
import { AiFillFilePdf } from 'react-icons/ai';

const years = [2024, 2022, 2019, 2017, 2016, 2014, 2013, 2012];

const ProgramArchives = () => {
  const { t } = useTranslation();

  return (
    <div id="programs-archive" className="mb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">{t('archives.title')}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {years.map((year) => (
          <a
            key={year}
            href={`/pdfs/${year}.pdf`}
            download
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-2 flex items-center justify-center">
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
