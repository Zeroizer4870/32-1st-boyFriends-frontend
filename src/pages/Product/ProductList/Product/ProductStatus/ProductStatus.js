import React from 'react';
import '../ProductStatus/ProductStatus.scss';

function ProductStatus() {
  return (
    <>
      <div className="reviewTab">
        <div className="review">
          <span>리뷰</span>
          <em>539</em>
        </div>
        <div className="reputation">
          <span>평점</span>
          <em>5 / 5</em>
        </div>
      </div>
      <div className="currentStock">
        <span>sold out</span>
      </div>
    </>
  );
}

export default ProductStatus;
