import React from "react";
import VisaHero from "../components/VisaInformation/VisaHero";
import VisaOptions from "../components/VisaInformation/VisaOptions";
import VisaRequirements from "../components/VisaInformation/VisaRequirements";
import VisaFreeCountries from "../components/VisaInformation/VisaFreeCountries";
import EVisaCountries from "../components/VisaInformation/EVisaCountries";
import VisaHelp from "../components/VisaInformation/VisaHelp";
import VisaFAQ from "../components/VisaInformation/VisaFAQ";

const VisaInformationPage = () => {
  return (
    <div className="text-base-content">
      <VisaHero />
      <VisaOptions />
      <VisaRequirements />
      <VisaFreeCountries />
      <EVisaCountries />
      <VisaHelp />
      <VisaFAQ />
    </div>
  );
};

export default VisaInformationPage;
