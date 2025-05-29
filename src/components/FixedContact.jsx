import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactDialog from "./Courses/ContactDialog";
import { MdHeadsetMic } from "react-icons/md";

const FixedContact = () => {
  const { t } = useTranslation();
  const [isContactOpen, setContactOpen] = useState(false);
  const dialogRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the dialog if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside both the button and the dialog, close it
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Contact Us Button */}
      <button
        ref={buttonRef}
        onClick={() => setContactOpen((prev) => !prev)}
        className="fixed bottom-2 md:bottom-4 cursor-pointer right-2 md:right-4 xl:right-8 bg-[#ce1815] text-white rounded-full p-5 hover:bg-red-800 transition duration-300 z-50"
      >
        <MdHeadsetMic className="text-3xl" />
      </button>

      {/* Dialog for Contact Options */}
      {isContactOpen && (
        <div
          ref={dialogRef}
          className="fixed bottom-20 md:bottom-22 right-4 md:right-23 bg-white shadow-lg shadow-black/30 rounded-xl p-4 max-w-sm md:max-w-md md:w-full z-50"
        >
          <ContactDialog />
        </div>
      )}
    </>
  );
};

export default FixedContact;
