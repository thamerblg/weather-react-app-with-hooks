import React from "react";
import logoSunset from "../icons/temp.svg";
import logoSunrise from "../icons/temp.svg";
import logoHumidity from "../icons/humidity.svg";
import logoWind from "../icons/wind.svg";
import logoPressure from "../icons/pressure.svg";

export const WeatherInfoIcons = {
  sunset: logoSunset,
  sunrise: logoSunrise,
  humidity: logoHumidity,
  wind: logoWind,
  pressure: logoPressure,
};

const WeatherInfoComponent = ({ name, value }) => {
  return (
    <div className="infoContainer">
      <img
        className="infoIcon"
        src={WeatherInfoIcons[name]}
        alt="img-weatherinfo"
      />
      <span className="infoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

export default WeatherInfoComponent;
