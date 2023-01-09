import {
  HStack,
  VStack,
  Skeleton,
  Text,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import style from "./Forecast.module.css";
import Icon from "./Icon";
import video from "../media/solar.mp4";

import wind from "../assets/wind.svg";
import waterDrop from "../assets/raindrop.svg";

const Forecast = ({ forecastData, locationUser }) => {
  console.log(forecastData);

  const descriptionClimate =
    forecastData.climateNow.toString().charAt(0).toUpperCase() +
    forecastData.climateNow.toString().slice(1);
  const currentTemp = Math.round(forecastData.currentTemperature);
  // const icon = `http://openweathermap.org/img/wn/${forecastData.icon[0]}@2x.png`;
  const humidity = forecastData.humidity + " %";
  const windSpeed = forecastData.windSpeed + " Km/h";
  const hour = new Date().getHours();

  return (
    <>
      <div className={style.overlay}></div>
      <video className={style.video} src={video} autoPlay loop muted />

      <VStack
        justifyContent="space-between"
        w="100%"
        h="100vh"
        className={style.animate}
      >
        <HStack
          w="100%"
          h={["10vh", "10vh", "20vh", "20vh", "20vh", "20vh"]}
          alignItems="center"
        >
          <Text
            fontSize={["30px", "40px", "50px", "50px", "50px", "50px"]}
            style={{ paddingLeft: "20px" }}
            className={style.mainTitle}
          >
            Clima |
          </Text>
          {forecastData.region.length > 0 ?  <Text
              fontSize={["20px", "30px", "37px", "37px", "37px", "37px"]}
              className={style.region}
            >
            
              {forecastData.region}
            </Text> : <Skeleton>{'Carregando...'}</Skeleton> }
        </HStack>

        <HStack
          w="100%"
          h={["30vh", "40vh", "50vh", "50vh", "50vh", "50vh"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack
            w={"50%"}
            h={["28vh", "35vh", "35vh", "35vh", "35vh", "35vh"]}
            justifyContent="flex-end"
            alignItems="center"
          >
            <HStack w="100%" pl="40px">
                <Text
                  fontSize={["12px", "15px", "20px", "40px", "40px", "40px"]}
                  className={style.description}
                >
                  {descriptionClimate}
                </Text>
                <Icon
                  hour={hour}
                  climateDescription={descriptionClimate}
                  className={style.iconDescription}
                />
            </HStack>

            <Text
              fontSize={["40px", "60px", "80px", "100px", "100px", "100px"]}
              className={style.temperature}
            >
              {currentTemp + " °C"}
            </Text>
          </VStack>

          <VStack
            pr={["40px", "100px", "80px", "40px", "40px", "40px"]}
            w="50%"
            h={["27vh", "27vh", "30vh", "27vh", "27vh", "27vh"]}
            justifyContent={[
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
            ]}
            alignItems={[
              "center",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
            ]}
            alignContent="center"
          >
            <HStack w="25%">
              <img
                alt="humidity"
                className={style.humidityImage}
                src={waterDrop}
              />
              <Text
                fontSize={["100%", "15px", "20px", "20px", "20px", "20px"]}
                id={style.details}
              >
                {humidity}
              </Text>
            </HStack>
            <HStack w="25%">
              <img alt="wind" className={style.windImage} src={wind} />
              <Text
                fontSize={["100%", "15px", "20px", "20px", "20px", "20px"]}
                id={style.details}
              >
                {windSpeed}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Forecast;
