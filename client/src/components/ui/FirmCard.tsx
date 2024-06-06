import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Card,
  CardBody,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import type { FirmType } from '../../types/firms';

type FirmTypeProps = {
  firm: FirmType;
};

function FirmCard({ firm }: FirmTypeProps): JSX.Element {
  return (
    // <Box borderWidth="1px" borderRadius="md" overflow="hidden">
    <Card
      maxW="sm"
      width="350px"
      height="500px"
      className="card"
      mb={5}
      bg="rgba(255, 255, 255, 0.1)"
    >
      <CardBody>
        <Box p={4} align="center">
          <Image
            mb={6}
            src={firm.image}
            alt={firm.name}
            borderRadius="lg"
            height="200px"
            objectFit="cover"
          />
          <Heading as="h3" size="md" mb={4}>
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
      </CardBody>
    </Card>
    // </Box>
  );
}

export default FirmCard;
