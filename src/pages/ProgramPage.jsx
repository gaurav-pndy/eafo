import AdditionalInfoCard from "@/components/Program/AdditionalInfoCard";
import CourseModuleCard from "@/components/Program/CourseModuleCard";
import HeroSection from "@/components/Program/HeroSection";
import PreviousPrograms from "@/components/Program/PreviousPrograms";
import ProgramOverview from "@/components/Program/ProgramOverview";
import TimelineItem from "@/components/Program/TimelineItem";
import { useTranslation } from "react-i18next";

const ProgramPage = () => {
  const { t } = useTranslation();

  const modules = t("Program.modules", { returnObjects: true });
  const timeline = t("Program.timeline.events", { returnObjects: true });
  const additional = t("Program.additional", { returnObjects: true });

  return (
    <>
      <HeroSection />
      <PreviousPrograms />
      <ProgramOverview />

      <section className="bg-white container mx-auto  px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((mod, idx) => (
            <CourseModuleCard key={idx} {...mod} />
          ))}
        </div>

        <div className="mt-16 bg-white max-w-5xl mx-auto">
          <h2 className=" text-3xl font-bold text-blue-900 mb-8">
            {t("Program.timeline.title")}
          </h2>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <TimelineItem key={idx} {...item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto  max-w-5xl ">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(additional).map((info, idx) => (
              <AdditionalInfoCard key={idx} {...info} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramPage;
