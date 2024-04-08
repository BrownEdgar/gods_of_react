import React from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";

import "./LayoutsTwo.scss";

export default function LayoutsTwo() {
  return (
    <div className="LayoutsTwo">
      
      <Outlet />
    </div>
  );
}
