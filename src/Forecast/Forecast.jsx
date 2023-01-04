/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

// na primeira requisicao o componente n recebe os dados ainda

const Forecast = ({ forecastData, backgroundImage }) => {
  const [stateForecast, setForecast] = useState([
    {
      currentTemperature: 0,
      maxTemperature: 0,
      minTemperature: 0,
      pressure: 0,
      humidity: 0,
      climateNow: "",
    },
  ]);
  console.log(Object.values(stateForecast).length);
  console.log(stateForecast);

  useEffect(() => {
    if (Object.keys(forecastData).length > 0) {
      setForecast([
        {
          currentTemperature: forecastData.main.temp,
          maxTemperature: forecastData.main.temp_max,
          minTemperature: forecastData.main.temp_min,
          pressure: forecastData.main.pressure,
          humidity: forecastData.main.humidity,
          climateNow: forecastData.weather.map((i) => i.description),
        },
      ]);
    }
  }, [forecastData]);

  return (
    <Flex
      _before={{
        content: '""',
          bgImage:
            `url(${backgroundImage})`,
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.9
      }}
      w="100vw"
      h="100vh"
      // bg="black"
      alignItems="center"
      justifyContent="center"
    >
      <div className={style.forecast}>
        {stateForecast.map((i) => {
          if (
            i.currentTemperature > 0 &&
            i.maxTemperature > 0 &&
            i.minTemperature > 0 &&
            i.pressure > 0 &&
            i.humidity > 0 &&
            i.currentTemperature
          ) {
            return (
              <>
                <div>Clima de agora: {forecastData.main.temp}</div>
                <div>temperatura atual: {i.currentTemperature} </div>
                <div>temperatura maxima: {i.maxTemperature}</div>
                <div>temperatura minima: {i.minTemperature}</div>
                <div>Pressão: {i.pressure}</div>
                <div>Umidade: {i.humidity}</div>
              </>
            );
          }

        })}
      </div>
    </Flex>
  );
};

export default Forecast;
