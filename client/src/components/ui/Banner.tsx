import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Banner(): JSX.Element {
  return (
    <Box
      bg="url('/banner4.webp') center/cover no-repeat"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Heading as="h1" size="xl" mb={4}>
        Ваш заголовок баннера
      </Heading>
      <Text fontSize="lg">
        Дополнительный текст или описание вашего баннера
      </Text>
    </Box>
    // position="relative"
    // position="absolute"
    // top="0"
    // left="0"
    // right="0"
    // zIndex="-1"
  );
}

export default Banner;
