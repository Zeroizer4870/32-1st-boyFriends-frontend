import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProductPurchase/ProductPurchase.scss';
import PointAccumulate from './PointAccumulate/PointAccumulate';
import ProductOptionSelect from './ProductOptionSelect/ProductOptionSelect';
import ProductTitle from './ProductTitle/ProductTitle';
import PurchaseButton from './PurchaseButton/PurchaseButton';

function ProductPurchase({ productData }) {
  const [viewItem, setViewItem] = useState([]);
  const [key, setKey] = useState(1);
  const navigate = useNavigate();

  let salePrice = (productData.price * (100 - productData.sale)) / 100;

  const optionChange = e => {
    if (e.target.value === '사이즈') {
      return;
    }
    let isIncludeItem = viewItem
      .map(item => item.optionName)
      .includes(e.target.value);
    if (!isIncludeItem) {
      setViewItem([...viewItem, { optionName: e.target.value, key: key }]);
    }
    keyChange();
  };

  const keyChange = () => {
    setKey(prev => prev + 1);
  };

  const postToCart = () => {
    console.log(viewItem, 'postToCart');
  };

  const goToCart = () => {
    console.log('gotoCart');
    navigate('/cart');
  };

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
      <ProductOptionSelect
        productData={productData}
        salePrice={salePrice}
        optionChange={optionChange}
        viewItem={viewItem}
      />
      <PurchaseButton goToCart={goToCart} postToCart={postToCart} />
    </div>
  );
}

export default ProductPurchase;
