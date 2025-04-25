import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaFileAlt,
  FaPen,
  FaEnvelope,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa"; // Correct import path

const iconMap = {
  user: FaUser,
  "file-lines": FaFileAlt, // Replacing FaFileLines with FaFileAlt
  pen: FaPen,
  envelope: FaEnvelope,
  "pen-to-square": FaEdit,
  "check-circle": FaCheckCircle,
};

const EligibilityCriteria = () => {
  const { t } = useTranslation();
  const criteria = t("Subsidized.eligibility", { returnObjects: true });

  return (
    <section className="container mx-auto px-4 bg-white">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          {t("Subsidized.eligibilityTitle")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {criteria.map((item, i) => (
            <div key={i} className="space-y-4">
              {item.map((block, j) => {
                const IconComponent = iconMap[block.icon];
                return (
                  <div className="flex items-start gap-4" key={j}>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {IconComponent && (
                        <IconComponent className="text-blue-600 text-lg" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{block.title}</h4>
                      <p className="text-gray-600">{block.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
