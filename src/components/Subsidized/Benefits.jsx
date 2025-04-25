import { useTranslation } from "react-i18next";
import { FaChalkboardTeacher, FaUsers, FaUtensils } from "react-icons/fa";

const iconMap = {
  "chalkboard-user": FaChalkboardTeacher,
  users: FaUsers,
  utensils: FaUtensils,
};

const Benefits = () => {
  const { t } = useTranslation();
  const benefits = t("Subsidized.benefits", { returnObjects: true });

  return (
    <section className="container mx-auto px-4 bg-white">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          {t("Subsidized.benefitsTitle")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-lg">
                {Icon && <Icon className="text-3xl text-blue-600 mb-4 mx-auto" />}
                <h4 className="font-bold text-gray-900 mb-2">{b.title}</h4>
                <p className="text-gray-600">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
