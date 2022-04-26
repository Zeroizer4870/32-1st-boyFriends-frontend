import React from 'react';
import './CartDefault.scss';

export default function CartDefault() {
  return (
    <div className="defaultBack">
      <div className="defaultText">
        <div className="basketDiv">
          <span className="basket">
            <i class="fa-solid fa-basket-shopping" />
          </span>
        </div>
        <div className="basketText"> 장바구니에 담긴 상품이 없습니다.</div>
        <div className="wantProduct">원하는 상품을 장바구니에 담아보세요!</div>
        <div className="showpingDiv">
          <button className="showpingBtn">쇼핑 계속하기 {'>'} </button>
        </div>
      </div>
    </div>
  );
}
