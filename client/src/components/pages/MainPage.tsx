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
import VideoBanner from '../ui/VideoBanner';
import Carousel from '../ui/Carousel/Carousel';

function MainPage(): JSX.Element {
  return (
    <>
      {/* Экран с баннером */}
      <Box
      >
        <VideoBanner />
       

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
        <Carousel />

        <Link as={ReactRouterLink} to="/firms">
          <Button
            variant="outline"
            colorScheme="orange"
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            _hover={{ bg: 'orange.400', color: 'white' }}
          >
            Посмотреть каталог
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default MainPage;
