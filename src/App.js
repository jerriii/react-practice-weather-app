import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4c07563a30d5112903cc7e70a924495d&units=metric`
      );
      setWeatherData(response.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "10px" }}
        />
        <button
          onClick={fetchWeather}
          style={{
            padding: "10px",
            borderRadius: "0.2rem",
            color: "white",
            background: "#252525",
          }}
        >
          Get Weather
        </button>
      </div>
      {weatherData && (
        <div>
          <h2 style={{ fontFamily: "cursive" }}>{weatherData.name}</h2>
          <p style={{ fontFamily: "system-ui" }}>
            {weatherData.weather[0].description}
          </p>
          <p style={{ fontWeight: "bold" }}>
            Temperature: {Number(weatherData.main.temp).toFixed(1)}
            &deg;C
          </p>
        </div>
      )}
    </>
  );
}

export default App;
