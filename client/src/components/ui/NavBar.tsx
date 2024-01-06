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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link as ReactRouterLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

function NavBar(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
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
    window.location.href = 'https://t.me/';
  };

  const handleWhatsappClick = (): void => {
    window.location.href = 'https://wa.me/';
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        // bgColor="transparent"
        // position="fixed"
        top="0"
        left="0"
        right="0"
        // bg={isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
        // boxShadow={isScrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'}
        // transition="background-color 0.3s, box-shadow 0.3s"
        backdropFilter="blur(50px)"
        transform={isScrolled ? 'translateY(-100%)' : 'none'}
        // bg="#000000"
        transition="transform 0.4s"
        zIndex="1"
      >
        {/* Логотип */}
        <Link href="/">
          <Image
            src={colorMode === 'dark' ? '/Legal.Point.png' : '/LEGAL•POINT.png'}
            alt="logo"
            w={300}
          />
        </Link>
        <Spacer />

        {/* Навигационные ссылки */}
        <div className="navbar4ik">
          <Flex align="center" justify="center" flex="1">
            <Box display={['none', 'none', 'flex']} gap="1rem">
              <ChakraLink as={ReactRouterLink} to="/">
                ГЛАВНАЯ
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/firms">
                КАТАЛОГ
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/service">
                УСЛУГИ
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/contact">
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
        {/* <ThemeSwitch /> */}
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
            bg="rgba(0, 0, 0, 0.1)" // Прозрачный цвет для оверлея
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
          />
          <DrawerContent bg="transparent" backdropFilter="blur(50px)">
            <DrawerCloseButton />
            <DrawerHeader />
            <DrawerBody>
              <VStack spacing="4">
                <ChakraLink as={ReactRouterLink} to="/">
                  ГЛАВНАЯ
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/firms">
                  КАТАЛОГ
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/service">
                  УСЛУГИ
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/contact">
                  КОНТАКТЫ
                </ChakraLink>

                <HStack spacing="4">
                  <IconButton
                    icon={<FaWhatsapp />}
                    aria-label="WhatsApp"
                    display={['block', 'block', 'none']}
                    fontSize="32px"
                    colorScheme="green"
                    variant="ghost"
                    onClick={handleWhatsappClick}
                    _hover={{
                      bg: 'transparent', // Устанавливаем фон при наведении на прозрачный
                    }}
                  />

                  <IconButton
                    icon={<FaTelegram />}
                    aria-label="Telegram"
                    display={['block', 'block', 'none']}
                    fontSize="32px"
                    colorScheme="blue"
                    variant="ghost"
                    onClick={handleTelegramClick}
                    _hover={{
                      bg: 'transparent', // Устанавливаем фон при наведении на прозрачный
                    }}
                  />
                </HStack>

                {/* <ThemeSwitch /> */}
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
