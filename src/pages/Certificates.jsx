import { useTranslation } from "react-i18next";
import image1 from "/certificates/image1.png";
import image2 from "/certificates/image2.jpg";
import image3 from "/certificates/image3.jpg";

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <div className="mb-16 text-center text-gray-900">
      <section className="relative py-16 mb-16 overflow-hidden bg-[#1e3a8a] ">
        <h1 className="text-5xl text-center font-bold text-white mb-6">
          {" "}
          {t("certificates.title")}
        </h1>
      </section>

      <div className="max-w-5xl mx-auto space-y-20 text-left px-4 md:px-6 xl:px-0">
        {/* Block 1 */}
        <h2 className="text-2xl md:text-3xl text-[#1e3a8a] text-center font-bold mb-12">
          {t("certificates.eafoTitle")}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full">
            <p className="  lg:text-lg  lg:leading-10 ">
              {t("certificates.eafoText")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center md:items-end">
            <img
              src={image1}
              alt="EAFO Certificate"
              className="w-72  lg:w-90"
            />
            <p className="text-gray-700 mt-4 text-center">
              {t("certificates.caption1")}
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <h2 className="text-2xl md:text-3xl text-[#1e3a8a] text-center font-bold mb-12">
          {t("certificates.winnersTitle")}
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full flex flex-col items-center md:items-start">
            <img src={image2} alt="Winner Diploma" className="w-72  lg:w-90" />
            <p className="text-gray-700 mt-4 text-center md:text-left">
              {t("certificates.caption2")}
            </p>
          </div>
          <div className="w-full">
            <p className=" lg:text-lg  lg:leading-10">
              {t("certificates.winnersText")}
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <h2 className="text-2xl md:text-3xl text-[#1e3a8a] text-center font-bold mb-12 ">
          {t("certificates.improvementTitle")}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <p className="lg:pr-20 lg:text-lg  lg:leading-10 ">
              {t("certificates.improvementText")}
            </p>
          </div>

          <img
            src={image3}
            alt="Certificate of Improvement"
            className="w-72  lg:w-90"
          />
        </div>
      </div>

      {/* Optional: Language Switch */}
    </div>
  );
}
