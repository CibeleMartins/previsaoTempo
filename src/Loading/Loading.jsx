import { Center } from "@chakra-ui/react";

// video and image
import video from "../media/solar.mp4";
import logo from '../assets/logo.svg'

import style from './Loading.module.css';

const Loading = () => {
  return (
    <Center w="100%" h="100vh">
      <div className={style.overlay}></div>
      <video className={style.video} src={video} autoPlay loop muted />
      <img alt="logo" className={style.svgPosition} src={logo}/>
    </Center>
  );
};

export default Loading;