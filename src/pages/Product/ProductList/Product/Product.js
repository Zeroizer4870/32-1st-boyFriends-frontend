import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStatus from './ProductStatus/ProductStatus';
import '../Product/Product.scss';

function Product({ products, goToDetail }) {
  // console.log(products.id);
  return (
    <li className="product" onClick={() => goToDetail(products.id)}>
      <ProductInfo products={products} />
      <ProductStatus products={products} />
    </li>
  );
}

export default Product;
