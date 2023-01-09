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

import { useEffect } from "react";

function FeedbackLocation({ getWeatherFeedback }) {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(()=> {
    onOpen()
  }, [])

  return (
    <>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <OverlayTwo />
        <ModalContent>
          <ModalHeader>Erro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Permita que o navegador acesse sua localização atual por favor
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={()=> onClose()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default FeedbackLocation;
