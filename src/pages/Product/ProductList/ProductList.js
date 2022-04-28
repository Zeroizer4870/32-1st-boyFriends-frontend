import React, { useEffect, useState } from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import Product from './Product/Product';
import '../ProductList/ProductList.scss';
import { render } from '@testing-library/react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

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

  const isViewChange = e => {
    let name = e.target.className;
    if (name === 'doubleGrid') {
      setIsGrid(false);
    } else if (name === 'fiveGrid') {
      setIsGrid(true);
    }
  };

  return (
    <div className="productList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab products={products} />
          <ProductFilterTab
            sortProductsPrice={sortProductsPrice}
            sortReputation={sortReputation}
            sortReview={sortReview}
            isViewChange={isViewChange}
          />
        </div>
        <main className="categoryMain">
          <div className="categoryList">
            <ul className={isGrid ? 'fiveGrids' : 'doubleGrid'}>
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
