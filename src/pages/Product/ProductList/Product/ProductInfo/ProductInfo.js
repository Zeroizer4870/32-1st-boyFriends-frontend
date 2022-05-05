import React from 'react';
import '../ProductInfo/ProductInfo.scss';

function ProductInfo({ products }) {
  return (
    <div className="productInfo">
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
    </div>
  );
}

export default ProductInfo;
