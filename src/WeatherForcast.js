import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForcast-day">Thu</div>

          <WeatherIcon code="01n" />
          <div className="WeatherForcast-temp"> 43°</div>
        </div>
      </div>
    </div>
  );
}
