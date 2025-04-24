import ContactForm from "../components/ContactUs/ContactForm";
import ContactHero from "../components/ContactUs/ContactHero";
import ContactInfo from "../components/ContactUs/ContactInfo";
import MapSection from "../components/ContactUs/MapSection";
import OfficeLocations from "../components/ContactUs/OfficeLocations";
import React from "react";

const ContactUsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <OfficeLocations />

      {/* Map */}
      <MapSection />
    </>
  );
};

export default ContactUsPage;
