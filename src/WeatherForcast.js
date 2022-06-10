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
    console.log(forcast);
    return (
      <div className="WeatherForcast">
        <div className="row">
          <div className="col-2">
            <ForcastDay data={forcast[0]} />
          </div>
          <div className="col-2">
            <ForcastDay data={forcast[1]} />
          </div>
          <div className="col-2">
            <ForcastDay data={forcast[2]} />
          </div>
          <div className="col-2">
            <ForcastDay data={forcast[3]} />
          </div>
          <div className="col-2">
            <ForcastDay data={forcast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "471199509cdac03b1fbb7909b6351612";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "hi";
  }
}
