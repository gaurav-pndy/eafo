import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "/EAFO.jpg";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import "../utils/i18n";
import { FaGlobe } from "react-icons/fa";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { label: t("about"), path: "/about" },
    { label: t("register"), path: "/register" },
    { label: t("submission"), path: "/submission" },
    { label: t("experts"), path: "/experts" },
    { label: t("Schedule"), path: "/schedule" },
    { label: t("visa"), path: "/visa" },
    { label: t("sponsors"), path: "/sponsors" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "/us_flag.png" },
    { code: "ru", name: "Русский", flag: "/russia_flag.png" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setDropdownOpen(false);
  };
  return (
    <header className="w-full border-b border-purple-200 shadow-sm">
      <div className=" mx-auto flex items-center justify-between px-4 lg:px-20 h-20 lg:h-22 ">
        {/* Left: Logo & Slogan */}
        <div className="flex items-center ">
          <Link to="/">
            <img src={logo} alt="EAFO Logo" className="h-8 lg:h-12" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex   text-gray-800 font-medium ${
            selectedLang === "ru" ? "text-sm gap-8" : "text-base gap-10"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`hover:text-purple-600  `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="relative  flex gap-1 md:gap-2 items-center z-30"
          ref={dropdownRef}
        >
          <FaGlobe className="text-xl  text-gray-800" />

          <div className="relative">
            <button
              className="cursor-pointer border   font-semibold  md:text-base px-2 py-1 rounded-lg  flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {languages.find((lang) => lang.code === selectedLang)?.name}
              <img
                src={languages.find((lang) => lang.code === selectedLang)?.flag}
                alt="Flag"
                className="w-3 md:w-4 h-3 "
              />
              <IoIosArrowDown className=" text-sm " />
            </button>

            {dropdownOpen && (
              <ul className="absolute md:top-9 w-full bg-white border border-[#002379] rounded-lg shadow-md mt-1 right-0 z-10 overflow-hidden">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="flex items-center gap-2 px-2 md:px-3 py-1 hover:bg-gray-200 cursor-pointer text-xs md:text-base"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {" "}
                    {lang.name}
                    <img
                      src={lang.flag}
                      className="w-3 md:w-4 h-3 "
                      alt={`${lang.name} Flag`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden pl-4"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden absolute w-full  top-20 z-20 left-0 bg-white px-4 py-4"
          >
            <nav className="flex flex-col gap-6 text-gray-800 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
