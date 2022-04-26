import React from 'react';
import '../ProductNavTab/ProductNavTab.scss';

function ProductNavTab({ product }) {
  return (
    <nav className="categoryWrapper">
      <div className="categoryNav">
        <strong>중대형 인형</strong>
        <div>
          <ul className="categoryTop">
            <li>
              <a href="/">홈 ></a>
            </li>
            <li>
              <a href="/">토이 ></a>
            </li>
            <li>
              <a href="/category">중대형 인형 ({product.length}개)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavTab;
