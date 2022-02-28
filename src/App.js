import axios from "axios";
import { useState } from "react";
import "./App.css";
import WeatherComponent from "./components/WeatherComponent";
import CityComponent from "./components/CityComponent";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8931b1205c760dfe335609ae9c3c31f`
    );
    setWeather(response.data);
  };
  return (
    <div className="container">
      <span className="AppLabel">React Weather App</span>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
