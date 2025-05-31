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
import { motion } from "framer-motion";

const Prizes = () => {
  const { t } = useTranslation();

  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  return (
    <section className="px-4 lg:px-10 xl:px-20 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mt-1">
          {t("prizes.title")}
        </h2>
      </div>

      {/* Award Tiles */}
      <div className="flex flex-col xl:flex-row gap-6">
        {/* <div
          className="xl:w-[40%] bg-white  lg:p-6 rounded-lg  text-gray-800 leading-relaxed xl:text-right"
          dangerouslySetInnerHTML={{ __html: t("prizes.desc") }}
        ></div> */}
        <div className=" grid grid-cols-1 md:grid-cols-3 items-end xl:max-w-5xl xl:px-10 mx-auto gap-4 lg:gap-12">
          {/* Tile 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#f1f4fb] p-6 xl:p-3 2xl:p-6 rounded-lg   h-full md:h-[20rem] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1e2939] mb-3 md:mb-5">
                {t("prizes.tile2.title")}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg">
                {t("prizes.tile2.subtitle")}
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-white hover:bg-gray-200 cursor-pointer transition-all font-semibold duration-300 text-sm lg:text-lg  px-3 h-fit md:px-16 py-3 rounded-full ">
                  {t("prizes.more_details")}
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-5">
                    {t("prizes.tile2.title")}
                  </DialogTitle>
                  <DialogDescription>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("prizes.tile2.desc"),
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
          </motion.div>

          {/* Other Tiles */}
          {[
            {
              id: 1,
              title: "prizes.tile1.title",
              subtitle: "prizes.tile1.subtitle",
              height: "h-full md:h-[24rem]",
              // bgColor: "bg-[#DCEEF2]",
              // textColor: "text-[#0288D1]",
              content: "prizes.tile1.desc",
            },
            {
              id: 2,
              title: "prizes.tile3.title",
              subtitle: "prizes.tile3.subtitle",
              height: "h-full md:h-[16rem]",
              // bgColor: "bg-[#FFF3E0]",
              // textColor: "text-[#F57C00]",
              content: "prizes.tile3.desc",
            },
          ].map((tile, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 2) }}
              key={index}
              className={`bg-[#f1f4fb] p-6 xl:p-3 2xl:p-6 rounded-lg  ${tile.height} flex flex-col justify-between`}
            >
              <div className="">
                <h3
                  className={`text-2xl lg:text-3xl 2xl:text-3xl font-bold text-[#1e2939] mb-3 md:mb-5 break-words`}
                >
                  {t(tile.title)}
                </h3>
                <p className="text-sm lg:text-base xl:text-lg">
                  {t(tile.subtitle)}
                </p>
                {tile.id === 1 && (
                  <img
                    src="/gift.png"
                    alt="Gift"
                    className="w-36  h-36  mx-auto"
                  />
                )}
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={`bg-white hover:bg-gray-200 cursor-pointer transition-all font-semibold duration-300 text-sm lg:text-lg  px-3 h-fit md:px-16 py-3 rounded-full `}
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
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#f1f4fb] p-6 xl:p-3 2xl:p-6 rounded-lg  h-full md:h-32 md:col-span-3 flex gap-5 flex-col md:flex-row justify-between md:items-center"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl  font-bold text-[#1e2939] mb-5">
                {t("prizes.tile4.title")}
              </h3>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-white hover:bg-gray-200 cursor-pointer transition-all font-semibold duration-300 text-sm lg:text-lg  px-3 h-fit md:px-16 py-3 rounded-full w-full md:w-fit">
                  {t("prizes.more_details")}
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-5">
                    {t("prizes.tile4.title")}
                  </DialogTitle>
                  <DialogDescription>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("prizes.tile4.desc"),
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
