import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductNavTab/ProductNavTab.scss';

function ProductNavTab({ product }) {
  const categoryList = ['홈', '토이', `중대형 인형  (${product.length}개)`];

  const spreadLink = categoryList.map((title, index) => {
    return (
      <li key={index}>
        <Link to="/">{title}</Link>
      </li>
    );
  });

  return (
    <nav className="categoryWrapper">
      <div className="categoryNav">
        <strong>중대형 인형</strong>
        <div>
          <ul className="categoryTop">{spreadLink}</ul>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavTab;
