import React from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaVk, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-900">
          {t("contactUs.getInTouch")}
        </h3>
        <p className="text-gray-600">{t("contactUs.contactSubtitle")}</p>
      </div>
      <div className="flex items-start space-x-4">
        <i className="fa-solid fa-phone text-blue-900 mt-1"></i>
        <div>
          <h4 className="font-semibold">{t("contactUs.phone")}</h4>
          <a href="tel:+79851257788" className="text-gray-600 ">
            +7 (985) 125-77-88
          </a>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <i className="fa-solid fa-envelope text-blue-900 mt-1"></i>
        <div>
          <h4 className="font-semibold">{t("contactUs.email")}</h4>
          <a href="mailto:basic@eafo.info" className="text-gray-600 ">
            basic@eafo.info
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold">{t("contactUs.socialMedia")}</h4>
        <div className="flex space-x-4  text-blue-900">
          <a
            href="https://t.me/+79851257788"
            target="_blank"
            className=" transition-all  duration-300 hover:scale-125"
            aria-label="Facebook"
          >
            <FaTelegramPlane size={28} />
          </a>
          <a
            href="https://wa.me/79851257788"
            target="_blank"
            className="transition-all duration-300 hover:scale-125"
          >
            <IoLogoWhatsapp size={28} />
          </a>
          <a
            href="https://vk.com/eafo_info"
            target="_blank"
            className="transition-all duration-300 hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaVk size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
