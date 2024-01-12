import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  useColorMode,
  Link as ChakraLink,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaTelegramPlane,
  FaWhatsapp,

} from 'react-icons/fa';
import { Link as ReactRouterLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

function NavBar(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleTelegramClick = (): void => {
    window.open('https://t.me/Ilya_Oldness');
  };

  const handleWhatsappClick = (): void => {
    window.open('https://wa.me/');
  };

  return (
    <div className="navbar">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        transition="transform 0.4s"
        borderBottom={isScrolled ? '1px solid' : 'none'} // Условное применение border
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
        position="fixed"
        width="100%"
        top="0"
        left="0"
        zIndex="1000"
        transform={isScrolled ? 'translateY(0)' : 'none'} // Условное применение transform
        backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'} // Цвет фона
      >
        {/* Логотип */}
        <Link href="/">
          <Image
            src={colorMode === 'dark' ? '/Legal.Point.png' : '/Legal.Point.png'}
            alt="logo"
            w={300}
          />
        </Link>
        <Spacer />

        {/* Навигационные ссылки */}
        <div className="navbar4ik">
          <Flex align="center" justify="center" flex="1">
            <Box display={['none', 'none', 'flex']} gap="1rem">
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                fontSize="md"
                px={5}
                py={2}
                rounded="md"
                textDecoration="none"
                // _hover={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'orange.500',
                // }}
                // _active={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'yellow.300',
                // }}
              >
                ГЛАВНАЯ
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/firms"
                fontSize="md"
                px={5}
                py={2}
                rounded="md"
                // _hover={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'orange.500',
                // }}
                // _active={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'yellow.300',
                // }}
              >
                КАТАЛОГ
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/service"
                fontSize="md"
                px={5}
                py={2}
                rounded="md"
                textDecoration="none"
                // _hover={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'orange.500',
                // }}
                // _active={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'yellow.300',
                // }}
              >
                УСЛУГИ
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/contact"
                fontSize="md"
                px={5}
                py={2}
                rounded="md"
                // _hover={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'orange.500',
                // }}
                // _active={{
                //   textDecoration: 'none',
                //   border: '2px solid',
                //   borderColor: 'yellow.300',
                // }}
              >
                КОНТАКТЫ
              </ChakraLink>

              {/* <ChakraLink as={ReactRouterLink} to="/login">
                авторизация
              </ChakraLink> */}
              {/* {user === 'authenticated' && (
                <>
                  <ChakraLink as={ReactRouterLink} to="/admin">
                    Админ панель
                  </ChakraLink>
                  <ChakraLink as={ReactRouterLink} to="/orders">
                    Заказы
                  </ChakraLink>
                  <ChakraLink
                    as={ReactRouterLink}
                    onClick={() => void dispatch(thunkLogout())}
                  >
                    Выйти
                  </ChakraLink>
                </>
              )} */}
              {/* <Button variant="link">поиск</Button> */}
            </Box>
          </Flex>
        </div>
        {/* Поиск */}
        {/* <InputGroup width="10%" display={['none', 'none', 'block']}>
        <Input placeholder="Поиск" />
        <InputRightElement>
          <Button size="sm">Поиск</Button>
        </InputRightElement>
      </InputGroup> */}

        <Spacer />
        <ThemeSwitch />
        <Spacer />

        <IconButton
          icon={<FaTelegram />}
          aria-label="Telegram"
          display={['none', 'none', 'block']}
          fontSize="32px"
          colorScheme="blue"
          variant="ghost"
          onClick={handleTelegramClick}
          _hover={{
            bg: 'transparent', // Устанавливаем фон при наведении на прозрачный
          }}
        />

        <IconButton
          icon={<FaWhatsapp />}
          aria-label="WhatsApp"
          display={['none', 'none', 'block']}
          fontSize="32px"
          colorScheme="green"
          variant="ghost"
          onClick={handleWhatsappClick}
          _hover={{
            bg: 'transparent', // Устанавливаем фон при наведении на прозрачный
          }}
        />

        {/* Бургер-меню */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Открыть меню"
          display={['block', 'block', 'none']}
          onClick={handleDrawerToggle}
        />

        {/* Модальное окно с меню */}
        <Drawer
          isOpen={isDrawerOpen}
          placement="right"
          onClose={handleDrawerToggle}
        >
          <DrawerOverlay
            // bg="rgba(0, 0, 0, 0.1)" // Прозрачный цвет для оверлея
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
          />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader />
            <DrawerBody marginTop="300px">
              <VStack spacing="4">
                <ChakraLink
                  as={ReactRouterLink}
                  to="/"
                  _hover={{ textDecoration: 'none' }}
                >
                  ГЛАВНАЯ
                </ChakraLink>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/firms"
                  _hover={{ textDecoration: 'none' }}
                >
                  КАТАЛОГ
                </ChakraLink>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/service"
                  _hover={{ textDecoration: 'none' }}
                >
                  УСЛУГИ
                </ChakraLink>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/contact"
                  _hover={{ textDecoration: 'none' }}
                >
                  КОНТАКТЫ
                </ChakraLink>

                <HStack spacing="2">
                  {/* Telegram */}
                  <Link href="https://t.me/" isExternal>
                    <IconButton
                      aria-label="Telegram"
                      icon={
                        <Icon
                          as={FaTelegramPlane as React.ElementType}
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

                <ThemeSwitch />
              </VStack>
              {/* <Link href="#">поиск</Link> */}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </div>
  );
}

export default React.memo(NavBar);
