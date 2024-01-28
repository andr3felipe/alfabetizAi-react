import { Navigate, Outlet } from "react-router-dom";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

interface PrivateRoutesProps {
  role: string;
}

export function PrivateRoutes({ role }: PrivateRoutesProps) {
  const authenticated = localStorage.getItem(role) || null;

  let redirect = "";

  if (role === "admin") {
    if (authenticated) {
      redirect = "/login?role=aluno";
    } else {
      redirect = "/login?role=admin";
    }
  }

  if (role === "aluno") {
    if (authenticated) {
      redirect = "/login?role=admin";
    } else {
      redirect = "/login?role=aluno";
    }
  }
  return (
    <>
      {role === "admin" && <Header />}

      {authenticated ? <Outlet /> : <Navigate to={redirect} />}

      {role === "admin" && <Footer />}
    </>
  );
}
