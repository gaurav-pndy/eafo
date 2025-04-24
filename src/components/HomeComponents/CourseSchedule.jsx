import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const scheduleItems = [
  {
    date: "schedule.date1",
    descriptionKey: "schedule.opening",
  },
  {
    date: "schedule.date2",
    descriptionKey: "schedule.lectureFree",
  },
  {
    date: "schedule.date3",
    descriptionKey: "schedule.lectureFree",
  },
  {
    date: "schedule.date4",
    descriptionKey: "schedule.closing",
  },
];

const CourseSchedule = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {t("schedule.title")}
        </h2>
        <div className="relative border-l-4 border-[#202366] pl-6 space-y-10">
          {scheduleItems.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-9 top-2 w-5 h-5 bg-[#202366] rounded-full"></span>
              <p className="font-semibold text-lg">{t(item.date)}</p>
              <p className="text-gray-700 ">{t(item.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CourseSchedule;
