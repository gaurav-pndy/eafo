import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const Prizes = () => {
  const { t } = useTranslation();

  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  return (
    <section className="px-4 lg:px-20 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mt-1">
          {t("prizes.title")}
        </h2>
      </div>

      {/* Award Tiles */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          className="lg:w-[40%] bg-white  lg:p-6 rounded-lg  text-gray-800 leading-relaxed lg:text-right"
          dangerouslySetInnerHTML={{ __html: t("prizes.desc") }}
        ></div>
        <div className="lg:w-[60%] grid grid-cols-2 lg:grid-cols-4 items-end max-w-6xl mx-auto gap-6">
          {/* Tile 1 */}
          <div className="bg-[#f1f4fb] p-6 rounded-lg shadow-lg h-72 lg:h-[22rem] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1e2939] mb-5">
                {t("prizes.tile1.title")}
              </h3>
              <p className="text-sm lg:text-base">
                {t("prizes.tile1.subtitle")}
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-[#1e3a8a] text-sm lg:text-base text-white px-3 lg:px-6 py-2 rounded-lg mt-4">
                  {t("prizes.more_details")}
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-5">
                    {t("prizes.tile1.title")}
                  </DialogTitle>
                  <DialogDescription>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("prizes.tile1.desc"),
                      }}
                      className="text-base"
                    ></div>
                  </DialogDescription>
                </DialogHeader>
                {/* <DialogClose asChild>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                  Закрыть
                </button>
              </DialogClose> */}
              </DialogContent>
            </Dialog>
          </div>

          {/* Other Tiles */}
          {[
            {
              title: "prizes.tile2.title",
              subtitle: "prizes.tile2.subtitle",
              height: "h-72 lg:h-[20rem]",
              // bgColor: "bg-[#DCEEF2]",
              // textColor: "text-[#0288D1]",
              content: "prizes.tile2.desc",
            },
            {
              title: "prizes.tile3.title",
              subtitle: "prizes.tile3.subtitle",
              height: "h-72 lg:h-[18rem]",
              // bgColor: "bg-[#FFF3E0]",
              // textColor: "text-[#F57C00]",
              content: "prizes.tile3.desc",
            },
            {
              title: "prizes.tile4.title",
              subtitle: "prizes.tile4.subtitle",
              height: "h-72 lg:h-[16rem]",
              // bgColor: "bg-[#EDE7F6]",
              // textColor: "text-[#673AB7]",
              content: "prizes.tile4.desc",
            },
          ].map((tile, index) => (
            <div
              key={index}
              className={`bg-[#f1f4fb] p-6 rounded-lg shadow-lg ${tile.height} flex flex-col justify-between`}
            >
              <div>
                <h3
                  className={`text-2xl lg:text-3xl font-bold text-[#1e2939]  mb-5 break-words`}
                >
                  {t(tile.title)}
                </h3>
                <p className="text-sm lg:text-base">{t(tile.subtitle)}</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={`${tile.textColor} bg-[#1e3a8a] text-sm lg:text-base text-white px-6 py-2 rounded-lg mt-4`}
                  >
                    {t("prizes.more_details")}
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-5">
                      {t(tile.title)}
                    </DialogTitle>
                    <DialogDescription>
                      <div
                        dangerouslySetInnerHTML={{ __html: t(tile.content) }}
                        className="text-base"
                      ></div>
                    </DialogDescription>
                  </DialogHeader>
                  {/* <DialogClose asChild>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                    Закрыть
                  </button>
                </DialogClose> */}
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
