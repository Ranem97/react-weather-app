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
            rel="noopener noreferrer"
          >
            Open-Source Code
          </a>
          <span>
            {" "}
            by{" "}
            <a
              href="https://focused-joliot-da009a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ranem Haffar
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
