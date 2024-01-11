import React from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  useColorMode,
  IconButton,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Link, Link as ReactRouterLink } from 'react-router-dom';
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
      >
        <Box>
          <Flex direction="column">
            <Text fontSize="lg" fontWeight="bold">
              Контакты
            </Text>
            <Text>Email: info@example.com</Text>
            <Text>Телефон: +7 (123) 456-7890</Text>
            <Text>Адрес: Город, Улица, Дом</Text>
          </Flex>
        </Box>

        <Box>
          <Flex direction="column">
            <Text fontSize="lg" fontWeight="bold">
              Навигация
            </Text>
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
          <Flex direction="column">
            <HStack spacing="2">
              {/* Telegram */}
              <Link href="https://t.me/" isExternal>
                <IconButton
                  aria-label="Telegram"
                  icon={<Icon as={FaTelegram} boxSize="4" color="gray.500" />}
                  colorScheme="gray"
                  variant="outline"
                />
              </Link>

              {/* WhatsApp */}
              <Link href="https://wa.me/" isExternal>
                <IconButton
                  aria-label="WhatsApp"
                  icon={<Icon as={FaWhatsapp} boxSize="4" color="gray.500" />}
                  colorScheme="gray"
                  variant="outline"
                />
              </Link>

              {/* Email */}
              <Link href="mailto:info@legal.point" isExternal>
                <IconButton
                  aria-label="Email"
                  icon={<Icon as={FaEnvelope} boxSize="4" color="gray.500" />}
                  colorScheme="gray"
                  variant="outline"
                />
              </Link>

              {/* Phone */}
              <IconButton
                aria-label="Phone"
                icon={<Icon as={FaPhone} boxSize="4" color="gray.500" />}
                colorScheme="gray"
                variant="outline"
              />
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
