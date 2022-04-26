import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStatus from './ProductStatus/ProductStatus';
import '../Product/Product.scss';

function Product() {
  return (
    <li className="product">
      <ProductInfo />
      <ProductStatus />
    </li>
  );
}

export default Product;
