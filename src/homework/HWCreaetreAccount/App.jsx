// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__header">
          <h1 className="App__hed">Create Account</h1>
          <p className="App__info">
            Choose one of the following sign up methods
          </p>
        </div>

        <div className="App__btn">
          <button className="App__butn App__fb">
            <i className="bx bxl-facebook" ></i>
            With Facebook
          </button>

          <button className="App__butn App__g">
            <i className="bx bxl-google-plus  bx-sm"></i>
            With Google
          </button>
        </div>
      </div>
    </div>
  );
}