import { HStack, VStack } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

import wind from "../assets/wind.png";
import waterDrop from "../assets/waterDrop.png";

const Forecast = ({ forecastData }) => {
  return <VStack w="100%" h="100vh" className={style.animate}>
    <HStack>
      Clima Regiao
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
