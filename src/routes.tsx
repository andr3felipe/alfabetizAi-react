import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./pages/_layouts/default";
import { Home } from "./pages/app/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
