import { Flex } from "@chakra-ui/react"


import style from './Forecast.module.css';

const Forecast = ()=> {

    return (

    <Flex
    w="100vw"
    h="100vh"
    bg="black"
    alignItems="center"
    justifyContent="center">
        <div className={style.forecast}>
            <div>Clima de agora</div>
            <div>temperatura atual</div>
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