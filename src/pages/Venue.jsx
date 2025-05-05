import Facilities from "@/components/Venue/Facilities";
import VenueHero from "@/components/Venue/VenueHero";
import VenueMap from "@/components/Venue/VenueMap";
import React from "react";

const Venue = () => {
  return (
    <div>
      <VenueHero />
      <Facilities />
      <VenueMap />
    </div>
  );
};

export default Venue;
