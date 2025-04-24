import CurrentSponsors from "../components/Sponcers/CurrentSponsors";
import SponsorCategories from "../components/Sponcers/SponsorCategories";
import SponsorCTA from "../components/Sponcers/SponsorCTA";
import SponsorsHero from "../components/Sponcers/SponsorsHero";
import React from "react";

const SponsorsPage = () => {
  return (
    <div className="h-full text-base-content">
      <SponsorsHero />
      <section id="sponsor-categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SponsorCategories />
          </div>
        </div>
      </section>
      <section id="current-sponsors" className="bg-lightgray">
        <div className="">
          <div className="mx-auto">
            <CurrentSponsors />
          </div>
        </div>
      </section>
      <SponsorCTA />
    </div>
  );
};

export default SponsorsPage;
