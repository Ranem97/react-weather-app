import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 text-capitalize">
          <h1>{props.data.city}</h1>
          <h5>
            <FormattedDate date={props.data.date} />
          </h5>
          <WeatherIcon code={props.data.icon} />

          <h3>{props.data.description}</h3>
        </div>
        <div className="col-6">
          <WeatherTemperature
            celsius={props.data.temperature}
            min={props.data.min}
            max={props.data.max}
          />
        </div>
      </div>
    </div>
  );
}
