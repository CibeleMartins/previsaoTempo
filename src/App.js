import axios from "axios";
import Forecast from "../src/Forecast/Forecast";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [location, setLocation] = useState();
  const [data, setData] = useState({
    id: Math.random(parseInt()),
    currentTemperature: 0,
    maxTemperature: 0,
    minTemperature: 0,
    windSpeed: 0,
    humidity: 0,
    icon: "",
    climateNow: "",
    region: "",
  });

  let getWeather = async (lat, long) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const res = response.data;
        console.log(res)
        if (Object.keys(res).length > 0) {
          setData(
            {
              currentTemperature: res.main.temp,
              maxTemperature: res.main.temp_max,
              minTemperature: res.main.temp_min,
              windSpeed: res.wind.speed,
              humidity: res.main.humidity,
              climateNow: res.weather.map((i) => i.description),
              icon: res.weather.map((i) => i.icon),
              region: res.name,
            },
          );
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);


  if (location) {
    return (
      <div className="App">
        <Forecast forecastData={data} />
      </div>
    );
  } else {
    return (
      <h1 style={{ color: "red" }}>
        Permita que o navegador acesse sua localização para poder verificar a
        previsão do tempo para o seu local atual.
      </h1>
    );
  }
}

export default App;
