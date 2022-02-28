import React from "react";
import "../App.css";
import logo from "../icons/perfect-day.svg";

const CityComponent = ({ setCity, fetchWeather }) => {
  return (
    <>
      <img className="welcomeWeatherLogo" alt="logo-app" src={logo} />
      <span className="chooseCityLabel">Find Weather of your city</span>
      <form className="searchBox" onSubmit={fetchWeather}>
        <input onChange={(e) => setCity(e.target.value)} placeholder="City" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default CityComponent;
