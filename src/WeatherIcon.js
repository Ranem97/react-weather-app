import React from "react";

export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": "SunnyDayV3",
    "01n": "ClearNightV3",
    "02d": "MostlySunnyDay",
    "02n": "MostlyClearNight",
    "03d": "CloudyV3",
    "03n": "CloudyV3",
    "04d": "MostlyCloudyDayV2",
    "04n": "MostlyCloudyNightV2",
    "09d": "LightRainV3",
    "09n": "LightRainV3",
    "10d": "RainShowersDayV2",
    "10n": "RainShowersNightV2",
    "11d": "ThunderstormsV2",
    "11n": "ThunderstormsV2",
    "13d": "ModerateRainV2",
    "13n": "ModerateRainV2",
    "50d": "ThunderstormsV2",
    "50n": "ThunderstormsV2",
  };
  const iconURL = `https://assets.msn.com/bundles/v1/weather/latest/${
    iconMapping[props.code]
  }.svg`;

  return <img src={iconURL} />;
}
