import React from "react";
import ROUTES from "../../routes";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateLayouts({ isLogin }) {
  return isLogin ? <Outlet /> : <Navigate to={ROUTES.SIGNIN} />;
}
