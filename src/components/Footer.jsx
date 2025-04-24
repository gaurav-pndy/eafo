import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.sectionId) {
      if (location.pathname === "/") {
        scrollToSection(item.sectionId);
      } else {
        navigate("/", { state: { scrollTo: item.sectionId } });
      }
    }
  };

  const scrollToSection = (id, offset = 80) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100); // slight delay for DOM readiness
  };

  return (
    <footer className="bg-white text-gray-700 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-24">
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 gap-x-10 lg:gap-x-0 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_0.8fr] gap-y-8 mb-8">
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contactUs")}</h3>
            <address className="not-italic text-sm leading-relaxed">
              {/* <p>{t("footer.location")}</p> */}
              {/* <p>{t("footer.country")}</p> */}
              <p className="mt-2">info@eafo.info</p>
              <p>+7 (800) 555-0123</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/register" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.applyNow")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleNavClick({ path: "/schedule-and-program" })
                  }
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.program")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleNavClick({ path: "/schedule-and-program" })
                  }
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.schedule")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ sectionId: "faq" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.faq")}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.resources")}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/visa" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.visaInfo")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.documents")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/partner" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.partners")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.support")}
                </button>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-125"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-125"
                aria-label="Twitter"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-125"
                aria-label="Telegram"
              >
                <FaTelegram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <div className="mb-2 md:mb-0 mx-auto text-center md:mx-0">
            {t("footer.copyright")}
          </div>
          <div className="flex justify-center md:justify-normal flex-wrap gap-4 text-blue-600 underline">
            <a
              href="https://www.eafo.info/privacy-policy"
              target="_blank"
              className="hover:text-blue-900 hover:underline"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="https://www.eafo.info/terms-of-use"
              target="_blank"
              className="hover:text-blue-900 hover:underline"
            >
              {t("footer.termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
