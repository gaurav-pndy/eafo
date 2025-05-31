import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TableModal } from "./TableModal";
import { t } from "i18next";
import { Link } from "react-router-dom";

const PricingCard = ({
  cards,
  index,
  badge,
  title,
  price,
  details,
  button,
  button2,
  tableData,
  onOpenModal,
  setShowForm,
}) => {
  const renderDetail = (item, idx) => {
    if (typeof item === "string") {
      return (
        <li key={idx} className="flex items-start">
          <FaCheck className="text-green-500 mr-2 mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      );
    } else if (typeof item === "object" && item.main) {
      return (
        <li key={idx} className="flex flex-col items-start">
          <div className="flex items-start">
            <FaCheck className="text-green-500 mr-2 mt-1 shrink-0" />
            <span>{item.main}</span>
          </div>
          {item.sub && Array.isArray(item.sub) && (
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-600 text-sm">
              {item.sub.map((subItem, subIdx) => (
                <li key={subIdx}>{subItem}</li>
              ))}
            </ul>
          )}
        </li>
      );
    }
  };

  const handleOpenModal = () => {
    if (tableData) {
      onOpenModal(index); // trigger parent function
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 bg-white relative flex flex-col">
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

      {/* Title and Price Section */}
      <div className="text-center mb-6">
        <h3
          className="text-xl font-bold mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        {/* <p className="text-sm">{t("pricingOptions.startingFrom")}</p> */}
        <div className="text-3xl font-bold text-blue-900">{price}</div>
      </div>

      {/* Details List */}
      <ul className="space-y-3 mb-6 text-sm flex-1">
        {details.map((item, idx) => renderDetail(item, idx))}
      </ul>

      {/* Button fixed at bottom */}
      <button
        onClick={handleOpenModal}
        className="w-full bg-blue-900 text-white py-2.5 rounded-full hover:bg-blue-800 transition duration-300 text-sm mt-auto"
      >
        {button}
      </button>

      <button
        onClick={() => setShowForm(true)}
        className="w-full mt-2 bg-blue-950 text-white py-2.5 rounded-full hover:bg-blue-900 transition duration-300 text-sm"
      >
        {button2}
      </button>

      {/* {tableData && (
        <TableModal
          isOpen={openModal}
          onClose={handleCloseModal}
     
          tableList={cards.filter((card) => card.tableData)}
          title={title}
          initialIndex={selectedTableIndex}
        />
      )} */}
    </div>
  );
};

export default PricingCard;
