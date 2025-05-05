import AccommodationHero from "@/components/Accommodation/AccommodationHero";
import Hotels from "@/components/Accommodation/Hotels";
import HotelsMap from "@/components/Accommodation/HotelsMap";
import React from "react";

const Accomodation = () => {
  return (
    <div>
      <AccommodationHero />
      <Hotels />
      <HotelsMap />
    </div>
  );
};

export default Accomodation;
