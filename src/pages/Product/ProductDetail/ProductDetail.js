import React from 'react';
import '../ProductDetail/ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="layOut">
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
              <img src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510" />
            </li>
            <li className="img">
              <img src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510" />
            </li>
            <li className="img">
              <img src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510" />
            </li>
            <li className="img">
              <img src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510" />
            </li>
            <li className="img">
              <img src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510" />
            </li>
          </ul>
          <div className="productReviewCount">
            <div>리뷰수 </div>
            <div>사용자 총 평점</div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="productPurchase">
          <div className="productTitle">라인프렌즈 BT CHIMMY 미니쿠션</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
