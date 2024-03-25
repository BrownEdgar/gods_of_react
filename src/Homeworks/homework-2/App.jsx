import React from "react";
import "./App.scss";
export default function App() {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__title">
          <h1>Create Account</h1>
          <p>Choose one of the following sign up methods</p>
        </div>
        <div className="App__btns">
          <button className="App__btn">
            <i class="bx bxl-facebook col"></i>
            <p>With Facebook</p>
          </button>
          <button className="App__btn col">
            <i class="bx bxl-google-plus"></i>
            <p> With Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}
