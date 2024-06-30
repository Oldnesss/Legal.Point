// src/components/ui/FirmModal.tsx

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modal/modalSlice';

function FirmModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isOpen, selectedFirm } = useAppSelector((state) => state.modalSlice);

  return (
    <Modal isOpen={isOpen} onClose={() => dispatch(closeModal())} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedFirm?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto">
          {selectedFirm && (
            <>
              <Image src={selectedFirm.image} alt={selectedFirm.name} mb={4} />
              <Text>{selectedFirm.nameIFNS}</Text>
              <Text>{selectedFirm.title}</Text>
              <Text>{selectedFirm.description}</Text>
              <Text>{selectedFirm.price}</Text>
              <Text>{selectedFirm.body}</Text>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" onClick={() => dispatch(closeModal())}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FirmModal;
