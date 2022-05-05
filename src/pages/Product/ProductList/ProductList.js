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
  const [category, setCategory] = useState('');
  const [isGrid, setIsGrid] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.5.56:1234/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.results[0]);
        setProducts(data.results[1]);
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

  const getOffsetAndLimit = index => {
    const offset = index * LIMIT;

    if (location.search.includes('main_category_id=1')) {
      navigate(`?main_category_id=1&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('main_category_id=2')) {
      navigate(`?main_category_id=2&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('main_category_id=3')) {
      navigate(`?main_category_id=3&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('category_id=1')) {
      navigate(`?category_id=1&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('category_id=2')) {
      navigate(`?category_id=2&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('category_id=3')) {
      navigate(`?category_id=3&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('category_id=4')) {
      navigate(`?category_id=4&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('category_id=5')) {
      navigate(`?category_id=5&offset=${offset}&limit=${LIMIT}`);
    } else if (location.search.includes('category_id=6')) {
      navigate(`?category_id=6&offset=${offset}&limit=${LIMIT}`);
    } else {
      navigate(`?offset=${offset}&limit=${LIMIT}`);
    }
  };
  return (
    <div className="productList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab products={products} category={category} />
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
      <div className="paginationBtnList">
        <button
          className="paginationBtn"
          onClick={e => {
            getOffsetAndLimit(Number(e.target.innerHTML - 1));
          }}
        >
          1
        </button>
        <button
          className="paginationBtn"
          onClick={e => {
            getOffsetAndLimit(Number(e.target.innerHTML - 1));
          }}
        >
          2
        </button>
        <button
          className="paginationBtn"
          onClick={e => {
            getOffsetAndLimit(Number(e.target.innerHTML - 1));
          }}
        >
          3
        </button>
        <button
          className="paginationBtn"
          onClick={e => {
            getOffsetAndLimit(Number(e.target.innerHTML - 1));
          }}
        >
          4
        </button>
        <button
          className="paginationBtn"
          onClick={e => {
            getOffsetAndLimit(Number(e.target.innerHTML - 1));
          }}
        >
          5
        </button>
      </div>
    </div>
  );
}

const LIMIT = 5;

export default ProductList;
