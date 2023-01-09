import {
  HStack,
  VStack,
  Skeleton,
  Text,
  SkeletonCircle,
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
  const currentTemp = Math.round(forecastData.currentTemperature);;
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
          {forecastData.region.length > 0 ? (
            <Text
              fontSize={["20px", "30px", "37px", "37px", "37px", "37px"]}
              className={style.region}
            >
              {forecastData.region}
            </Text>
          ) : (
            <Skeleton
              w={["30%", "20%", "18%", "10%", "10%", "10%"]}
              bg="green.500"
              color="white"
              fadeDuration={4}
              h={4}
              borderRadius={10}
            ></Skeleton>
          )}
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
            alignItems={currentTemp === 0 ? "" : "center"}
          >
            <HStack w="100%" pl="40px">
              {descriptionClimate.length > 0 ? (
                <>
                  <Text
                    fontSize={["12px", "15px", "20px", "40px", "40px", "40px"]}
                    className={style.description}
                  >
                    {descriptionClimate}
                  </Text>{" "}
                  <Icon
                    hour={hour}
                    climateDescription={descriptionClimate}
                    className={style.iconDescription}
                  />
                </>
              ) : (
                <>
                  <Skeleton
                    bg="green.500"
                    color="white"
                    fadeDuration={4}
                    borderRadius={10}
                    h={4}
                    w={["60%", "64%", "60%", "50%", "40%", "40%"]}
                  >
                  </Skeleton>{" "}
                  <SkeletonCircle
                    bg="green.500"
                    color="white"
                    fadeDuration={4}
                    w={["35px", "40px", "13%", "10%", "8%", "8%"]}
                    h={[8, 10, 12, 12, 12, 12]}
                  ></SkeletonCircle>
                </>
              )}
            </HStack>
            {currentTemp > 0 ? (
              <Text
                fontSize={["40px", "60px", "80px", "100px", "100px", "100px"]}
                className={style.temperature}
              >
                {currentTemp + " °C"}
              </Text>
            ) : (
              <HStack
                h={[150, 100, "auto", "auto", "auto", "auto"]}
                width={[180, 200, 300, 300, 300, 300, 300]}
                alignItems="center"
                justifyContent="center"
              >
                <SkeletonCircle
                  bg="green.500"
                  color="white"
                  fadeDuration={4}
                  h={[95, 95, 120, 120, 120, 120, 120]}
                  className={style.temperature}
                  w={["55%", "50%", "40%", "40%", "40%", "40%"]}
                >
                </SkeletonCircle>
              </HStack>
            )}
          </VStack>

          <VStack
            pr={["40px", "100px", "80px", "40px", "40px", "40px"]}
            w="50%"
            h={["27vh", "27vh", "30vh", "27vh", "27vh", "27vh"]}
            justifyContent={humidity.length > 3 ? "flex-end" : "center"}
            alignItems={humidity.length > 3 ? "flex-end" : "flex-end"}
            alignContent="center"
          >
            <HStack
              w={["50%", "60%", "35%", "25%", "25%", "25%"]}
              mt={humidity.length > 3 ? "0px" : "20%"}
            >
              {humidity.length > 3 ? (
                <>
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
                </>
              ) : (
                <>
                  <SkeletonCircle
                    bg="green.500"
                    color="white"
                    fadeDuration={4}
                    w={[10, "30px", 8, 8, 8, "10px"]}
                    h={[5, "30px", 8, 8, 8, "10px"]}
                  ></SkeletonCircle>
                  <Skeleton
                    bg="green.500"
                    color="white"
                    fadeDuration={4}
                    borderRadius={10}
                    h={4}
                    w={["80px", "80px", "80px", "80px", "80px", "80px"]}
                  ></Skeleton>
                </>
              )}
            </HStack>
            <HStack w={["50%", "60%", "35%", "25%", "25%", "25%"]}>
              {windSpeed.length > 6 ? (
                <>
                  <img alt="wind" className={style.windImage} src={wind} />
                  <Text
                    fontSize={["100%", "15px", "20px", "20px", "20px", "20px"]}
                    id={style.details}
                  >
                    {windSpeed}
                  </Text>
                </>
              ) : (
                <>
                  <SkeletonCircle
                    bg="green.500"
                    color="white"
                    fadeDuration={4}
                    h={[5, "30px", 8, 8, 8, "10px"]}
                    w={[10, "30px", 8, 8, 8, "10px"]}
                  ></SkeletonCircle>{" "}
                  <Skeleton
                    bg="green.500"
                    color="white"
                    fadeDuration={4}
                    borderRadius={10}
                    h={4}
                    w={["80px", "80px", "80px", "80px", "80px", "80px"]}
                  ></Skeleton>
                </>
              )}
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Forecast;
