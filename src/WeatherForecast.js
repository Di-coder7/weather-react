import React, { useState, useEffect } from "react";
import ForecastDaily from "./ForecastDaily";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastDaily, setForecastDaily] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastDaily(response.data.daily);
  }

  function loadResponseCall() {
    let apiKey = "ea3e8t0b7eb8132058cob149a9a9ff7f";
    let unit = "metric";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    console.log(forecastDaily);
    return (
      <div className="weatherForecast">
        <div className="row weatherForecastDescription">
          {forecastDaily.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-2" key={index}>
                  <ForecastDaily data={dailyForecast} />
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
    loadResponseCall();

    return "Loading....";
  }
}
