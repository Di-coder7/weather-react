import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="dateCitydescription">
        <h1>
          {props.data.currentCity}, {props.data.country}
        </h1>
        <ul>
          <li>
            <FormatedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="descriptionTemperatureIcon">
        <div className="row weatherDescription">
          <div className="col-4">
            <img
              src={props.data.iconUrl}
              className="cityIcon"
              alt={props.data.description}
            />
          </div>
          <div className="col-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
