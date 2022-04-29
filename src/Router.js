import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SignIn from './pages/User/SignIn/Signin';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/users/signin" element={<SignIn />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
