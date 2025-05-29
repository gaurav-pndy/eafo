import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaTimes,
  FaTelegram,
} from "react-icons/fa";

const ContactDialog = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="relative py-3 px-4 md:p-5 rounded-2xl  w-full ">
      <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6 text-center">
        Свяжитесь с нами
      </h2>

      <div className="space-y-5">
        <div className="flex items-center space-x-5">
          <FaPhoneAlt className="text-[#1e3a8a] text-3xl" />
          <div>
            <h3 className="font-bold text-lg text-[#1e3a8a]">Телефон:</h3>
            <a
              href="tel:+79851257788"
              className="text-blue-600 font-semibold hover:underline"
            >
              +7 (985) 125-77-88
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <FaEnvelope className="text-[#1e3a8a] text-3xl" />
          <div>
            <h3 className="font-bold text-lg text-[#1e3a8a]">Задать вопрос:</h3>
            <a
              href="mailto:basic@eafo.info"
              className="text-blue-600 font-semibold hover:underline"
            >
              basic@eafo.info
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <FaEnvelope className="text-[#1e3a8a] text-3xl" />
          <div>
            <h3 className="font-bold text-lg text-[#1e3a8a]">
              Техническая поддержка:
            </h3>
            <a
              href="mailto:support@eafo.info"
              className="text-blue-600 font-semibold hover:underline"
            >
              support@eafo.info
            </a>
          </div>
        </div>

        <div className="flex space-x-6 mt-6 justify-center">
          <a
            href="https://wa.me/79851257788"
            target="_blank"
            className="text-green-600 hover:scale-105 transition-transform"
          >
            <FaWhatsapp className="text-5xl" />
          </a>
          <a
            href="https://t.me/+79851257788"
            target="_blank"
            className="text-blue-800 hover:scale-105 transition-transform"
          >
            <FaTelegram className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
