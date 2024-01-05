import { Box, Image, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <Box as="nav" bg="teal.500" p={4} mb={4} color="write">
      <List display="flex" justifyContent="center">
 \
        <ListItem>
          <Link as={ReactRouterLink} to="/" mr={4}>
          ГЛАВНАЯ
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to="/firms" mr={4}>
          КАТАЛОГ
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to="/service" mr={4}>
          УСЛУГИ
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReactRouterLink} to="/contact" mr={4}>
          КОНТАКТЫ
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default NavBar;
