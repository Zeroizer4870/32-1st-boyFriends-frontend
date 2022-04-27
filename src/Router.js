import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SignUp from './pages/User/SignUp/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/user/signup" element={<SignUp />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
