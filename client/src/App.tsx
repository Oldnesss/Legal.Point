import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import FirmsPage from './components/pages/FirmsPage';
import ServicePage from './components/pages/ServicePage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/ui/Footer';
import { useAppDispatch } from './redux/hooks';
import { thunkGetFirm } from './redux/slices/posts/postThunk';
import NotFoundPage from './components/pages/NotFoundPage';
import SalePage from './components/pages/salePage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkGetFirm());
  }, []);
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/firms" element={<FirmsPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
