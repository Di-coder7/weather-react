import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(props.celsius);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(fahrenheit());
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit(props.celsius);
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === props.celsius) {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="celsuisUnit">°C |</span>{" "}
        <span className="fahrenheitUnit">
          <a href="/" onClick={showFahrenheit} className="active">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="celsuisUnit">
          <a href="/" onClick={showCelsius} className="active">
            °C
          </a>
        </span>{" "}
        <span className="fahrenheitUnit">| °F</span>
      </span>
    );
  }
}
