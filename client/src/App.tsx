import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import FirmsPage from './components/pages/FirmsPage';
import ServicePage from './components/pages/ServicePage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/ui/Footer';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <NavBar />
      {/* <div className="main"> */}
        {/* <div className="container"> */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/firms" element={<FirmsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        {/* </div> */}
      {/* </div> */}
      {/* <div className="footer"> */}
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
