import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import Experts from "./pages/Experts";
import VisaInformationPage from "./pages/VisaInformationPage";
import PartnerPage from "./pages/PartnerPage";
import ContactUsPage from "./pages/ContactUsPage";
import CoursesPage from "./pages/CoursesPage";
import ParticipationPage from "./pages/ParticipationPage";
import SponsorsPage from "./pages/SponsorsPage";
import CompetitiveParticipation from "./pages/CompetitiveParticipation";
import ScheduleAndProgram from "./pages/ScheduleAndProgram";
import Venue from "./pages/Venue";
// import Pricing from "./pages/Pricing";

import RegisterNow from "./pages/RegisterNow";
import Organizations from "./pages/Organizations";
import GalleryPage from "./pages/GalleryPage";
import AwardsPage from "./pages/AwardsPage";
import ProgramPage from "./pages/ProgramPage";
import PricePage from "./pages/PricePage";
import SubsidizedPage from "./pages/SubsidizedPage";
import Accomodation from "./pages/Accomodation";
import AboutPage from "./pages/AboutPage";
import HowToApply from "./pages/HowToApply";
import AboutCityPage from "./pages/AboutCityPage";
import ParticipationCategories from "./pages/ParticipationCategories";
import Certificates from "./pages/Certificates";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/experts",
          element: <Experts />,
        },
        {
          path: "/visa",
          element: <VisaInformationPage />,
        },
        {
          path: "/partners",
          element: <PartnerPage />,
        },
        {
          path: "/contact-us",
          element: <ContactUsPage />,
        },
        {
          path: "/courses",
          element: <CoursesPage />,
        },
        {
          path: "/participation-variants",
          element: <ParticipationPage />,
        },
        {
          path: "/sponsors",
          element: <SponsorsPage />,
        },
        {
          path: "/awards",
          element: <AwardsPage />,
        },
        {
          path: "/competitive-participation",
          element: <SubsidizedPage />,
        },
        {
          path: "/categories-of-participation",
          element: <ParticipationCategories />,
        },
        {
          path: "/pricing",
          element: <PricePage />,
        },
        {
          path: "/gallery",
          element: <GalleryPage />,
        },
        {
          path: "/schedule-and-program",
          element: <ProgramPage />,
        },
        {
          path: "/program",
          element: <ProgramPage />,
        },
        {
          path: "/venue",
          element: <Venue />,
        },
        {
          path: "/accommodation",
          element: <Accomodation />,
        },
        {
          path: "/how-to-apply",
          element: <HowToApply />,
        },
        {
          path: "/register",
          element: <RegisterNow />,
        },
        {
          path: "/organizations",
          element: <PartnerPage />,
        },
        {
          path: "/about-city",
          element: <AboutCityPage />,
        },
        {
          path: "/certificates",
          element: <Certificates />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
