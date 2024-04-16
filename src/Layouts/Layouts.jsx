import React from "react";
import { Outlet } from "react-router-dom";
import "./Layouts.scss";

export default function Layouts() {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
