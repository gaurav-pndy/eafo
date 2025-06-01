import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "/EAFO.jpg";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import "../utils/i18n";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { TbListSearch } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import PreRegisterForm from "./PreRegisterForm";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

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

  // Add effect for body blur when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body-blur");
    } else {
      document.body.classList.remove("body-blur");
    }

    return () => {
      document.body.classList.remove("body-blur");
    };
  }, [isMenuOpen]);

  const headerItems = [
    { label: t("header.programs"), path: "/program" },
    {
      label: t("header.participationFormats"),
      path: "/participation-variants",
    },
    { label: t("header.cost"), path: "/pricing" },
  ];
  const navItems = [
    { label: t("header.programs"), path: "/program" },

    {
      label: t("header.participationFormats"),
      path: "/participation-variants",
    },
    { label: t("header.cost"), path: "/pricing" },
    { label: t("header.howToApply"), path: "/how-to-apply" },
    { label: t("header.visa"), path: "/visa" },
    { label: t("header.partners"), path: "/partners" },
    { label: t("header.contact"), path: "/contact-us" },
    { label: t("header.gallery"), path: "/gallery" },
    // { label: t("header.eafo"), path: "/about" },
    { label: t("header.venue"), path: "/venue" },
    { label: t("header.accommodation"), path: "/accommodation" },
    { label: t("header.aboutCity"), path: "/about-city" },
    { label: t("header.certificates"), path: "/certificates" },
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
    <>
      {/* Blur overlay when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <header className="w-full fixed top-0 left-0 z-20 bg-white border-b border-purple-200 shadow-sm">
        <div className="mx-auto flex items-center justify-between px-4 lg:px-6 xl:px-12 h-20 lg:h-22">
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
            <div className="hidden ml-5 xl:ml-20 lg:flex items-center gap-4 text-[#001554] lg:gap-4 xl:gap-12">
              {headerItems.map((item) => (
                <div key={item.label} className="w-fit ">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="w-fit flex justify-between items-center text-left cursor-pointer  hover:text-blue-800  transition-all duration-200"
                  >
                    <span className="font-medium xl:text-lg">{item.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-8  lg:gap-4 ">
            <div className="hidden lg:flex justify-center lg:justify-start ">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#8B0000] text-white px-5 xl:px-14 cursor-pointer py-1.5 rounded-full font-bold hover:bg-[#A00000] transition-all duration-300 "
              >
                Подать заявку
              </button>
            </div>
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="pl-4 cursor-pointer md:pl-0 relative z-30"
            >
              {isMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <button className="  flex items-center gap-1 border rounded-full px-3 py-1.5 lg:py-0.5 border-gray-600 hover:bg-[#d9d9d9] hover:border-[#d9d9d9] transition-all duration-200 cursor-pointer">
                  <IoMdMenu className="text-2xl md:text-3xl" />
                  <span className="  md:text-[1.15rem]  flex items-center">
                    {t("header.menu")}
                  </span>
                </button>
              )}
            </div>
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="p-1 rounded-full hover:bg-gray-200 transition"
              >
                <FaUserCircle className="cursor-pointer text-[2.5rem] lg:text-4xl text-gray-800" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-[50%] translate-x-[50%] xl:-right-10 xl:translate-x-0 pt-3 w-44 lg:w-48 bg-transparent z-20">
                  <a
                    href="http://ui.eafo.info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="w-full px-4 py-2 text-white font-semibold rounded-lg bg-[#1e3a8a] hover:bg-blue-800 transition-all duration-300 cursor-pointer lg:text-lg"
                      dangerouslySetInnerHTML={{
                        __html: t("header.personalAccount"),
                      }}
                    ></button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Nav - Redesigned with long rectangular tiles and rounded corners */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-[50%] translate-x-[-50%] top-22 md:top-24 z-20 w-full max-w-5xl h-fit bg-white shadow-2xl overflow-y-auto  p-5 md:p-10 rounded-2xl"
              // style={{ paddingTop: "5rem" }}
            >
              <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:px-6  text-gray-800">
                {/* <div className="relative mb-6 md:hidden flex justify-end items-center">
                  <button
                    className="cursor-pointer border border-gray-800 font-semibold px-3 py-1 rounded-lg flex items-center gap-2"
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

                {navItems.map((item) => (
                  <div key={item.label} className="w-full">
                    <button
                      onClick={() => {
                        if (item.subItems) handleParentClick(item.label);
                        else {
                          handleNavClick(item);
                          setIsMenuOpen(false);
                        }
                      }}
                      className="w-full flex justify-between items-center text-left cursor-pointer  px-6 py-2  transition-all duration-200"
                    >
                      <span className="font-medium text-lg">{item.label}</span>
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
                              className="w-full text-left bg-gray-50 px-6 py-3 my-1 rounded-lg hover:bg-gray-100 transition-colors"
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

      {/* Add this CSS to your global CSS file */}
      {/* <style jsx global>{`
        .body-blur > *:not(.fixed) {
          filter: blur(4px);
          transition: filter 0.3s ease;
        }
      `}</style> */}

      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default Header;
