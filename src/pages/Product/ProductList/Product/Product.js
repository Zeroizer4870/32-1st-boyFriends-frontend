import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStatus from './ProductStatus/ProductStatus';
import '../Product/Product.scss';

function Product({ products }) {
  return (
    <li className="product">
      <ProductInfo products={products} />
      <ProductStatus products={products} />
    </li>
  );
}

export default Product;
