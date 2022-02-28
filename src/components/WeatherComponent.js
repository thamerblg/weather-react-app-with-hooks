import React from "react";
import WeatherInfoComponent from "./WeatherInfoComponent";
import sunny from "../icons/sunny.svg";
import night from "../icons/night.svg";
import day from "../icons/day.svg";
import cloudyNight from "../icons/cloudy-night.svg";
import cloudy from "../icons/cloudy.svg";
import perfectDay from "../icons/perfect-day.svg";
import rain from "../icons/rain.svg";
import rainNight from "../icons/rain-night.svg";
import storm from "../icons/storm.svg";

export const WeatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudyNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectDay,
  "04n": cloudyNight,
  "09d": rain,
  "09n": rainNight,
  "10d": rain,
  "10n": rainNight,
  "11d": storm,
  "11n": storm,
};

const WeatherComponent = ({ weather, city }) => {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <div className="weatherContainer">
        <div className="condition">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </div>
        <img
          className="weatherIcon"
          src={WeatherIcons[weather?.weather[0].icon]}
          alt="img-weather"
        />
      </div>
      <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

      <span className="eatherInfoLabel">Weather Info</span>
      <div className="weatherInfoContainer">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </div>
    </>
  );
};

export default WeatherComponent;
