import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Card,
  CardBody,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import type { FirmType } from '../../types/firms';

type FirmTypeProps = {
  firm: FirmType;
  onOpen: (firm: FirmType) => void; // Добавьте обработчик для открытия модального окна
};

function FirmCard({ firm, onOpen }: FirmTypeProps): JSX.Element {
  return (
    <Card
      maxW="sm"
      width="350px"
      className="card"
      mb={5}
      bg="rgba(255, 255, 255, 0.1)"
    >
      <CardBody height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Image
            mb={4}
            src={firm.image}
            alt={firm.name}
            borderRadius="lg"
            height="150px"
            objectFit="cover"
          />
          <Heading as="h3" size="md" mb={2}>
            {firm.name}
          </Heading>
          <Text fontWeight="semibold" mb={1}>
            {firm.nameIFNS}
          </Text>
          <Text fontWeight="semibold" mb={1}>
            {firm.title}
          </Text>
          <Text color="gray.500" mb={2}>
            {firm.description}
          </Text>
          <Text color="gray.500" mb={2}>
            {firm.price}
          </Text>
          <VStack spacing={4} align="stretch">
            <Text>{firm.body}</Text>
          </VStack>
        </Box>
        <Button mt={4} colorScheme="orange" onClick={() => onOpen(firm)} width="100%" mb={2}>
          Подробнее
        </Button>
      </CardBody>
    </Card>
  );
}

export default FirmCard;
