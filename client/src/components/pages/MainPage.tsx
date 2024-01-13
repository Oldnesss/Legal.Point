import React from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  Image,
  Link,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import VideoBanner from '../ui/videoBanner';

function MainPage(): JSX.Element {
  return (
    <>
      {/* Экран с баннером */}
      <Box
        // bg="url('/banner4.webp') center/cover no-repeat"
        h="100vh"
        // position="relative"
        // // position="absolute"
        top="0"
        left="0"
        right="0"
        // zIndex="-1"
      >
        <VideoBanner />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          {/* <Link as={ReactRouterLink} to="/firms">
            <Heading fontSize="4xl" color="white" mb="4">
              Привет, мы здесь, чтобы помочь!
            </Heading>
            <Text color="white" fontSize="xl" mb="6">
              Интерактивные услуги и многое другое...
            </Text>
            <Button colorScheme="orange" size="lg">
              Посмотреть фирмы
            </Button>
          </Link> */}
        </Box>
        {/* Дополнительные элементы UI, такие как прозрачная подложка, кнопки с надписями и анимации */}
      </Box>

      {/* Навигационная панель */}
      <Flex align="center" justify="space-between" padding="1rem">
        {/* Логотип и другие элементы */}
        <Spacer />
        
      </Flex>

      {/* Второй экран с каруселью и контактной информацией */}
      {/* <Container maxW="1280px"> */}
      <Heading mt="8" mb="4">
        Сейчас в продаже
      </Heading>
      <Link as={ReactRouterLink} to="/services">
          <Button
            variant="outline"
            colorScheme="orange"
            _hover={{ bg: 'orange.400', color: 'white' }}
          >
            Посмотреть фирмы
          </Button>
        </Link>
      {/* Компонент с каруселью фирм в продаже */}
      {/* Другие элементы UI, такие как контактная информация и кнопка для получения консультации */}
      {/* </Container> */}
    </>
  );
}

export default MainPage;
