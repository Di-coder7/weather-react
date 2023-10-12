import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project is coded by Daria Doroshenko and is{" "}
          <a
            href="https://github.com/Di-coder7/weather-react"
            rel="noreferrer"
            target="_blank"
          >
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
