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
import Pricing from "./pages/Pricing";
import HowToRegister from "./pages/HowToRegister";
import RegisterNow from "./pages/RegisterNow";
import Organizations from "./pages/Organizations";
import GalleryPage from "./pages/GalleryPage";
import AwardsPage from "./pages/AwardsPage";
import ProgramPage from "./pages/ProgramPage";

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
          path: "/competitive-selection",
          element: <CompetitiveParticipation />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/gallery-and-archive",
          element: <GalleryPage />,
        },
        {
          path: "/schedule-and-program",
          element: <ScheduleAndProgram />,
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
          path: "/how-to-register",
          element: <HowToRegister />,
        },
        {
          path: "/register",
          element: <RegisterNow />,
        },
        {
          path: "/organizations",
          element: <Organizations />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
