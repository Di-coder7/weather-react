import "./ForecastDaily.css";

export default function ForecastDaily(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}`;
  }

  return (
    <div className="ForecastDaily">
      <div className="weatherForecast-daily">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="weatherForecast-temperature">
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
