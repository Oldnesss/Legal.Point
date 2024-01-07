import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import FirmsPage from './components/pages/FirmsPage';
import ServicePage from './components/pages/ServicePage';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/firms" element={<FirmsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
