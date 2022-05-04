import React from 'react';
import '../ProductInfoWrapper/ProductInfoWrapper.scss';

function ProductInfoWrapper({ productData }) {
  let accessReputation;
  let sumReputation;
  let reputationAverage;

  if (productData.review) {
    accessReputation = productData.review.map(x => x.reputation);

    sumReputation = accessReputation.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    reputationAverage = sumReputation / accessReputation.length;
  }
  return (
    <div className="productInfoWrapper">
      <div className="mainProductImg">
        {productData.status && (
          <span className="statusTab">{productData.status}</span>
        )}
        <img
          className="productThumbNail"
          src={productData.img}
          alt={productData.itemTitle}
        />
      </div>
      {productData.review.length !== 0 && (
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
      )}
    </div>
  );
}

export default ProductInfoWrapper;
