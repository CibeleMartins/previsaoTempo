import { HStack, VStack, Skeleton, Text } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import wind from "../assets/wind.svg";
import waterDrop from "../assets/raindrop.svg";

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
      <HStack w="100%" h={["10vh", "10vh","20vh","20vh","20vh","20vh"]} alignItems="center">
        <Text fontSize={['30px', '40px', '50px','50px','50px','50px']} style={{ paddingLeft: "5%" }} className={style.mainTitle}>
          Clima |
        </Text>

        <Text fontSize={['20px', '30px', '37px','37px','37px','37px']} className={style.region}>{forecastData.region}</Text>
      </HStack>

      <HStack w="100%" h={['30vh', '40vh', '50vh', '50vh', '50vh', '50vh']} justifyContent="space-between" alignItems="center">
        <VStack w={["100%","100%","50%","50%","50%","50%"]} h='27vh' justifyContent="center">
          <HStack w="100%" pl="10%">
            <Text fontSize={['30px','40px','40px','40px','40px','40px']} className={style.description}>{descriptionClimate}</Text>
            <img
              src={icon}
              className={style.iconDescription}
              alt="temperatureDescription"
            />
          </HStack>
          <Text fontSize={['40px', '80px', '100px','100px','100px','100px']} className={style.temperature}>{currentTemp}</Text>
        </VStack>

        <VStack
        pr="5%"
        w="50%"
        h={['20vh', '20vh', '27vh', '27vh', '27vh', '27vh']}
        justifyContent={['flex-end', 'flex-end','flex-end','flex-end','flex-end','flex-end']}
        alignItems={['flex-start', 'flex-start', 'flex-end', 'flex-end', 'flex-end', 'flex-end']}
        alignContent="center">
          <HStack
          w="25%">
            <img alt="humidity" className={style.humidityImage} src={waterDrop}/>
            <Text fontSize={['10px','15px','20px','20px','20px','20px']} id={style.details}>{humidity}</Text>
          </HStack>
          <HStack
           w="25%">
            <img alt="wind" className={style.windImage} src={wind}/>
            <Text fontSize={['10px','15px','20px','20px','20px','20px']} id={style.details}>{windSpeed}</Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Forecast;
