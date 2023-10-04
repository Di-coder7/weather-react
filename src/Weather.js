import React from "react";
import axios from "axios";

export default function Weather() {
  function HandleResponse(response) {
    alert(`Weather in ${city} is ${Math.round(response.data.main.temp)}°C`);
  }
  let apiKey = "842b36d55cb28eba74a018029d56b04c";
  let city = "Berlin";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(HandleResponse);
  return <h1>Dasha</h1>;
}
