import React from 'react';
import '../ProductPurchase/ProductPurchase.scss';
import PointAccumulate from './PointAccumulate/PointAccumulate';
import ProductOptionSelect from './ProductOptionSelect/ProductOptionSelect';
import ProductTitle from './ProductTitle/ProductTitle';
// import ResultPrice from './ResultPrice/ResultPrice';

function ProductPurchase() {
  return (
    <div className="productPurchase">
      <ProductTitle />
      <PointAccumulate />

      <img
        className="eventBanner"
        src="https://shop-phinf.pstatic.net/20220425_147/1650848445860RC0sk_PNG/01_PC_1100x126_EBAFB8EAB080EC9E85_236A09D9.png"
        alt="banner"
      />
      <span className="installment">무이자 할부 | 카드 자세히보기</span>
      <div className="productShippment">
        <span>택배 배송 | </span>
        <span className="shipmentPrice">3,000원</span>
        <div className="freeShipment">30,000원 이상 구매 시 무료</div>
      </div>
      <ProductOptionSelect />
    </div>
  );
}

export default ProductPurchase;
