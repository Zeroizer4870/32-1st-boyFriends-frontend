import React from 'react';
import '../ProductPurchase/ProductPurchase.scss';
import PointAccumulate from './PointAccumulate/PointAccumulate';
import ProductOptionSelect from './ProductOptionSelect/ProductOptionSelect';
import ProductTitle from './ProductTitle/ProductTitle';
import PurchaseButton from './PurchaseButton/PurchaseButton';

function ProductPurchase({ productData }) {
  let salePrice = (productData.price * (100 - productData.sale)) / 100;

  return (
    <div className="productPurchase">
      <ProductTitle productData={productData} salePrice={salePrice} />
      <PointAccumulate productData={productData} />
      <span className="installment">무이자 할부 | 카드 자세히보기</span>
      <div className="productShippment">
        <span>택배 배송 | </span>
        <span className="shipmentPrice">3,000원</span>
        <div className="freeShipment">30,000원 이상 구매 시 무료</div>
      </div>
      <ProductOptionSelect productData={productData} salePrice={salePrice} />
      <PurchaseButton />
    </div>
  );
}

export default ProductPurchase;
