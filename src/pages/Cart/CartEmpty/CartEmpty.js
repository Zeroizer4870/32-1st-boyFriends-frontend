import React from 'react';
import './CartEmpty.scss';

export default function CartEmpty() {
  return (
    <div className="cartEmpty">
      <div className="emptyComment">
        <span className="basketIcon">
          <i className="fa-solid fa-basket-shopping" />
        </span>
        <div className="basketTextBold"> 장바구니에 담긴 상품이 없습니다.</div>
        <div className="basketText">원하는 상품을 장바구니에 담아보세요!</div>
        <button className="continueBtn">쇼핑 계속하기</button>
      </div>
    </div>
  );
}
