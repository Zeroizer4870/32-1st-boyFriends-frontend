import React from 'react';
import CartInfoBox from './CartInfoBox/CartInfoBox';
import CartDefault from './CartDefault/CartDefault';
import './Cart.scss';

export default function Cart() {
  return (
    <main>
      <div className="cartNav">
        <div>
          <span className="normalDeli">일반배송 1</span> | 지정배송 0
        </div>
        <div className=" ingStatus">
          <span className="basketBold">장바구니</span> {'>'} 주문/결제 {'>'}{' '}
          완료
        </div>
      </div>
      <CartInfoBox />
      {/* <CartDefault /> */}
    </main>
  );
}
