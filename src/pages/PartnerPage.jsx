import React from "react";

import { partnerSections } from "../components/PartnerSection/partnersData";
import SectionHero from "../components/PartnerSection/SectionHero";
import SectionIntro from "../components/PartnerSection/SectionIntro";
import PartnerGrid from "../components/PartnerSection/PartnerGrid";
import CTASection from "../components/PartnerSection/CTASection";

const PartnerPage = () => {
  return (
    <main className="text-base-content">
      <SectionHero />
      <SectionIntro />

      <section className="py-16 bg-gray-50 space-y-20">
        {partnerSections.map(({ id, titleKey, logos }) => (
          <PartnerGrid key={id} id={id} titleKey={titleKey} logos={logos} />
        ))}
      </section>

      <CTASection />
    </main>
  );
};

export default PartnerPage;
