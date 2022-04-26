import React from 'react';
import '../ProductNavTab/ProductNavTab.scss';

function ProductNavTab() {
  return (
    <nav className="categoryWrapper">
      <div className="categoryNav">
        <strong>중대형 인형</strong>
        <div>
          <ul className="categoryTop">
            <li>
              <a href="/">홈</a>
            </li>
            <li>
              <a href="/">토이</a>
            </li>
            <li>
              <a href="/">중대형 인형(64개)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavTab;
