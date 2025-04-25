import { useTranslation } from "react-i18next";
import {
  FaStar,
  FaPlaneSlash,
  FaGlobe,
  FaClipboardList,
} from "react-icons/fa";

const iconMap = {
  star: FaStar,
  "plane-slash": FaPlaneSlash,
  globe: FaGlobe,
  "clipboard-list": FaClipboardList,
};

const colorClasses = {
  yellow: "text-yellow-500",
  red: "text-red-500",
  green: "text-green-500",
  blue: "text-blue-500",
};

const Conditions = () => {
  const { t } = useTranslation();
  const conditions = t("Subsidized.conditions", { returnObjects: true });

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          {t("Subsidized.conditionsTitle")}
        </h3>
        <div className="grid gap-4">
          {conditions.map((item, i) => {
            const Icon = iconMap[item.icon];
            const iconColor = colorClasses[item.color] || "text-blue-500";

            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                {Icon && <Icon className={`${iconColor} text-lg`} />}
                <p className="text-gray-700">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
