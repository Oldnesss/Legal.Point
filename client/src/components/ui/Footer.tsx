import React from 'react';
import {
  Box,
  Flex,
  Link,
  Link as ChakraLink,
  Text,
  useColorMode,
  IconButton,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa';

function Footer(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="footer"
      as="footer"
      // mt="auto"
      py="4"
      backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
    >
      <Flex
        display="flex"
        justify="space-between"
        align="center"
        borderTop="1px solid"
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
        direction={{ base: 'column', md: 'row' }} // Переключение на столбцы на мобильных устройствах
      >
        <Box m="20px" mb={{ base: '4', md: '0' }}>
          <Flex direction="column" color="gray">
            <Text>Email: info@legal.point</Text>
            <Text>Телефон: +7 917 513 17 35</Text>
            <Text
              // Применение стилей для переноса слов на новую строку и добавление отступа
              style={{ wordWrap: 'break-word' }}
            >
              Адрес: г.Москва, 3-й Сыромятнический переулок, дом 3/9, строение
              6, этаж 4
            </Text>
          </Flex>
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Flex direction="column" color="gray" m="20px">
            <ChakraLink
              as={ReactRouterLink}
              to="/"
              _hover={{
                textDecoration: 'none',
                color: colorMode === 'light' ? 'orange' : '#fcd28d',
              }}
            >
              Главная
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/service"
              _hover={{
                textDecoration: 'none',
                color: colorMode === 'light' ? 'orange' : '#fcd28d',
              }}
            >
              Услуги
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/contact"
              _hover={{
                textDecoration: 'none',
                color: colorMode === 'light' ? 'orange' : '#fcd28d',
              }}
            >
              Контакты
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/firms"
              _hover={{
                textDecoration: 'none',
                color: colorMode === 'light' ? 'orange' : '#fcd28d',
              }}
            >
              Каталог
            </ChakraLink>
          </Flex>
        </Box>

        <Box>
          <Flex direction="column" padding="0 1rem 0 0">
            <HStack spacing="2">
              {/* Telegram */}
              <Link href="https://t.me/" isExternal>
                <IconButton
                  aria-label="Telegram"
                  icon={
                    <Icon
                      as={FaTelegram as React.ElementType}
                      boxSize="4"
                      color="gray.500"
                      _hover={{
                        textDecoration: 'none',
                        color: colorMode === 'light' ? 'orange' : '#fcd28d',
                      }}
                    />
                  }
                  colorScheme="gray"
                  variant="outline"
                />
              </Link>

              {/* WhatsApp */}
              <Link href="https://wa.me/" isExternal>
                <IconButton
                  aria-label="WhatsApp"
                  icon={
                    <Icon
                      as={FaWhatsapp}
                      boxSize="4"
                      color="gray.500"
                      _hover={{
                        textDecoration: 'none',
                        color: colorMode === 'light' ? 'orange' : '#fcd28d',
                      }}
                    />
                  }
                  colorScheme="gray"
                  variant="outline"
                />
              </Link>

              {/* Email */}
              <Link href="mailto:info@legal.point" isExternal>
                <IconButton
                  aria-label="Email"
                  icon={
                    <Icon
                      as={FaEnvelope}
                      boxSize="4"
                      color="gray.500"
                      _hover={{
                        textDecoration: 'none',
                        color: colorMode === 'light' ? 'orange' : '#fcd28d',
                      }}
                    />
                  }
                  colorScheme="gray"
                  variant="outline"
                  onClick={() => {
                    window.location.href = 'mailto:info@legal.point';
                  }}
                />
              </Link>

              {/* Phone */}
              <IconButton
                aria-label="Phone"
                icon={
                  <Icon
                    as={FaPhone}
                    boxSize="4"
                    color="gray.500"
                    _hover={{
                      textDecoration: 'none',
                      color: colorMode === 'light' ? 'orange' : '#fcd28d',
                    }}
                  />
                }
                colorScheme="gray"
                variant="outline"
                onClick={() => {
                  window.location.href = 'tel:+79175131735';
                }}
              />
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
