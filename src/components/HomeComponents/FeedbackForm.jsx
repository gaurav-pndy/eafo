import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FeedbackForm = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="bg-[#eff7ff] my-16 p-6 md:p-12 rounded-xl max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-6">
          <h2
            className="text-3xl capitalize font-bold text-[#1e3a8a]"
            dangerouslySetInnerHTML={{ __html: t("feedback.title") }}
          ></h2>
          <p className="text-gray-800 font-semibold">
            {t("feedback.subtitle")}
          </p>
        </div>
        <p
          className="text-sm mt-6 text-gray-800 font-semibold"
          dangerouslySetInnerHTML={{ __html: t("feedback.disclaimer") }}
        ></p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("feedback.name")}
          className="w-full p-3 font-semibold border-2 bg-white border-[#1e3a8a] rounded-xl"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t("feedback.phone")}
          className="w-full p-3 border-2 font-semibold bg-white border-[#1e3a8a] rounded-xl"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("feedback.message")}
          className="w-full p-3 border-2 font-semibold bg-white border-[#1e3a8a] rounded-xl h-24"
        />
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder={t("feedback.notes")}
          className="w-full p-3 border-2 font-semibold bg-white border-[#1e3a8a] rounded-xl h-24"
        />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" py-3 px-16 mx-auto bg-[#1e3a8a] hover:bg-blue-800 cursor-pointer transition-all duration-300 text-white font-bold rounded-xl"
          >
            {t("feedback.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
