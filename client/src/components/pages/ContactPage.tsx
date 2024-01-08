import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

function ContactPage(): JSX.Element {
  return (
    <Box maxW="600px" mx="auto" mt="40">
      <Stack spacing="10" alignItems='center'>
        <Heading fontSize="2xl">Юридическая компания "Legal.Point"</Heading>
        <Text>
          Общество с ограниченной ответственностью "Юридическая компания
          "Legal.Point", зарегистрировано межрайонной инспекцией Федеральной
          налоговой службы №46 по городу Москве, ОГРН 1127746060749 / ИНН
          7725746582, г.Москва, 3-й Сыромятнический переулок, дом 3/9, строение
          6, этаж 4
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          ЗВОНИТЕ НА ГОРЯЧУЮ ЛИНИЮ 8 917 513 17 35
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          КОНСУЛЬТИРУЙТЕСЬ В СКАЙПЕ: Legal.Point
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          ПИШИТЕ на e-mail: info@legal.point
        </Text>
        <ChakraLink as={ReactRouterLink} to="/contact">
          <Button colorScheme="orange" variant="solid">
            ЗАКАЗАТЬ УСЛУГУ ПРЯМО СЕЙЧАС
          </Button>
        </ChakraLink>
        <Text fontSize="lg">
          АДРЕС ОФИСА: г.Москва, 3-й Сыромятнический переулок, дом 3/9, строение
          6, этаж 4
        </Text>
        <Text fontSize="lg">ВРЕМЯ РАБОТЫ: с 09.00 до 19.00</Text>
      </Stack>
    </Box>
  );
}

export default ContactPage;
