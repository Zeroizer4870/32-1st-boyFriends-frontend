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
      .then(result => {
        setProducts(result);
      });
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

  const isTransform = () => {};

  return (
    <div className="productList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab products={products} />
          <ProductFilterTab
            sortProductsPrice={sortProductsPrice}
            sortReputation={sortReputation}
            sortReview={sortReview}
            isTransform={isTransform}
          />
        </div>

        <main className="categoryMain">
          <div className="categoryList">
            <ul className="products">
              {products.map((products, index) => (
                <Product products={products} key={index} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductList;
