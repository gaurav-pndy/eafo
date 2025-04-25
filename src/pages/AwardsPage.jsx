import AwardsCTA from "@/components/Awards/AwardsCTA";
import GrandPrize from "@/components/Awards/GrandPrize";
import HeroSection from "@/components/Awards/HeroSection";
import RunnerUpPrizes from "@/components/Awards/RunnerUpPrizes";


const AwardsPage = () => {
  return (
    <div className="text-base-content bg-white">
      <HeroSection />
      <section id="awards-section" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <GrandPrize />
          <RunnerUpPrizes />
          <AwardsCTA />
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
