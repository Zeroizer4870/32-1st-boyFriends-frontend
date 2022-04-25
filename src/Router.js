import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/main/Main';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
