import { HStack, VStack, Text } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

import wind from "../assets/wind.png";
import waterDrop from "../assets/waterDrop.png";

const Forecast = ({ forecastData }) => {
  console.log(forecastData);

  const descriptionClimate =
    forecastData.climateNow.toString().charAt(0).toUpperCase() +
    forecastData.climateNow.toString().slice(1);
  const currentTemp = Math.round(forecastData.currentTemperature) + " °C";
  const icon = `http://openweathermap.org/img/wn/${forecastData.icon[0]}@2x.png`;
  const humidity = forecastData.humidity + " %"
  const windSpeed = forecastData.windSpeed + " Km/h"

  return (
    <VStack
      justifyContent="space-between"
      w="100%"
      h="100vh"
      className={style.animate}
    >
      <HStack w="100%" h="20vh" alignItems="center">
        <h1 style={{ paddingLeft: "5%" }} className={style.mainTitle}>
          Clima
        </h1>{" "}
        <h1 className={style.mainTitle}>|</h1>
        <h3 className={style.region}>{forecastData.region}</h3>
      </HStack>
      <HStack w="100%" h="40vh" justifyContent="space-between">
        <VStack w="50%">
          <HStack w="100%" pl="10%">
            <h2 className={style.description}>{descriptionClimate}</h2>
            <img
              src={icon}
              className={style.iconDescription}
              alt="temperatureDescription"
            />
          </HStack>
          <h1 className={style.temperature}>{currentTemp}</h1>
        </VStack>
        <VStack
        pr="5%"
        w="50%"
        alignItems="flex-end">
          <HStack
          w="25%">
            <img alt="humidity" className={style.humidityImage} src={waterDrop}/>
            <h1 id={style.details}>{humidity}</h1>
          </HStack>
          <HStack
           w="25%">
            <img alt="wind" className={style.windImage} src={wind}/>
            <h1 id={style.details}>{windSpeed}</h1>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Forecast;
