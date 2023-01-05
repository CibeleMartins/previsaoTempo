import { Center } from "@chakra-ui/react";

// video and image
import video from "../../media/solar.mp4";
import styled from "@emotion/styled";

import style from './Loding.module.css';

const Loading = () => {
  return (
    <Center w="100%" h="100vh" bg="black">
      <div className={style.overlay}></div>
      <video src={video} autoPlay loop muted />
    </Center>
  );
};

export default Loading;