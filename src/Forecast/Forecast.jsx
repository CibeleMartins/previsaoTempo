import { HStack, VStack, Text } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

import wind from "../assets/wind.png";
import waterDrop from "../assets/waterDrop.png";

const Forecast = ({ forecastData }) => {
  return <VStack w="100%" h="100vh" className={style.animate}>
    <HStack
    w="100%"
    h="20vh"
    alignItems="center">
      <h1 style={{paddingLeft: '25px'}} className={style.mainTitle}>Clima</h1> <h1 className={style.mainTitle}>|</h1>
      <h3 className={style.region}>Regiao</h3>
    </HStack>
    <HStack>
      <VStack>
        Temperatura descri ao
      </VStack>
      <VStack>
        Umidade valocidade vento
      </VStack>
    </HStack>
  </VStack>;
};

export default Forecast;
