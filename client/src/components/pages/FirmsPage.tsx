import React from 'react';
import { Box, Spacer } from '@chakra-ui/react';
import FirmList from '../ui/FirmList';
import NavBar from '../ui/NavBar';

function FirmsPage(): JSX.Element {
  return (
    <Box
      bg="url('/banner4.webp') center/cover no-repeat"
      h="100vh"
      // position="relative"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="-1"
    >
      <NavBar />
      {/* <div>FirmsPage</div> */}

      <FirmList />
    </Box>
  );
}

export default FirmsPage;
