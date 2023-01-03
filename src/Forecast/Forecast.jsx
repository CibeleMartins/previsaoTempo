import { Flex } from "@chakra-ui/react"


import style from './Forecast.module.css';

const Forecast = ({forecastData})=> {
console.log(Object.keys(forecastData).length > 0 ? forecastData.main : console.log('nada'))
    return (

    <Flex
    w="100vw"
    h="100vh"
    bg="black"
    alignItems="center"
    justifyContent="center">
        {/* {forecastData.length > 0 ? console.log(forecastData) : console.log('nada') } */}
        <div className={style.forecast}>
            <div>Clima de agora</div>
            <div>temperatura atual: </div>
            <div>temperatura maxima</div>
            <div>temperatura minima</div>
            <div>Pressão</div>
            <div>Umidade</div>
            <div></div>
        </div>
    </Flex>
    )
}


export default Forecast;