import React, { useEffect, useState } from 'react';
import CartInProduct from './CartInProduct';
import './CartInfo.scss';

export default function CartInfoBox({ commonData }) {
  const [sum, setSum] = useState({ default: 0 });
  const [delivery, setDelivery] = useState(3000);
  const [sale, setSale] = useState({ default: 0 });

  const totalPrice = Object.values(sum).reduce((acc, cur) => acc + cur);
  const salePrice = Object.values(sale).reduce((acc, cur) => acc + cur);

  const deliveryCharge = () => {
    return totalPrice <= 29999 ? setDelivery(3000) : setDelivery(0);
  };

  const OrderPrice = totalPrice + salePrice;

  useEffect(() => {
    deliveryCharge();
  }, [totalPrice]);

  return (
    <>
      <div className="cartInfoTop">
        <p className="selectAll">
          <input type="checkbox" className="navSelect" id="a" />
          <label htmlFor="a">전체 선택</label>
        </p>
        <button className="deleteAll">X 선택 삭제</button>
      </div>

      <div className="cartInfoBack">
        <div className="cartInfo">
          <div className="logo">
            BoyFriends
            <i className="fa-solid fa-house-chimney" />
          </div>
          {commonData.map(box => (
            <CartInProduct
              setSum={setSum}
              box={box}
              key={box.id}
              setSale={setSale}
            />
          ))}
        </div>
      </div>

      <div className="cartInfoBot">
        <div className="select">
          <p className="text">총 선택상품금액</p>
          <p className="price">{OrderPrice.toLocaleString()} 원 </p>
        </div>
        <div className="plus">+</div>
        <div className="delivery">
          <p className="text">총 배송비</p>
          <p className="price">{delivery.toLocaleString()} 원</p>
        </div>
        <div className="minus">ㅡ</div>
        <div className="sale">
          <p className="text">할인예상금액</p>
          <p className="price">{salePrice.toLocaleString()} 원</p>
        </div>
        <span className="totalText">총 주문금액</span>
        {totalPrice !== 0 && (
          <span className="totalPrice">
            {(OrderPrice + delivery - salePrice).toLocaleString()} 원
          </span>
        )}
      </div>
      <div className="cartInfoLast">
        <span className="infoText">
          배송비는 3,000원이며, 30,000원 이상 구매시 무료입니다.
        </span>
        <button className="orderBtn">총 {commonData.length}건 주문하기</button>
      </div>
    </>
  );
}
