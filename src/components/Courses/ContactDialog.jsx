import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaWhatsapp,
  FaTelegram,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";

const ContactDialog = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <h2 className="text-3xl text-center font-bold mb-4">
        {t("courses.contactUs")}
      </h2>
      <div className="p-4 pt-2">
        <p className="mb-10 text-xl">{t("courses.contactText")}</p>
        <div className="grid  md:grid-cols-2 gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 p-2 rounded-xl gap-3 text-lg  hover:bg-gray-200 transition-all duration-300"
          >
            <span className="bg-[#2cd46b] p-1.5 rounded-md text-white ">
              <FaWhatsapp className="text-2xl" />
            </span>
            WhatsApp
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 p-2 rounded-xl gap-3 text-lg  hover:bg-gray-200 transition-all duration-300"
          >
            <span className="bg-[#29a2da] p-1.5 rounded-md text-white ">
              <FaTelegramPlane className="text-2xl" />
            </span>
            Telegram
          </a>
          <a
            href="tel:+78005550123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 p-2 rounded-xl gap-3 text-lg  hover:bg-gray-200 transition-all duration-300"
          >
            <span className="bg-black p-1.5 rounded-md text-white ">
              <FaPhoneAlt className="text-2xl" />
            </span>
            +7 (800) 555-01 23
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
