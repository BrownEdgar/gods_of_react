import React from "react";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Create Account</h1>
      <p>Choose one of the following sign up methods</p>
      <div className="App__block">
        <button className="App__block-left ">
          <i class="bx bxl-facebook"></i>
          With Facebook
        </button>
        <button className="App__block-right">
          <i class="bx bxl-google-plus"></i>
          With Google
        </button>
      </div>

      <div className="App__content">
        <button>
          <i class="bx bxl-facebook"></i>
        </button>
        <button>
          <i class="bx bxl-twitter"></i>
        </button>
        <button>
          <i class="bx bxl-google"></i>
        </button>
        <button>
          <i class="bx bxl-instagram"></i>
        </button>
        <button>
          <i class="bx bxl-youtube"></i>
        </button>
      </div>
    </div>
  );
}
