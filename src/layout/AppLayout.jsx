import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FixedContact from "@/components/FixedContact";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mt-20 lg:mt-22">
        <Outlet />
      </main>
      <Footer />
      <FixedContact />
    </div>
  );
};

export default AppLayout;
