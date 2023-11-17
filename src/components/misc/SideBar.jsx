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

const SideBar = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button color={'black'} background={'white'} onClick={onOpen}>View</Button>

      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={'90%'} width={'30%'} position={'absolute'} top={'-18'} right={'0'} background={'#03123D'}>

          <ModalCloseButton />
          <ModalBody>
            <h3 style={{marginTop:'1rem'}}>Image:</h3>
            <img src='https://via.placeholder.com/647x218' alt='Star Wars' />
            <h3 style={{marginTop:'1rem'}}>Title:</h3>
            <p style={{background:'white', padding:"1rem" }}>{name}</p>

          </ModalBody>

          <ModalFooter>
            <Button width={'100%'} background="#CB1A80" color={'white'} mr={3} border={'1px'} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default SideBar;
