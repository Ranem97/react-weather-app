import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForcastDay(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = date.getDay();
    return days[day];
  }

  console.log(props);
  return (
    <div className="ForcastDay">
      <div className="WeatherForcast-day">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="WeatherForcast-temp"> {temperature()}°</div>
    </div>
  );
}
