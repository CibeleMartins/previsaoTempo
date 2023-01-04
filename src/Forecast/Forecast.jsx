
import { HStack, VStack } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

import wind from '../assets/wind.png'
import waterDrop from '../assets/waterDrop.png'

const Forecast = ({ forecastData}) => {
  // console.log(backgroundImage)
  console.log(forecastData);

  const [stateForecast, setForecast] = useState([
    {
      id: Math.random(parseInt()),
      currentTemperature: 0,
      maxTemperature: 0,
      minTemperature: 0,
      windSpeed: 0,
      humidity: 0,
      icon: "",
      climateNow: "",
      region: "",
    },
  ]);
  // console.log(Object.values(stateForecast).length);
  // console.log(stateForecast);

  useEffect(() => {
    if (Object.keys(forecastData).length > 0) {
      setForecast([
        {
          currentTemperature: forecastData.main.temp,
          maxTemperature: forecastData.main.temp_max,
          minTemperature: forecastData.main.temp_min,
          windSpeed: forecastData.wind.speed,
          humidity: forecastData.main.humidity,
          climateNow: forecastData.weather.map((i) => i.description),
          icon: forecastData.weather.map((i) => i.icon),
          region: forecastData.name,
        },
      ]);
    }
  }, [forecastData]);

  return (
    <VStack
      className={style.animate}
      sx={{
        background:
          "linear-gradient(90deg, rgba(43,108,176,1) 10%, rgba(66,153,225,1) 90%)",
      }}
      w="100vw"
      h="100vh"
      justifyContent="space-between"
    >
      {stateForecast.map((i) => {
        if (
          i.currentTemperature > 0 &&
          i.maxTemperature > 0 &&
          i.minTemperature > 0 &&
          i.windSpeed > 0 &&
          i.humidity > 0 &&
          i.currentTemperature &&
          i.region.length > 0 &&
          i.icon.length > 0
        ) {
          const descriptionClimate =
            i.climateNow.toString().charAt(0).toUpperCase() +
            i.climateNow.toString().slice(1);
          return (
            <>
              <HStack p="45px" h="60px" w="100%" justifyContent="flex-start">
                <h1 className={style.climate}>Clima |</h1>{" "}
                <h1 className={style.region}>{i.region}</h1>
              </HStack>

              <HStack w="100%" justifyContent="space-between">
                <VStack w="50%" pl="45px" h="300px" alignItems="flex-start">
                  <HStack>
                    <h2 className={style.descriptionClimate}>
                      {descriptionClimate}
                    </h2>
                    <img
                      alt="icon"
                      src={`http://openweathermap.org/img/wn/${i.icon}@2x.png`}
                    />
                  </HStack>

                  <h1 className={style.currentTemperature}>
                    {parseInt(i.currentTemperature) + " ºC"}
                  </h1>
                </VStack>
                <VStack w="30%" h="300px" justifyContent="flex-end" alignItems="flex-end" >
                  <HStack
                   w="90%">
                    <img id={style.image} alt="humidity" src={waterDrop} /> <h3 className={style.details}>{i.humidity + "%"}</h3>
                  </HStack>
                  <HStack
                   w="90%">
                    <img id={style.image} alt="wind" src={wind} /> <h3 className={style.details}>{Math.max(i.windSpeed) + "Km/h"}</h3>
                  </HStack>
                </VStack>
              </HStack>
            </>
          );
        }
      })}
    </VStack>
  );
};

export default Forecast;
