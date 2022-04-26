import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStatus from './ProductStatus/ProductStatus';
import '../Product/Product.scss';

function Product({ product }) {
  return (
    <li className="product">
      <ProductInfo product={product} />
      <ProductStatus product={product} />
    </li>
  );
}

export default Product;
