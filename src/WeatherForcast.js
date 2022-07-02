import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";
import ForcastDay from "./ForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForcast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row">
          {forcast.map(function (dailyForcast, index) {
            if (index < 5) {
              return (
                <div className="col-sm-2" key={index}>
                  <ForcastDay data={dailyForcast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "471199509cdac03b1fbb7909b6351612";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
