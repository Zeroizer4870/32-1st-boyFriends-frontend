import React, { useEffect, useState } from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import Product from './Product/Product';
import '../ProductList/ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductListMock/ProductListMock.json')
      .then(res => res.json())
      .then(result => setProducts(result));
  }, []);

  const sortProductsPrice = () => {
    let newProducts = [...products];
    newProducts.sort((a, b) => a.price - b.price);
    setProducts(newProducts);
  };

  const sortReview = () => {
    let newProducts = [...products];
    newProducts.sort((a, b) => b.reviewCount - a.reviewCount);
    setProducts(newProducts);
  };

  const sortReputation = () => {
    let newProducts = [...products];
    newProducts.sort((a, b) => b.reputation - a.reputation);
    setProducts(newProducts);
  };

  return (
    <div className="ProductList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab product={products} />
          <ProductFilterTab
            sortProducts={sortProductsPrice}
            sortReputation={sortReputation}
            sortReview={sortReview}
          />
        </div>
        {/* 메인 카테고리 리스트 */}
        <main>
          <div className="categoryList">
            <ul className="products">
              {products.map((product, index) => (
                <Product product={product} key={index} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductList;
