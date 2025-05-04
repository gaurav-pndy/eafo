import { FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PreRegisterForm from "../PreRegisterForm";
import { useState } from "react";

const AwardsCTA = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="awards-cta" className="text-center">
      <span
        onClick={() => setShowForm(true)}
        className="inline-flex items-center px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
      >
        <FaPaperPlane className="mr-2" />
        {t("Awards.cta.button")}
      </span>
      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default AwardsCTA;
