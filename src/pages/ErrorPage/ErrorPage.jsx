import React from "react";
import "./ErrorPage.scss";
import ROUTES from "../../routes";
import { Link, useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <div className="ErrorPage">
      <h1>404 PAGE NOT FOUND</h1>
      <Link to={ROUTES.HOME}>Go HOME</Link>
      <button onClick={goHome}>go homee</button>
    </div>
  );
}
