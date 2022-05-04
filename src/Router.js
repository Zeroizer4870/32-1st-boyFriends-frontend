import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import SignUp from './pages/User/SignUp/SignUp';
import SignIn from './pages/User/SignIn/SignIn';
import ProductList from './pages/Product/ProductList/ProductList';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route element={<Nav />}>
          <Route path="users/signup" element={<SignUp />} />;
          <Route path="users/signin" element={<SignIn />} />;
          <Route path="/products" element={<ProductList />} />;
          <Route path="/products/:id" element={<ProductDetail />} />;
          <Route path="/cart" element={<Cart />} />;
          <Route path="/order" element={<Order />} />;
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
