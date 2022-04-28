import React from 'react';
import '../ProductPurchase/ProductPurchase.scss';

function ProductPurchase() {
  return (
    <div className="productPurchase">
      <div className="productWrapper">
        <div className="productTitle">라인프렌즈 BT CHIMMY 미니쿠션</div>
        <div className="productPrice">19,000원</div>
      </div>
      <div className="pointAccumulate">
        <div className="acceptCoupon">
          <span className="userTitle">OO님만을 위한 혜택</span>
          <button className="couponBtn">쿠폰받기</button>
        </div>
        <div className="maxPointCalc">
          <div className="maxPointText">최대 적립 포인트</div>
          <div className="resultCalc">340원</div>
        </div>
        <div className="morePointBox">3</div>
      </div>
      <img
        className="eventBanner"
        src="https://shop-phinf.pstatic.net/20220425_147/1650848445860RC0sk_PNG/01_PC_1100x126_EBAFB8EAB080EC9E85_236A09D9.png"
        alt="banner"
      />
      <span className="installment">무이자 할부 | 카드 자세히보기</span>
      <div className="productShippment">
        <span>택배배송 |</span>
        <span>
          3,000원 <span>주문시 결제</span>
        </span>
        <div>30,000원 이상 구매 시 무료</div>
      </div>
      <div className="selectOption">
        <div>
          <select className="selectFeature">
            <option>단품</option>
          </select>
        </div>
        <div className="currentSelect">
          <ul className="selectedProduct">
            <li>hi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductPurchase;
