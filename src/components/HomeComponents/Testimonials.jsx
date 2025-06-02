import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

//
const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.person1.name"),
      review: t("testimonials.person1.review"),
      userImage: t("testimonials.person1.userImage"),
    },
    {
      name: t("testimonials.person2.name"),
      review: t("testimonials.person2.review"),
      userImage: t("testimonials.person2.userImage"),
    },
    {
      name: t("testimonials.person3.name"),
      review: t("testimonials.person3.review"),
      userImage: t("testimonials.person3.userImage"),
    },
  ];

  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-16 bg-white overflow-x-hidden"
    >
      <div className="max-w-7xl  relative mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {" "}
          {t("testimonials.title")}{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <Card
              key={index}
              className="flex flex-col bg-red-100 items-center gap-4 p-4 text-center "
            >
              <img
                src={review.userImage}
                className="w-48 h-48 rounded-full  object-cover bg-gray-300 "
              />
              <div>
                <h3 className="font-bold text-xl text-[#1e3a8a] ">
                  {review.name}
                </h3>
              </div>

              <Button
                className="mt-2 rounded-full px-5 border border-gray-400 hover:bg-gray-200 cursor-pointer transition-all font-semibold duration-300"
                variant="outline"
                onClick={() => setSelectedReview(review)}
              >
                {t("testimonials.button")}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedReview}
        onOpenChange={() => setSelectedReview(null)}
      >
        <DialogOverlay className="bg-black bg-opacity-25 backdrop-blur-md" />
        <DialogContent className="lg:max-w-[80vw] max-h-[80vh] mx-auto bg-white rounded-lg shadow-lg p-2 lg:p-6 overflow-y-auto">
          {selectedReview && (
            <>
              <img
                src={selectedReview.userImage}
                alt={selectedReview.name}
                className="w-28 h-28 rounded-full object-cover mx-auto"
              />
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: selectedReview.review }}
              ></div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Testimonials;
