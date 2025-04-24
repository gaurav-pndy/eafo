import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    nameKey: "testimonials.drPetrov.name",
    titleKey: "testimonials.drPetrov.title",
    quoteKey: "testimonials.drPetrov.quote",
    image: "/testimonials/alumni1.jpg",
  },
  {
    nameKey: "testimonials.drIvanova.name",
    titleKey: "testimonials.drIvanova.title",
    quoteKey: "testimonials.drIvanova.quote",
    image: "/testimonials/alumni2.jpg",
  },
  {
    nameKey: "testimonials.drVolkov.name",
    titleKey: "testimonials.drVolkov.title",
    quoteKey: "testimonials.drVolkov.quote",
    image: "/testimonials/alumni3.jpg",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {t("testimonials.title")}
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col gap-3"
            >
              <img
                src={testimonial.image}
                alt={t(testimonial.nameKey)}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <FaQuoteLeft className="text-[#cdd4e5] text-3xl mb-2" />
                <p className="text-gray-700">“{t(testimonial.quoteKey)}”</p>
              </div>
              <div className="mt-2">
                <p className="font-semibold">{t(testimonial.nameKey)}</p>
                <p className="text-sm text-gray-500">
                  {t(testimonial.titleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
