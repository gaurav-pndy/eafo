import { useTranslation } from "react-i18next";
import image1 from "/certificates/image1.png";
import image2 from "/certificates/image2.jpg";

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
          <div>
            <p className=" lg:pr-20 lg:text-lg text-justify md:text-left lg:leading-10 ">
              {t("certificates.eafoText")}
            </p>
          </div>
          <img src={image1} alt="EAFO Certificate" className="w-72  lg:w-90" />
        </div>

        {/* Block 2 */}
        <h2 className="text-2xl md:text-3xl text-[#1e3a8a] text-center font-bold mb-12">
          {t("certificates.winnersTitle")}
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <img src={image2} alt="Winner Diploma" className="w-72  lg:w-90" />
          <div>
            <p className="lg:pl-20 lg:text-lg text-justify md:text-left lg:leading-10">
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
            <p className="lg:pr-20 lg:text-lg text-justify md:text-left lg:leading-10 ">
              {t("certificates.improvementText")}
            </p>
          </div>
          <img
            src={image2}
            alt="Certificate of Improvement"
            className="w-72  lg:w-90"
          />
        </div>
      </div>

      {/* Optional: Language Switch */}
    </div>
  );
}
