import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import getWeather  from "../../services/weather.js";

import './weatherDetails.css';


const WeatherDetails = () => {
  const data = getWeather('London');
  return (
    <>
      <div className="weather-box">
        <h1 className="temperature">{ data.current.temp_c }° C</h1>
        <h3 className="description">{ data.current.condition.text }</h3>
      </div>
      <div className="weather-details">
        <div className="humidity">
          <i>
            <WiHumidity />
          </i>
          <div className="data">
            <p className="value">{ data.current.humidity } %</p>
            <label>Humedad</label>
          </div>
        </div>
        <div className="wind">
          <i>
            <FiWind />
          </i>
          <div className="data">
          <p className="value">{ data.current.wind_kph } km/h</p>
          <label>Velocidad del Viento</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default WeatherDetails;