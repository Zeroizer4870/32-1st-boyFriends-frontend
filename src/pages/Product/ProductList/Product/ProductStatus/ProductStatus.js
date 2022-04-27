import React from 'react';
import '../ProductStatus/ProductStatus.scss';

function ProductStatus({ products }) {
  return (
    <div className="productStatus">
      <div className="reviewTab">
        <div className="review">
          <span className="reviewTitle">리뷰</span>
          <em className="reviewCount">{products.reviewCount}</em>
        </div>
        <div className="reputation">
          <span className="reputationTitle">평점</span>
          <em className="reputationCount">{products.reputation}/5</em>
        </div>
      </div>
      <div className="currentStock">
        <span className="stockOut">sold out</span>
      </div>
    </div>
  );
}

export default ProductStatus;
