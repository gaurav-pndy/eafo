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
import PreRegisterForm from "../PreRegisterForm";

const Packages = () => {
  const { t } = useTranslation();
  const packages = t("participation.packages", { returnObjects: true });

  const [showForm, setShowForm] = useState(false);

  return (
    <section className="w-full py-16 bg-[#1e3a8a] text-white">
      <h2 className="text-3xl text-white font-bold text-center mb-12">
        {t("participation.packagesTitle")}
      </h2>
      <div className="max-w-6xl mb-12 mx-auto px-4 grid lg:grid-cols-2  gap-8">
        {packages.slice(0, 2).map((item) => (
          <div
            key={item.title}
            className=" p-6 rounded-2xl shadow-lg border border-white relative overflow-hidden"
          >
            {/* <div className="text-4xl text-blue-900 mb-6">
            <FontAwesomeIcon icon={item.icon} />
          </div> */}
            <h2
              className="text-2xl font-bold mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h2>
            <div className="space-y-4 pb-20">
              {" "}
              {/* Extra bottom padding for button space */}
              <p className="text-gray-300 text-center">
                {item.date && item.date}
              </p>
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 mr-3"
                    />
                    <span className="text-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixed button at the bottom */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-900 font-bold px-6 py-3 w-[90%] left-[50%] translate-x-[-50%] bottom-6 cursor-pointer absolute  rounded-2xl hover:bg-gray-200 transition duration-300"
            >
              {t("participation.submit")}
            </button>
          </div>
        ))}

        {/* Dialog Component */}
      </div>
      <div className="max-w-6xl mb-12 mx-auto px-4 grid lg:grid-cols-3  gap-8">
        {packages.slice(2, 5).map((item) => (
          <div
            key={item.title}
            className=" p-6 rounded-2xl shadow-lg border border-white relative overflow-hidden"
          >
            {/* <div className="text-4xl text-blue-900 mb-6">
            <FontAwesomeIcon icon={item.icon} />
          </div> */}
            <h2
              className="text-2xl font-bold mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h2>
            <div className="space-y-4 pb-20">
              {" "}
              {/* Extra bottom padding for button space */}
              <p className="text-gray-300 text-center">
                {item.date && item.date}
              </p>
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 mr-3"
                    />
                    <span className="text-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixed button at the bottom */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-900 font-bold px-6 py-3 w-[90%] left-[50%] translate-x-[-50%] bottom-6 cursor-pointer absolute  rounded-2xl hover:bg-gray-200 transition duration-300"
            >
              {t("participation.submit")}
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2  gap-8">
        {packages.slice(5, 7).map((item) => (
          <div
            key={item.title}
            className=" p-6 rounded-2xl shadow-lg border border-white relative overflow-hidden"
          >
            {/* <div className="text-4xl text-blue-900 mb-6">
            <FontAwesomeIcon icon={item.icon} />
          </div> */}
            <h2
              className="text-2xl font-bold mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h2>
            <div className="space-y-4 pb-20">
              {" "}
              {/* Extra bottom padding for button space */}
              <p className="text-gray-300 text-center">
                {item.date && item.date}
              </p>
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 mr-3"
                    />
                    <span className="text-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixed button at the bottom */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-900 font-bold px-6 py-3 w-[90%] left-[50%] translate-x-[-50%] bottom-6 cursor-pointer absolute  rounded-2xl hover:bg-gray-200 transition duration-300"
            >
              {t("participation.submit")}
            </button>
          </div>
        ))}

        {/* Dialog Component */}
      </div>
      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

export default Packages;
