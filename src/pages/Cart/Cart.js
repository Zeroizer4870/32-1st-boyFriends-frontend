import React, { useState, useEffect } from 'react';
import CartInfo from './CartInfoBox/CartInfo';
import CartEmpty from './CartEmpty/CartEmpty';
import './Cart.scss';

export default function Cart() {
  const [commonData, setCommonData] = useState([]);
  const selectData = 0;

  // useEffect(() => {
  //   fetch('/data/cartData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCommonData(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://10.58.5.56:1234/payments/cart', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTYsImV4cCI6MTY1MTgyNjQ0NH0.5_-dsdu20YsHx_z102jPHDupYBvQJeWM1wTUyFzTIW8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setCommonData(data.results);
      });
  }, []);

  return (
    <main className="cart">
      <div className="cartNav">
        <div>
          <span className="commonDelivery">일반배송 {commonData.length}</span>
          <span className="selectDelivery">지정배송 {selectData}</span>
        </div>
        <div className="purchasingProcess">
          <span className="basket">장바구니</span>
          <span className="orderPay">주문/결제</span>
          <span className="complete">완료</span>
        </div>
      </div>

      {commonData.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartInfo commonData={commonData} />
      )}
    </main>
  );
}
