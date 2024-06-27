import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

function VideoBanner(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative">
      {/* Видео в качестве фона */}
      <Box
        bg="url('/banner.webp') center/cover no-repeat"
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
          <source src="/video0.mp4" type="video/mp4" />
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
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        color="white"
        zIndex="1"
        textAlign="center"
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
          mb="6"
        >
          Привет, мы здесь, чтобы помочь!
        </Heading>

        <Text
          color="white"
          fontSize={{ base: 'sm', md: 'md', lg: '2xl' }}
          mb="6"
          px="30px"
        >
          Юридическое сопровождение и многое другое...
        </Text>

        {/* Кнопки */}
        <Flex direction={{ base: 'column', md: 'row' }} gap={4} mt={4}>
          <ChakraLink
            as={ReactRouterLink}
            to="/sale"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              colorScheme="orange"
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
            >
              ПРОДАТЬ
            </Button>
          </ChakraLink>

          <ChakraLink
            as={ReactRouterLink}
            to="/service"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              colorScheme="orange"
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
            >
              НАШИ УСЛУГИ
            </Button>
          </ChakraLink>

          <ChakraLink
            as={ReactRouterLink}
            to="/firms"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              colorScheme="orange"
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
            >
              КУПИТЬ
            </Button>
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default React.memo(VideoBanner);
