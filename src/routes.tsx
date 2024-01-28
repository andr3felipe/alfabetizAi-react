import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/app/Home";
import { Classroom } from "./pages/auth/Classroom";
import { Login } from "./pages/app/Login";
import { Register } from "./pages/app/Register";
import { Error } from "./pages/app/Error";
import { DefaultLayout } from "./pages/_layouts/Default";
import { PrivateRoutes } from "./pages/_layouts/PrivateRoutes";
import { Painel } from "./pages/auth/Painel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes role="aluno" />,
    errorElement: <Error />,
    children: [
      {
        path: "sala-de-aula",
        element: <Classroom />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes role="admin" />,
    errorElement: <Error />,
    children: [
      {
        path: "painel-de-controle",
        element: <Painel />,
      },
    ],
  },
]);
