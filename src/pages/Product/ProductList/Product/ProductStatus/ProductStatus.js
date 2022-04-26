import React from 'react';
import '../ProductStatus/ProductStatus.scss';

function ProductStatus({ product }) {
  return (
    <>
      <div className="reviewTab">
        <div className="review">
          <span>리뷰</span>
          <em>{product.reviewCount}</em>
        </div>
        <div className="reputation">
          <span>평점</span>
          <em>{product.reputation}/5</em>
        </div>
      </div>
      <div className="currentStock">
        <span>sold out</span>
      </div>
    </>
  );
}

export default ProductStatus;
