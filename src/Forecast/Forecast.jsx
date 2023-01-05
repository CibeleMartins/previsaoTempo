import { HStack, VStack, Text } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

import wind from "../assets/wind.png";
import waterDrop from "../assets/waterDrop.png";

const Forecast = ({ forecastData }) => {



  const descriptionClimate = forecastData.climateNow.toString().charAt(0).toUpperCase() + forecastData.climateNow.toString().slice(1)
  const currentTemp = Math.round(forecastData.currentTemperature) + " °C"

  return (<VStack justifyContent="space-between" w="100%" h="100vh" className={style.animate}>
    <HStack
    w="100%"
    h="20vh"
    alignItems="center">
      <h1 style={{paddingLeft: '25px'}} className={style.mainTitle}>Clima</h1> <h1 className={style.mainTitle}>|</h1>
      <h3 className={style.region}>{forecastData.region}</h3>
    </HStack>
    <HStack
    w="100%"
    bg="black"
    h="40vh">
      <VStack
      w="50%">
        <HStack
        w="100%"
        pl="10%">
          <h2 className={style.description}>{descriptionClimate}</h2>
          <img className={style.iconDescription} alt="temperatureDescription"/>
        </HStack>
        <h1 className={style.temperature}>{currentTemp}</h1>
      </VStack>
      <VStack>
        Umidade valocidade vento
      </VStack>
    </HStack>
  </VStack>);
};

export default Forecast;
