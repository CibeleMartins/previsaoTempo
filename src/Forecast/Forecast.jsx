import { Flex } from "@chakra-ui/react"
import {motion} from 'framer-motion';

import style from './Forecast.module.css';

const Forecast = ()=> {

    return (

    <Flex
    w="100vh"
    h="100vh"
    alignItems="center">
        <motion.div className={style.forecast}>

        </motion.div>
    </Flex>
    )
}


export default Forecast;