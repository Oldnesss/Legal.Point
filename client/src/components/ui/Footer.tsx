import React from 'react';
import { Box, Flex, Link as ChakraLink, Text, useColorMode } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

function Footer(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <Box as="footer" mt="auto" py="4" backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}>
      <Flex
        display='flex'
        justify="space-between"
        align="center"
        borderTop="1px solid"
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Навигация
          </Text>
          <Flex gap="1rem">
            <ChakraLink as={ReactRouterLink} to="/">
              Главная
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/service">
              Услуги
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/contact">
              Контакты
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/firms">
              Каталог
            </ChakraLink>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Контакты
          </Text>
          <Text>Email: info@example.com</Text>
          <Text>Телефон: +7 (123) 456-7890</Text>
          <Text>Адрес: Город, Улица, Дом</Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Мы на карте
          </Text>
          {/* Здесь можно добавить компонент мини-карты или другие элементы */}
          <Text>Место для мини-карты</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
