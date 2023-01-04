/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Flex,HStack } from "@chakra-ui/react";

import style from "./Forecast.module.css";

import { useEffect, useState } from "react";

// na primeira requisicao o componente n recebe os dados ainda

const Forecast = ({ forecastData, backgroundImage }) => {

  console.log(backgroundImage)
  console.log(forecastData)


  const [stateForecast, setForecast] = useState([
    {
      id: Math.random(parseInt()),
      currentTemperature: 0,
      maxTemperature: 0,
      minTemperature: 0,
      pressure: 0,
      humidity: 0,
      climateNow: "",
      region: ''
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
          pressure: forecastData.main.pressure,
          humidity: forecastData.main.humidity,
          climateNow: forecastData.weather.map((i) => i.description),
          region: forecastData.name
        },
      ]);
    }
  }, [forecastData]);

  return (
    <Flex
      _before={{
        content: '""',
          bgImage:
            `url(https://images5.alphacoders.com/853/853198.jpg)`,
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
    >
      {/* <div className={style.forecast}> */}
        {stateForecast.map((i) => {
          if (
            i.currentTemperature > 0 &&
            i.maxTemperature > 0 &&
            i.minTemperature > 0 &&
            i.pressure > 0 &&
            i.humidity > 0 &&
            i.currentTemperature &&
            i.region.length > 0
          ) {
            return (
              <>
                <HStack
                 p="45px"
                 h="60px"
                 w="100"
                 alignItems="center">
                    <h1 className={style.climate}>Clima |</h1> <h1 className={style.region}>{i.region}</h1>
                </HStack>
              </>
            );
          }

        })}
      {/* </div> */}
    </Flex>
  );
};

export default Forecast;
