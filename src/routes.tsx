import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./pages/_layouts/default";
import { Home } from "./pages/app/Home";
import { Classroom } from "./pages/app/Classroom";
import { Login } from "./pages/app/Login";
import { Register } from "./pages/app/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/saladeaula",
        element: <Classroom />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Register />,
      },
    ],
  },
]);
