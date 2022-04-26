import React from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import Product from './Product/Product';
import '../ProductList/ProductList.scss';

function ProductList() {
  return (
    <div className="ProductList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab />
          <ProductFilterTab />
        </div>
        {/* 메인 카테고리 리스트 작성 예정 */}
        <div className="categoryList">
          <ul className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
