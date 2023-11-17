import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import caution from '../../assets/icons/caution.png'

const Modal = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button color={'red'} background={'white'} onClick={onOpen}>Delete</Button>

      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  >
            <img src={caution} alt="" />
            <p>Caution !</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <p>Are you sure you want to delete {title}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="white" color={'black'} mr={3} border={'1px'} onClick={onClose}>
              cancel
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
