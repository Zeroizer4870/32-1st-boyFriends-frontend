import React, { useState, useEffect } from 'react';
import CartInfoBox from './CartInfoBox/CartInfoBox';
import CartDefault from './CartDefault/CartDefault';
import './Cart.scss';

export default function Cart() {
  const [infoBox, setInfoBox] = useState([]);

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setInfoBox(data);
      });
  }, []);

  return (
    <main className="cart">
      <div className="cartNav">
        <div>
          <span className="normalDeli">일반배송 {infoBox.length}</span> |
          지정배송 0
        </div>
        <div className=" ingStatus">
          <span className="basketBold">장바구니</span> {'>'} 주문/결제 {'>'}
          완료
        </div>
      </div>
      {/* <CartDefault /> */}
      <CartInfoBox infoBox={infoBox} />
    </main>
  );
}
