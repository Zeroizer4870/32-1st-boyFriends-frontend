import React, { useEffect, useState } from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import Product from './Product/Product';
import '../ProductList/ProductList.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: '',
      price: 0,
      stock: 0,
      img: null,
      reviewCount: null,
      reputation: null,
      descript: null,
      status: null,
      sale: null,
    },
  ]);

  const [isGrid, setIsGrid] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    fetch(`http://10.58.5.56:1234/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.results);
      });
  }, [location.search]);

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

  const goToDetail = id => {
    navigate(`/products/${id}`);
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
              {products.map(products => (
                <Product
                  goToDetail={goToDetail}
                  products={products}
                  key={products.id}
                />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductList;
