import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  Text,
  Link,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

function VideoBanner(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative" mt='100px' >
      {/* Видео в качестве фона */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex="-1"
      >
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/public/video2.mp4" type="video/mp4" />
          {/* Добавьте другие форматы видео для кросс-браузерной совместимости */}
        </video>
      </Box>

      {/* Темная маска поверх видео */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor={
          colorMode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.3)'
        }
        zIndex="-1"
      />

      {/* Контент баннера */}
      <Link
        as={ReactRouterLink}
        to="/service"
        _hover={{ textDecoration: 'none' }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100vh"
          color="white"
          zIndex="1"
          
          
        >
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
            textAlign="center"
            mb="6"
          >
            Привет, мы здесь, чтобы помочь!
          </Heading>
          <Text color="white" fontSize="xl" mb="6" p='30px' >
            Юридическое сопровождение и многое другое...
          </Text>
          <Button colorScheme="orange" size="lg" mt={4}>
            НАШИ УСЛУГИ
          </Button>
        </Flex>
      </Link>
    </Box>
  );
}

export default VideoBanner;
