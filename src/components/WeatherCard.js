import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherCard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true")
      .then((res) => {
        setWeather(res.data.current_weather);
      });
  }, []);

  return (
    <section className="p-4 bg-yellow-50 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold mb-4">🌤️ Day 4 — Weather Info</h2>
      {weather ? (
        <div>
          <p className="text-lg">Temperature: <strong>{weather.temperature}°C</strong></p>
          <p className="text-lg">Wind Speed: <strong>{weather.windspeed} km/h</strong></p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </section>
  );
}

export default WeatherCard;
