import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Damascus" />
      <footer>
        <p>
          <a
            href="https://github.com/Ranem97/react-weather-app"
            target="_blank"
          >
            Open-Source Code
          </a>
          <span> by Ranem Haffar</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
