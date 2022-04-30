import React, { useEffect, useState } from 'react';
import InfoMapBox from './InfoMapBox';
import './CartInfoBox.scss';

export default function CartInfoBox({ infoBox }) {
  const [sum, setSum] = useState({ default: 0 });
  const [delivery, setDelivery] = useState(3000);
  const [sale, setSale] = useState({ default: 0 });

  const total = Object.values(sum).reduce((acc, cur) => acc + cur);
  const salePrice = Object.values(sale).reduce((acc, cur) => acc + cur);

  const deliveryCharge = () => {
    return total <= 29999 ? setDelivery(3000) : setDelivery(0);
  };

  useEffect(() => {
    deliveryCharge();
  }, [total]);

  return (
    <>
      <div className="cartInfoBox">
        <div className="allSelect">
          <input type="checkbox" className="navSelect" />
          전체 선택
        </div>
        <div>
          <button className="deleteAll">X 선택 삭제</button>
        </div>
      </div>
      <div className="cartInfo">
        <div className="cartInfoMap">
          <div className="bfLogo">
            BoyFriends &nbsp;
            <i className="fa-solid fa-house-chimney" />
          </div>
          {infoBox.map(box => (
            <InfoMapBox setSum={setSum} box={box} setSale={setSale} />
          ))}
        </div>
      </div>
      <div className="total">
        <div className="selectPrice">
          <p className="textSizeFourteen">총 선택상품금액</p>
          <p className="textSizeEighteen">{total.toLocaleString()}원 </p>
        </div>
        <div className="plus">+</div>
        <div className="deliveryPrice">
          <p className="textSizeFourteen">총 배송비</p>
          <p className="textSizeEighteen">{delivery.toLocaleString()}원</p>
        </div>
        <div className="minus">-</div>
        <div className="salePrice">
          <p className="finalSaleText">할인예상금액</p>
          <p className="finalSalePrice">{salePrice.toLocaleString()}원</p>
        </div>
        <span className="totalPriceText">총 주문금액</span>
        {total !== 0 && (
          <span className="totalPrice">
            {(total + delivery - salePrice).toLocaleString()}원
          </span>
        )}
      </div>
      <div className="deliveryInfoDiv">
        <span className="deliveryInfoText">
          배송비는 3,000원이며, 30,000원 이상 구매시 무료입니다.
        </span>
      </div>
      <div className="finalSelect">
        <button className="finalBtn">총 {infoBox.length}건 주문하기</button>
      </div>
    </>
  );
}
