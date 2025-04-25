import Benefits from "@/components/Subsidized/Benefits";
import Conditions from "@/components/Subsidized/Conditions";
import EligibilityCriteria from "@/components/Subsidized/EligibilityCriteria";
import SubsidizedCTA from "@/components/Subsidized/SubsidizedCTA";
import SubsidizedHero from "@/components/Subsidized/SubsidizedHero";
import SubsidizedOverview from "@/components/Subsidized/SubsidizedOverview";

const SubsidizedPage = () => {
  return (
    < div className="bg-white">
      <SubsidizedHero />
      <SubsidizedOverview />
      <EligibilityCriteria />
      <Conditions />
      <Benefits />
      <SubsidizedCTA />
    </div>
  );
};

export default SubsidizedPage;
