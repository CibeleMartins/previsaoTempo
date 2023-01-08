import axios from "axios";
import { Center, Text } from "@chakra-ui/react";
import Forecast from "../src/Forecast/Forecast";
import Loading from "./Loading/Loading";
import { useState, useEffect } from "react";

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

  const [isLoading, setIsLoading] = useState(true);

  let getWeather = async (lat, long) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const res = response.data;
        console.log(res);
        if (Object.keys(res).length > 0) {
          setData({
            currentTemperature: res.main.temp,
            maxTemperature: res.main.temp_max,
            minTemperature: res.main.temp_min,
            windSpeed: res.wind.speed,
            humidity: res.main.humidity,
            climateNow: res.weather.map((i) => i.description),
            icon: res.weather.map((i) => i.icon),
            region: res.name,
          });
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

    setInterval(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (location) {
    return (
      <div className="App">
        <Forecast forecastData={data} />
      </div>
    );
  } else {
    return (
      <Center w="100%" h="100vh" className="animateFeedback">
        <Text letterSpacing={2} zIndex={90} color="antiquewhite" fontSize={30} textAlign="center">
          Por favor, permita que o navegador acesse a sua localização atual{" "}
        </Text>
      </Center>
    );
  }
}

export default App;
