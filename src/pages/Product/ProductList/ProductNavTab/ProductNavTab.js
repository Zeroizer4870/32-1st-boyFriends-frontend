import React from 'react';
import '../ProductNavTab/ProductNavTab.scss';

function ProductNavTab({ products }) {
  const categoryList = ['홈', '토이', `중대형 인형  (${products.length}개)`];
  const spreadLink = categoryList.map((title, index) => {
    return (
      <li key={index}>
        <span>{title}</span>
      </li>
    );
  });

  return (
    <div className="productNavTab">
      <nav className="categoryWrapper">
        <div className="categoryNav">
          <strong className="categoryName">중대형 인형</strong>
          <div>
            <ul className="categoryLink">{spreadLink}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProductNavTab;
