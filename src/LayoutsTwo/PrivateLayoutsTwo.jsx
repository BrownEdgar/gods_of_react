import React from "react";
import ROUTES from "../../routes";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateLayoutsTwo({isLogin}) {
  return isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}
