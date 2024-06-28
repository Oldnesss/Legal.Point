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
import type { FirmType } from '../../types/firms';

type FirmModalProps = {
  firm: FirmType | null;
  isOpen: boolean;
  onClose: () => void;
};

function FirmModal({ firm, isOpen, onClose }: FirmModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{firm?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto">
          {firm && (
            <>
              <Image src={firm.image} alt={firm.name} mb={4} />
              <Text>{firm.nameIFNS}</Text>
              <Text>{firm.title}</Text>
              <Text>{firm.description}</Text>
              <Text>{firm.price}</Text>
              <Text>{firm.body}</Text>
              {/* Add other fields as necessary */}
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FirmModal;
