import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import LoadingIcons from "react-loading-icons";
import WeatherForcast from "./WeatherForcast";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      coords: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setWeatherData({ ready: false });
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <hr />
          <WeatherForcast coords={weatherData.coords} />
        </div>
      </div>
    );
  } else {
    const apiKey = "471199509cdac03b1fbb7909b6351612";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Weather text-center">
        <LoadingIcons.BallTriangle stroke="#172240" strokeOpacity={1} />
      </div>
    );
  }
}
