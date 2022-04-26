import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductNavTab/ProductNavTab.scss';

function ProductNavTab({ product }) {
  return (
    <nav className="categoryWrapper">
      <div className="categoryNav">
        <strong>중대형 인형</strong>
        <div>
          <ul className="categoryTop">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/category">토이</Link>
            </li>
            <li>
              <Link to="/category">중대형 인형 ({product.length}개)</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavTab;
