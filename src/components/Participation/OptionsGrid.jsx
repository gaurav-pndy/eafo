import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DOMPurify from "dompurify";

const OptionsGrid = () => {
  const { t } = useTranslation();
  const options = t("participation.options", { returnObjects: true });

  // State to manage dialog
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setOpen(true);
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {options.map((option) => (
        <div
          key={option.id}
          id={option.id}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
        >
          <div className="text-4xl text-blue-900 mb-6">
            <FontAwesomeIcon icon={option.icon} />
          </div>
          <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
          <div className="space-y-4 pb-20">
            {" "}
            {/* Extra bottom padding for button space */}
            <p className="text-gray-600">{option.description}</p>
            <ul className="space-y-3">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 mr-3"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fixed button at the bottom */}
          <button
            onClick={() => handleButtonClick(option)}
            className="bg-blue-900 text-white px-6 py-3 w-[90%] left-[50%] translate-x-[-50%] bottom-6 cursor-pointer absolute  rounded-2xl hover:bg-blue-800 transition duration-300"
          >
            {t("participation.moreDetails")}
          </button>
        </div>
      ))}

      {/* Dialog Component */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-6xl !max-h-[90vh] overflow-y-scroll">
          <div
            className="text-gray-800 text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selectedOption?.details || ""),
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OptionsGrid;
