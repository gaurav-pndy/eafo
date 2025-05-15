import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "/EAFO.jpg";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import "../utils/i18n";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Refs
  const langDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close language dropdown
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      // Close user dropdown
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // New navigation items with subitems
  const navItems = [
    // {
    //   label: t("header.about"),

    //   subItems: [
    //     { label: t("header.basicCourses"), path: "/courses" },
    //     {
    //       label: t("header.preCourses"),
    //       path: "http://basic.eafo.info",
    //       external: true,
    //     },
    //   ],
    // },
    // {
    //   label: t("header.whyUs"),

    // subItems: [
    // { label: t("header.awards"), path: "/awards" },
    // { label: t("header.gallery"), path: "/gallery" },
    // { sectionId: "reviews", label: t("header.reviews") },
    // { label: t("header.organizations"), path: "/organizations" },
    // { label: t("header.eafo"), path: "/about" },
    // { label: t("header.venue"), path: "/venue" },
    // { label: t("header.accommodation"), path: "/accomodation" },
    // { sectionId: "faq", label: t("header.faq") },
    //   ],
    // },

    {
      label: t("header.participationTerms"),
      path: "/participation-variants",
    },
    { label: t("header.pricing"), path: "/pricing" },
    { label: t("header.howToApply"), path: "/how-to-apply" },

    { label: t("header.visa"), path: "/visa" },
    { label: t("header.partners"), path: "/partners" },
    { label: t("header.contact"), path: "/contact-us" },

    // {
    //   label: t("header.submission"),

    //   subItems: [
    //     { label: t("header.howDoIRegister"), path: "/how-to-register" },

    //     { label: t("header.registerNow"), path: "/register" },
    //   ],
    // },
    // { label: t("header.expertsAndCommittees"), path: "/experts" },
    // { label: t("header.scheduleAndProgram"), path: "/schedule-and-program" },
    // { label: t("header.sponsors"), path: "/sponsors" },

    // <- section
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.external) {
      // Open external link in new tab
      window.open(item.path, "_blank");
    } else if (item.path) {
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
      <div className="mx-auto flex items-center justify-between px-4 lg:px-10 xl:px-12 h-20 lg:h-22">
        {/* Left: Logo & Slogan */}
        <div className="flex items-center">
          <Link to="/">
            <img
              onClick={() => setIsMenuOpen(false)}
              src={logo}
              alt="EAFO Logo"
              className="h-10 lg:h-11"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        {/* <nav
          className={`hidden  xl:flex text-gray-800 font-medium ${
            selectedLang === "ru"
              ? "text-[0.84rem] gap-7 nav-class-ru"
              : "text-[0.95rem] gap-8 nav-class"
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
        </nav> */}

        <div className="flex items-center gap-2 md:gap-8 xl:gap-4 ">
          {/* <div
            className="relative  hidden md:flex gap-1 md:gap-2 items-center z-30"
            ref={dropdownRef}
          >
            <button
              className="cursor-pointer border border-gray-800 font-semibold md:text-xl xl:text-base px-3 py-1 rounded-lg flex items-center gap-2"
              onClick={() =>
                changeLanguage(selectedLang === "ru" ? "en" : "ru")
              }
            >
              {selectedLang === "ru" ? "English" : "Русский"}
              <img
                src={
                  languages.find(
                    (lang) =>
                      lang.code === (selectedLang === "ru" ? "en" : "ru")
                  )?.flag
                }
                alt="Flag"
                className="w-4 h-3"
              />
            </button>
          </div> */}

          <div className="relative" ref={userDropdownRef}>
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="p-1 rounded-full hover:bg-gray-200 transition"
            >
              <FaUserCircle className=" cursor-pointer text-[2.5rem] lg:text-4xl text-gray-800" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-[50%] translate-x-[50%] xl:-right-10 xl:translate-x-0  pt-3 w-44 lg:w-48 bg-transparet z-20">
                <a
                  href="http://ui.eafo.info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-full px-4 py-2 text-white font-semibold  rounded-lg bg-blue-600 hover:bg-blue-800 transition-all duration-300 cursor-pointer lg:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: t("header.personalAccount"),
                    }}
                  ></button>
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="pl-4 md:pl-0"
          >
            {isMenuOpen ? (
              <X className="h-10 w-10" />
            ) : (
              <Menu className="h-10 w-10" />
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
            className=" absolute w-full lg:w-[30%] lg:right-0 top-18 md:top-20 z-20  bg-gradient-to-b from-white to-blue-200 px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl pb-10"
          >
            <nav className="flex text-lg flex-col gap-4 text-gray-800 font-medium">
              <div
                className="relative mb-5 md:hidden flex justify-end items-center z-30"
                ref={dropdownRef}
              >
                {/* <FaGlobe className="text-xl text-gray-800" /> */}
                <button
                  className="cursor-pointer border border-gray-800 font-semibold md:text-xl xl:text-base px-3 py-1 rounded-lg flex items-center gap-2"
                  onClick={() =>
                    changeLanguage(selectedLang === "ru" ? "en" : "ru")
                  }
                >
                  {selectedLang === "ru" ? "English" : "Русский"}
                  <img
                    src={
                      languages.find(
                        (lang) =>
                          lang.code === (selectedLang === "ru" ? "en" : "ru")
                      )?.flag
                    }
                    alt="Flag"
                    className="w-4 h-3"
                  />
                </button>
              </div>
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
                    className="w-full flex justify-between items-center text-left cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <span
                        className={`transition-transform duration-200 text-lg ${
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
