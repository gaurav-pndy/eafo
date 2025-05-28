import { useRef, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import "./PreRegisterForm.css";

const baseUrl = "http://localhost:4000";

export default function PreRegisterForm({ courseId, onClose }) {
  const { t } = useTranslation();
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [agreements, setAgreements] = useState({
    terms: false,
    data: false,
    promotions: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreements.terms || !agreements.data) {
      toast.error(t("pleaseAgree"));
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/api/precourse/register, {
        ...formData,
        courseId,
      }`);
      toast.success(res.data.message || t("registerSuccess"));

      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
      });

      setAgreements({ terms: false, data: false, promotions: false });
    } catch (err) {
      toast.error(err.response?.data?.message || t("formError"));
    }
  };

  // Function to render label with HTML content
  const renderLabelWithHTML = (htmlContent) => {
    return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      }}
      className="modal-overlay text-black text-left"
    >
      <div className="precourse-modal z-50" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <h2>{t("preRegister")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <label className="field-label">{t("name")}</label>
            <div className="name-inputs">
              {(t("langCode") === "ru"
                ? ["lastName", "firstName", "middleName"]
                : ["firstName", "middleName", "lastName"]
              ).map((field) => (
                <div key={field} className="input-group">
                  <input
                    id={field}
                    name={field}
                    type="text"
                    // placeholder={t(field)}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== "middleName"}
                  />
                  <label
                    className="name-label text-sm text-gray-600"
                    htmlFor={field}
                  >
                    {t(field)}
                    {field !== "middleName" && (
                      <span className="required"> *</span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-fields">
            <div className="input-group">
              <label htmlFor="email">
                {t("email")}
                <span className="required"> *</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                // placeholder={t("email")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group phone-input-wrapper">
              <label htmlFor="phone">
                {t("phone")}
                <span className="required"> *</span>
              </label>
              <PhoneInput
                country={"ru"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{ name: "phone", required: true }}
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  paddingLeft: "48px",
                  fontSize: "16px",
                }}
                buttonStyle={{
                  border: "none",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={agreements.terms}
                onChange={handleCheckboxChange}
              />
              {renderLabelWithHTML(t("agreement"))}
            </label>
            <label>
              <input
                type="checkbox"
                name="data"
                checked={agreements.data}
                onChange={handleCheckboxChange}
              />
              {renderLabelWithHTML(t("personalData"))}
            </label>
            <label>
              <input
                type="checkbox"
                name="promotions"
                checked={agreements.promotions}
                onChange={handleCheckboxChange}
              />
              {renderLabelWithHTML(t("promotions"))}
            </label>
          </div>

          <button
            className="cursor-pointer"
            type="submit"
            disabled={
              !(agreements.terms && agreements.data && agreements.promotions)
            }
          >
            {t("submit")}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
         
    </div>
  );
}
