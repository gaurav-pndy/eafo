import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
