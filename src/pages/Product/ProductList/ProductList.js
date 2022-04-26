import React from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import '../ProductList/ProductList.scss';

function ProductList() {
  return (
    <div className="ProductList">
      <div className="navContent">
        <ProductNavTab />
        <ProductFilterTab />
      </div>
    </div>
  );
}

export default ProductList;
