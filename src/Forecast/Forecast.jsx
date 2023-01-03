import { Flex } from "@chakra-ui/react"
import {motion} from 'framer-motion';

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

        </div>
    </Flex>
    )
}


export default Forecast;