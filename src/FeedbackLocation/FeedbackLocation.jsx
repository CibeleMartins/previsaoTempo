import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

function FeedbackLocation() {

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  return (
    <>

      <Modal isCentered isOpen={true} >
       <OverlayTwo/>
        <ModalContent>
          <ModalHeader>Erro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Permita que o navegador acesse sua localização atual por favor
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default FeedbackLocation;