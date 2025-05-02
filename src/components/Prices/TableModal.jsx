import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function TableModal({ isOpen, onClose, tableList = [], initialIndex }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // 🔁 Sync currentIndex with initialIndex whenever modal opens or index changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  const tableData = tableList[currentIndex]?.tableData;

  if (!tableData) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tableList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? tableList.length - 1 : prev - 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[100vw] md:!max-w-[85vw] max-h-[90vh] overflow-y-auto p-3 px-5 md:p-6 md:px-20">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-lg md:text-2xl">
            {tableData.title}
          </DialogTitle>
        </DialogHeader>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-3 md:left-3 cursor-pointer transform -translate-y-1/2  text-5xl  "
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-3 md:right-3 text-5xl cursor-pointer transform -translate-y-1/2 "
        >
          <IoIosArrowForward />
        </button>
        {/* Table */}
        <div className="overflow-x-auto mt-4 md:mt-0">
          <table className="min-w-full border border-gray-300 text-sm md:text-base table-fixed">
            <thead className="bg-[#1e3b8b] text-white">
              <tr>
                {tableData.headings.map((heading, index) => (
                  <th
                    key={index}
                    className={`border border-gray-300 px-2 py-2 md:px-4  ${
                      index === 0 ? "text-left w-32 md:w-xl" : "text-center"
                    }`}
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`border border-gray-300 px-2 py-2 md:px-4 md:py-3 ${
                        cellIndex === 0
                          ? "text-left w-32 md:w-48"
                          : "text-center font-semibold"
                      }`}
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="w-full md:w-auto bg-[#1e3b8b] hover:bg-blue-950 cursor-pointer text-white font-semibold py-3 px-8 rounded-4xl">
            {tableData.button}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
