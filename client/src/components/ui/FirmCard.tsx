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
      mb={10}
      bg="rgba(255, 255, 255, 0.2)"
    >
      <CardBody>
        <Box p={8} align="center">
          <Image
            mb={6}
            src={firm.image}
            alt={firm.name}
            borderRadius="lg"
            height="200px"
            objectFit="cover"
          />
          <Heading as="h3" size="md" mb={6}>
            {firm.name}
          </Heading>
          <Text fontWeight="semibold" mb={2}>
            {firm.title}
          </Text>
          <Text color="gray.500" mb={4}>
            {firm.description}
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
