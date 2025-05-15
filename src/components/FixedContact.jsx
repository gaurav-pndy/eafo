import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useTranslation } from "react-i18next";
import { RiMessage2Fill } from "react-icons/ri";
import ContactDialog from "./Courses/ContactDialog";

const FixedContact = () => {
  const { t } = useTranslation();
  //   const [isSubmitOpen, setSubmitOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Contact Us Button */}
      <button
        onClick={() => setContactOpen(true)}
        className="fixed bottom-20 xl:bottom-2 cursor-pointer right-2 xl:right-8 bg-blue-900 text-white border border-white  rounded-full p-5 hover:bg-blue-800 transition duration-300 z-50"
      >
        <RiMessage2Fill className="text-2xl " />
      </button>

      {/* Dialog for Contact Options */}
      <Dialog open={isContactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="!max-w-xl">
          <ContactDialog />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FixedContact;
