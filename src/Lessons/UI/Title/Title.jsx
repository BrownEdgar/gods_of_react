import classNames from "classnames";
import React from "react";
import "./Title.scss";

export default function Title({ title }) {
  return (
    <h1
      className={classNames("Title", {
        [`Title-${color}`]: true,
      })}
    >
      {title}
    </h1>
  );
}
