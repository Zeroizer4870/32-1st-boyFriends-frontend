import React from 'react';
import '../ProductInfoWrapper/ProductInfoWrapper.scss';

function ProductInfoWrapper() {
  return (
    <div className="productInfoWrapper">
      <div className="mainProductImg">
        <span className="statusTap">NEw</span>
        <img
          src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
          alt="인형"
        />
      </div>
      <ul className="imgs">
        <li className="img">
          <img
            alt="img"
            src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
          />
        </li>
        <li className="img">
          <img
            alt="img"
            src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
          />
        </li>
        <li className="img">
          <img
            alt="img"
            src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
          />
        </li>
        <li className="img">
          <img
            alt="img"
            src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
          />
        </li>
      </ul>
      <div className="productReviewCount">
        <div>리뷰수 </div>
        <div>사용자 총 평점</div>
      </div>
    </div>
  );
}

export default ProductInfoWrapper;
