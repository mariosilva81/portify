import { useContext } from "react";
import { UserContext } from "../providers/UserContext/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export const PublicsRoutes = () => {
  const { user } = useContext(UserContext)

  // PRECISA VERIFICAR PARA QUAL PÁGINA REDIRECIONAR COM BASE NO PERFIL DO USUÁRIO (SE TEM OU NÃO PORTFOLIO PUBLICADO)
  return !user ? <Outlet /> : <Navigate to="/dashboard/unpublished" />
  // return user ? <Outlet /> : <Navigate to="/dashboard/published" />
}
