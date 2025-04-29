"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

export function TableModal({ isOpen, onClose, tableData, title }) {
  const { t } = useTranslation();

  if (!tableData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[95vw] md:!max-w-[80vw] max-h-[90vh] overflow-y-auto p-3 md:p-6">
        <DialogHeader>
          {/* <DialogTitle
            className="text-center text-lg md:text-2xl"
            dangerouslySetInnerHTML={{ __html: title }}
          ></DialogTitle> */}
        </DialogHeader>

        {/* Table */}
        <div className="overflow-x-auto">
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
