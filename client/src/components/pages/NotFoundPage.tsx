import { Box, Container, Text, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <Flex minHeight="100vh" justifyContent="center" alignItems="center">
      <Container maxW="900px">
        <Box textAlign="center">
          <Text fontSize="6xl">Упс... такой страницы не существует</Text>
          <Text fontSize="4xl">
            Посмотри каталог наших{' '}
            <Link as={RouterLink} to="/service" color="orange.200">
              услуг
            </Link>
            !
          </Text>
        </Box>
      </Container>
    </Flex>
  );
}
