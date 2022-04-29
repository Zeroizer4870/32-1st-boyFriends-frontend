import React from 'react';
import '../ProductInfoWrapper/ProductInfoWrapper.scss';

function ProductInfoWrapper({ productData }) {
  let accessReputation = productData.review.map(x => x.reputation);

  let sumReputation = accessReputation.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  let reputationAverage = sumReputation / accessReputation.length;

  return (
    <div className="productInfoWrapper">
      <div className="mainProductImg">
        <span className="statusTab">{productData.status}</span>
        <img
          className="productThumbNail"
          src={productData.img}
          alt={productData.itemTitle}
        />
      </div>

      <div className="productReviewCount">
        <span className="reviewSum">
          <div className="reviewText">리뷰수 </div>
          <span className="reviewNum">{productData.review.length}</span>
        </span>
        <div className="reviewSum">
          <div className="reviewText">사용자 총 평점</div>
          <span className="reviewNum">{reputationAverage} / 5</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoWrapper;
