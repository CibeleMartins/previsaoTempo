import { Flex } from "@chakra-ui/react";

import style from "./Forecast.module.css";

const Forecast = ({ forecastData }) => {
  console.log(
    Object.keys(forecastData).length > 0
      ? forecastData.main
      : console.log("nada")
  );

  console.log(forecastData)
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="black"
      alignItems="center"
      justifyContent="center"
    >
{ Object.keys(forecastData).length > 0 ? <div className={style.forecast}>
        <div>Clima de agora: {forecastData.main.temp}</div>
        <div>temperatura atual: </div>
        <div>temperatura maxima</div>
        <div>temperatura minima</div>
        <div>Pressão</div>
        <div>Umidade</div>
        <div></div>
      </div>
   : console.log('skeleton') }
        </Flex>
  );
};

export default Forecast;
