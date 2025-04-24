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
          path: "/partner",
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
          path: "/participation",
          element: <ParticipationPage />,
        },
        {
          path: "/sponsors",
          element: <SponsorsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
