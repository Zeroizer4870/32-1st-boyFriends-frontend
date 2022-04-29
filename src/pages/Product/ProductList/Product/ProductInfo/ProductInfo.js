import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductInfo/ProductInfo.scss';

function ProductInfo({ products }) {
  return (
    <Link to="/category" className="productInfo">
      <div className="linkWrapper">
        {products.status !== null && (
          <div className="bestTab">
            <span>{products.status}</span>
          </div>
        )}
        <div className="productImg">
          <img className="productThumbnail" alt="제품" src={products.img} />
        </div>
        <div className="productContet">
          <strong>{products.name}</strong>
          <div>
            <span className="price">{products.price.toLocaleString()}원</span>
          </div>
          <p>{products.descript}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductInfo;
