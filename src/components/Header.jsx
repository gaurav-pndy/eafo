import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "/EAFO.jpg";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import "../utils/i18n";
import { FaGlobe } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  // New navigation items with subitems
  const navItems = [
    {
      label: t("header.about"),
      // path: "/",
      subItems: [
        { label: t("header.basicCourses"), path: "/courses" },
        { label: t("header.preCourses"), path: "/" },
      ],
    },
    {
      label: t("header.whyUs"),
      // path: "/",
      subItems: [
        { label: t("header.invitedExperts"), path: "/experts" },
        { label: t("header.awards"), path: "/awards" },
        { label: t("header.successStories"), path: "/success-stories" },
        { sectionId: "reviews", label: t("header.reviews") }, // <- section
      ],
    },
    { label: t("header.scheduleAndProgram"), path: "/schedule-and-program" },
    {
      label: t("header.participationTerms"),
      // path: "/",
      subItems: [
        {
          label: t("header.participationOptions"),
          path: "/participation-variants",
        },
        {
          label: t("header.participationVariants"),
          path: "/participation-variants",
        },
        // {
        //   label: t("header.competitiveParticipation"),
        //   path: "/competitive-participation",
        // },
        { label: t("header.pricing"), path: "/pricing" },
        { label: t("header.visa"), path: "/visa" },
      ],
    },
    {
      label: t("header.submission"),
      // path: "/",
      subItems: [
        { label: t("header.howDoIRegister"), path: "/how-to-register" },
        {
          label: t("header.participationOptions"),
          path: "/participation",
        },
        {
          label: t("header.competitiveSelection"),
          path: "/competitive-selection",
        },
        { label: t("header.registrationFee"), path: "/register" },
        { label: t("header.registerNow"), path: "/register" },
      ],
    },
    { sectionId: "faq", label: t("header.faq") },
    { label: t("header.organizations"), path: "/organizations" },

    { label: t("header.contactUs"), path: "/contact-us" },
    // <- section
  ];

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

  const languages = [
    { code: "en", name: "English", flag: "/us_flag.png" },
    { code: "ru", name: "Русский", flag: "/russia_flag.png" },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const handleParentClick = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-white border-b border-purple-200 shadow-sm">
      <div className="mx-auto flex items-center justify-between px-4 lg:px-10 h-20 lg:h-22">
        {/* Left: Logo & Slogan */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="EAFO Logo" className="h-8 lg:h-12" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex text-gray-800 font-medium ${
            selectedLang === "ru" ? "text-sm gap-8" : "text-base gap-8"
          }`}
        >
          {navItems.map((item, idx) => (
            <div
              className="relative"
              key={item.label}
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => handleNavClick(item)}
                className="hover:text-purple-600 cursor-pointer flex items-center gap-1"
              >
                {item.label}
                {/* {item.subItems && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 ease-in-out transform" />
                )} */}
              </button>

              {item.subItems && (
                <AnimatePresence>
                  {hoveredItem === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bg-white pt-5 shadow-md left-[50%] translate-x-[-50%] w-48 z-50"
                    >
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavClick(subItem)}
                          className="block px-4 py-2 text-left w-full text-gray-800 hover:bg-gray-300 cursor-pointer"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Language Dropdown */}
        <div
          className="relative flex gap-1 md:gap-2 items-center z-30"
          ref={dropdownRef}
        >
          <FaGlobe className="text-xl text-gray-800" />
          <div className="relative">
            <button
              className="cursor-pointer border font-semibold md:text-base px-2 py-1 rounded-lg flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {languages.find((lang) => lang.code === selectedLang)?.name}
              <img
                src={languages.find((lang) => lang.code === selectedLang)?.flag}
                alt="Flag"
                className="w-3 md:w-4 h-3 "
              />
              <IoIosArrowDown className="text-sm" />
            </button>

            {dropdownOpen && (
              <ul className="absolute md:top-9 w-full bg-white border border-[#002379] rounded-lg shadow-md mt-1 right-0 z-10 overflow-hidden">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="flex items-center gap-2 px-2 md:px-3 py-1 hover:bg-gray-200 cursor-pointer md:text-base"
                    onClick={() => changeLanguage(lang.code)}
                  >
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
            className="lg:hidden absolute w-full top-20 z-20 left-0 bg-white px-4 py-4"
          >
            <nav className="flex flex-col gap-4 text-gray-800 font-medium">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.subItems) handleParentClick(item.label);
                      else {
                        handleNavClick(item);
                        setIsMenuOpen(false);
                      }
                    }}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <span
                        className={`transition-transform duration-200 ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    )}
                  </button>

                  <AnimatePresence>
                    {openMenu === item.label && item.subItems && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => {
                              handleNavClick(subItem);
                              setIsMenuOpen(false);
                            }}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
