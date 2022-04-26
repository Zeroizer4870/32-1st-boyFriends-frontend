import React, { useEffect, useState } from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import Product from './Product/Product';
import '../ProductList/ProductList.scss';

function ProductList() {
  useEffect(() => {
    fetch('http://localhost:3000/data/ProductListMock/ProductListMock.json')
      .then(res => res.json())
      .then(result => console.log(result));
  }, []);

  const [product, setProduct] = useState({
    id: 1,
    name: '보이프렌즈',
    price: 27000,
    stock: 24,
    img: 'images/productListMock/product1.png',
    reviewCount: 421,
    reputation: 4.2,
  });

  let testArr = [];
  for (let i = 0; i < 50; i++) {
    testArr.push(i);
  }

  return (
    <div className="ProductList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab />
          <ProductFilterTab />
        </div>
        {/* 메인 카테고리 리스트 */}
        <main>
          <div className="categoryList">
            <ul className="products">
              {testArr.map(x => (
                <Product product={product} key={x} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductList;
