import { useTranslation } from "react-i18next";
import PreRegisterForm from "../PreRegisterForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const PricingCTA = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-lg mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-100 transition duration-300"
            >
              {t("cta.apply")}
            </button>
            <Link to={"/contact-us"}>
              <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition duration-300">
                {t("cta.contact")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

export default PricingCTA;
