import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import ProductList from './pages/Product/ProductList/ProductList';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/product" element={<ProductDetail />} />;
        <Route path="/products" element={<ProductList />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
