import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBuildingColumns,
  faGlobe,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const FadeInOnView = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const VisaRequirements = () => {
  const { t } = useTranslation();

  const documents = [
    { key: "passport" },
    { key: "form" },
    { key: "photo" },
    { key: "invitation" },
    { key: "insurance" },
  ];

  const embassyLinks = [
    {
      icon: faBuildingColumns,
      title: t("visaRequirements.embassies.item1.title"),
      url: "https://www.embassy-worldwide.com/country/russia/",
      text: t("visaRequirements.embassies.item1.linkText"),
    },
    {
      icon: faGlobe,
      title: t("visaRequirements.embassies.item2.title"),
      url: "https://www.mid.ru/en/",
      text: t("visaRequirements.embassies.item2.linkText"),
    },
  ];

  return (
    <section id="visa-requirements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInOnView>
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("visaRequirements.title")}
            </h2>
          </FadeInOnView>

          <FadeInOnView delay={0.1}>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6">
                {t("visaRequirements.documentsTitle")}
              </h3>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <FadeInOnView key={doc.key} delay={0.2 + index * 0.1}>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 mt-1 mr-3"
                      />
                      <div>
                        <span className="font-bold">
                          {t(`visaRequirements.documents.${doc.key}.title`)}
                        </span>
                        <p className="text-gray-600">
                          {t(`visaRequirements.documents.${doc.key}.desc`)}
                        </p>
                      </div>
                    </li>
                  </FadeInOnView>
                ))}
              </ul>
            </div>
          </FadeInOnView>

          <FadeInOnView delay={0.2}>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6">
                {t("visaRequirements.embassies.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("visaRequirements.embassies.description")}
              </p>

              <div className="space-y-4">
                {embassyLinks.map((item, index) => (
                  <FadeInOnView key={index} delay={0.3 + index * 0.2}>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-blue-900 text-2xl mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <a
                          href={item.url}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.text}
                        </a>
                      </div>
                    </div>
                  </FadeInOnView>
                ))}
              </div>

              <FadeInOnView delay={1}>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-gray-700">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-blue-900 mr-2"
                    />
                    {t("visaRequirements.note")}
                  </p>
                </div>
              </FadeInOnView>
            </div>
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
};

export default VisaRequirements;
