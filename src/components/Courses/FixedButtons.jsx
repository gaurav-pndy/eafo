import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PreRegisterForm from "../PreRegisterForm";
import ContactDialog from "./ContactDialog";
import { useTranslation } from "react-i18next";
import { RiMessage2Fill } from "react-icons/ri";

const FixedButtons = ({ courseId }) => {
  const { t } = useTranslation();
  const [isSubmitOpen, setSubmitOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Submit Application Button */}
      <button
        onClick={() => setSubmitOpen(true)}
        className="fixed max-w-7xl  cursor-pointer  2xl:w-full bottom-2 md:bottom-4 left-2 w-[calc(100vw-6rem)] md:w-[calc(100vw-8rem)] md:left-4 2xl:left-1/2 transform 2xl:-translate-x-1/2 bg-[#001554] text-lg text-white px-6 py-4.5 rounded-2xl font-bold hover:bg-blue-900 transition duration-300 z-50"
      >
        {t("courses.submitButton")}
      </button>

      {/* Contact Us Button */}
      {/* <button
        onClick={() => setContactOpen(true)}
        className="fixed bottom-20 xl:bottom-2 cursor-pointer right-2 xl:right-8 bg-blue-900 text-white border border-white  rounded-full p-5 hover:bg-blue-800 transition duration-300 z-50"
      >
        <RiMessage2Fill className="text-2xl " />
      </button> */}

      {/* Dialog for Application Form */}
      {isSubmitOpen && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setSubmitOpen(false)}
        />
      )}

      {/* Dialog for Contact Options */}
      {/* <Dialog open={isContactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="!max-w-xl">
          <ContactDialog />
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default FixedButtons;
