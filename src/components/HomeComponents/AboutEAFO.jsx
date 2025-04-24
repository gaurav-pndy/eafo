import { useTranslation } from "react-i18next";
import { Globe, Microscope, HeartHandshake } from "lucide-react";
import { FaGlobe, FaMicroscope } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutEAFO = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative py-20 text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/about_bg.png')" }} // replace with your bg image path
      >
        <div className="absolute inset-0 bg-blue-900/70 " />
      </div>

      {/* Content */}
      <div className="relative z-10  mx-auto px-6 lg:px-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            {t("aboutEAFO.title")}
          </h2>
          <p className="mb-12 lg:text-lg text-white/90">
            {t("aboutEAFO.description")}
          </p>
          <div className="space-y-5 lg:text-lg">
            <div className="flex items-center gap-3">
              <FaGlobe className="text-2xl text-white" />
              <span>{t("aboutEAFO.features.network")}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMicroscope className="text-2xl text-white" />
              <span>{t("aboutEAFO.features.research")}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-2xl text-white" />
              <span>{t("aboutEAFO.features.patientCare")}</span>
            </div>
          </div>
        </div>

        {/* Right: Foreground image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/drsoma.avif" // replace with your foreground image path
            alt="EAFO Speaker"
            className="rounded-lg shadow-lg border-4 border-white w-full max-w-xl rotate-3"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutEAFO;
