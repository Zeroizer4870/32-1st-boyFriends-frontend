import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductInfo/ProductInfo.scss';

function ProductInfo({ product }) {
  return (
    <Link to="/category" className="goToDetail">
      <div className="linkWrapper">
        <div className="bestTab">
          <span>Best</span>
        </div>
        <div className="productImg">
          <img className="productThumbnail" alt="제품" src={product.img} />
        </div>
        <div className="productContet">
          <strong>{product.name}</strong>
          <div>
            <span className="price">{product.price.toLocaleString()}원</span>
          </div>
          <p>{product.descript}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductInfo;
