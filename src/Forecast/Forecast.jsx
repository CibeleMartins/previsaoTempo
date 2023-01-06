import { HStack, VStack, Skeleton, Text } from "@chakra-ui/react";

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
        <Text fontSize={['30px', '40px', '50px','50px','50px','50px']} style={{ paddingLeft: "5%" }} className={style.mainTitle}>
          Clima |
        </Text>

        <Text fontSize={['20px', '30px', '37px','37px','37px','37px']} className={style.region}>{forecastData.region}</Text>
      </HStack>

      <HStack w="100%" h="40vh" justifyContent="space-between">
        <VStack w="50%">
          <HStack w="100%" pl="10%">
            <Text fontSize={['40px','30px','40px','40px','40px','40px']} className={style.description}>{descriptionClimate}</Text>
            <img
              src={icon}
              className={style.iconDescription}
              alt="temperatureDescription"
            />
          </HStack>
          <Text fontSize={['50px', '80px', '100px','100px','100px','100px']} className={style.temperature}>{currentTemp}</Text>
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
