import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/EAFO.jpg";
import { IoLogoWhatsapp } from "react-icons/io";

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
    <footer className="bg-white text-gray-700  ">
      <div className=" ">
        {/* Responsive Grid */}
        <div className="grid  grid-cols-2 px-4 lg:px-6 xl:px-16 gap-x-10 lg:gap-x-0 md:grid-cols-3 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr_1.1fr] gap-y-8  border-t border-b border-gray-200 py-8">
          {/* Contact Us */}
          <div className="lg:pr-14 col-span-2 md:col-span-1 text-center md:text-left">
            <Link to="/">
              <img
                onClick={() => setIsMenuOpen(false)}
                src={logo}
                alt="EAFO Logo"
                className="h-8 lg:h-10 mx-auto md:mx-0"
              />
            </Link>
            <p
              className="not-italic text-xs md:text-[0.7rem]  mt-4"
              dangerouslySetInnerHTML={{ __html: t("footer.aboutEafo") }}
            >
              {/* <p>{t("footer.location")}</p> */}
              {/* <p>{t("footer.country")}</p> */}
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
            {/* <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3> */}
            <ul className="md:text-sm space-y-1 md:space-y-2">
              <li>
                <a
                  href="http://eafo.info"
                  target="_blank"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/gallery" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.gallery")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleNavClick({ path: "/participation-variants" })
                  }
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.participationFormats")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/accommodation" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.accommodation")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/venue" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.venue")}
                </button>
              </li>
            </ul>
          </div>
          <div>
            {/* <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3> */}
            <ul className="md:text-sm space-y-1 md:space-y-2  text-right md:text-left">
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/how-to-apply" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.howToApply")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/visa" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.visa")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/partners" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.partners")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick({ path: "/contact-us" })}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.contacts")}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="">
            {/* <h3 className="font-bold text-lg mb-4">{t("footer.resources")}</h3> */}
            <ul className="md:text-sm space-y-1 md:space-y-2 text-blue-700">
              <li>
                <a
                  href="https://workdrive.zohopublic.in/file/u89yj18678a8fa5034857ab19d7b87e95aa1e"
                  target="_blank"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.agreement")}
                </a>
              </li>
              <li>
                <a
                  href="https://workdrive.zohopublic.in/file/qu1w11a771891a97f4a4d9f0b56dfe4ad0393"
                  target="_blank"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.privacyPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="https://workdrive.zohopublic.in/file/u89yj270d1f43f0c14b6c969ef4b20f0aa61a"
                  target="_blank"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {t("footer.personalData")}
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col justify-between items-end gap-20">
            <div>
              <p className="md:text-sm  text-right md:text-left lg:text-right">
                {t("footer.address")}
              </p>
            </div>
            <div className="lg:flex flex-col hidden  items-end text-black font-bold">
              <div className="flex space-x-3">
                <a
                  href="https://t.me/+79851257788"
                  target="_blank"
                  className=" transition-all duration-300 hover:scale-125"
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

              <a href="tel:+79851257788" target="_blank">
                +7 (985) 125-77-88
              </a>
              <a href="mailto:basic@eafo.info" target="_blank">
                basic@eafo.info
              </a>
            </div>
          </div>

          <div className="lg:hidden col-span-2 md:col-span-1 flex flex-col  lg:items-center text-black font-bold">
            <div className="flex space-x-3">
              <a
                href="https://t.me/+79851257788"
                target="_blank"
                className=" transition-all duration-300 hover:scale-125"
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

            <a href="tel:+79851257788" target="_blank">
              +7 (985) 125-77-88
            </a>
            <a href="mailto:basic@eafo.info" target="_blank">
              basic@eafo.info
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 px-4 lg:px-16  flex flex-col md:flex-row items-center text-sm text-gray-600">
          <div
            className=" mx-auto text-center md:mx-0"
            dangerouslySetInnerHTML={{ __html: t("footer.copyright") }}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
