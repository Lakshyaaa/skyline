/*Lakshya Chandrakar (Mtech - Software Engineering)*/
import { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

const Weather = () => {
    const [city, setCity] = useState("");
    const [forecast, setForecast] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const fetchWeather = async () => {
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

        try {
            const response = await axios.get(url);
            const dailyForecast = processForecast(response.data.list);
            setForecast(dailyForecast);
        } catch (error) {
            alert("City not found");
        }
    };

    // Function to extract 5-day forecast 
    const processForecast = (data) => {
        const dailyData = {};
        data.forEach((entry) => {
            const date = entry.dt_txt.split(" ")[0]; // YYYY-MM-DD
            if (!dailyData[date]) {
                dailyData[date] = {
                    temp: entry.main.temp,
                    humidity: entry.main.humidity, //  humidity
                    weather: entry.weather[0].description,
                    icon: entry.weather[0].icon,
                };
            }
        });
        return Object.entries(dailyData).slice(0, 5); // Return 5-day forecast
    };

    return (
        <div className="page-container">
          <div className="weather-container">
          <div className="time-display">{currentTime}</div>
              <h1>SkyLine - Smart Weather Forecasting</h1>
              <div className="input-container">
                  <input
                      type="text"
                      placeholder="Enter city name"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                  />
                  <button onClick={fetchWeather}>Get Forecast</button>
              </div>

              {forecast.length > 0 && (
                  <div className="forecast-container">
                      {forecast.map(([date, data], index) => (
                          <div key={index} className="forecast-card">
                              <h3>{date}</h3>
                              <img
                                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                                alt={`Weather icon for ${data.weather}`}
                                onError={(e) => e.target.style.display = 'none'} // Hide if icon fails to load
                              />
                              <p>Temp: {data.temp}°C</p>
                              <p>Humidity: {data.humidity}%</p> {/* Display Humidity */}
                              <p>{data.weather}</p>
                          </div>
                      ))}
                  </div>
              )}
          </div>
        </div>

    );
};

export default Weather;
