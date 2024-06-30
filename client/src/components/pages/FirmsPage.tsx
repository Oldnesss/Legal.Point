import React from 'react';
import { Box, Heading, Spacer } from '@chakra-ui/react';
import FirmList from '../ui/FirmList';


function FirmsPage(): JSX.Element {
  return (
    <Box>
      <Heading as="h2" size="xl" mt="20" mb="6" textAlign="center">
        Сейчас в продаже
      </Heading>
      <FirmList />
    </Box>
  );
}

export default FirmsPage;
