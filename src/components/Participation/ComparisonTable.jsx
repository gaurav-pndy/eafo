import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Animation for the entire table
const tableVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Animation for each row
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const ComparisonTable = () => {
  const { t } = useTranslation();
  const comparisonData = t("participation.comparison", { returnObjects: true });

  const renderCell = (value) => {
    if (value === true) {
      return <FontAwesomeIcon icon={faCheck} className="text-green-500" />;
    }
    if (value === false) {
      return <FontAwesomeIcon icon={faMinus} className="text-gray-400" />;
    }
    return value;
  };

  return (
    <motion.div
      id="benefits-comparison"
      className="mt-16"
      initial="hidden"
      animate="visible"
      variants={tableVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        {comparisonData.title}
      </h2>
      <div className="overflow-x-auto">
        <motion.table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left">Feature</th>
              <th className="px-6 py-4 text-center">
                On-Site with Accommodation
              </th>
              <th className="px-6 py-4 text-center">On-Site</th>
              <th className="px-6 py-4 text-center">Online</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {comparisonData.features.map((feature, index) => (
              <motion.tr
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                custom={index} // pass index for staggered animation
              >
                <td className="px-6 py-4">{feature.name}</td>
                <td className="px-6 py-4 text-center">
                  {renderCell(feature.onsiteAccommodation)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderCell(feature.onsite)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderCell(feature.online)}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
};

export default ComparisonTable;
