import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metrics");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metrics");
  }

  if (unit === "metrics") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          <span className="temp">{Math.round(props.celsius)}</span>
          <span className="unit">
            °
            <a href="/" onClick={convertToFahrenheit}>
              F
            </a>
          </span>
        </div>
        <div className="min-max">
          <span className="max">{Math.round(props.max)}°</span>/
          <span className="min"> {Math.round(props.min)}°</span>
        </div>
      </div>
    );
  } else {
    let FahrenheitTemp = (props.celsius * 9) / 5 + 32;
    let MaxTemp = (props.max * 9) / 5 + 32;

    let MinTemp = (props.min * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          <span className="temp">{Math.round(FahrenheitTemp)}</span>
          <span className="unit">
            °
            <a href="/" onClick={convertToCelsius}>
              C
            </a>
          </span>
        </div>
        <div className="min-max">
          <span className="max">{Math.round(MaxTemp)}°</span>/
          <span className="min"> {Math.round(MinTemp)}°</span>
        </div>
      </div>
    );
  }
}
