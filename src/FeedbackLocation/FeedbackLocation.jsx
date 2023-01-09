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

function FeedbackLocation() {
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
        <ModalContent bg="transparent" w="50%">
          <ModalHeader>Erro</ModalHeader>
          <ModalBody>
            <Text>
              Permita que o navegador acesse sua localização atual e recarregue a página por favor.
            </Text>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default FeedbackLocation;
