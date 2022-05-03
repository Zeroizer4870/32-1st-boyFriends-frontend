import React from 'react';
import '../PurchaseButton/PutchaseButton.scss';

function PurchaseButton({ postToCart, goToCart }) {
  return (
    <div className="purchaseButton">
      <div className="btnWrapper">
        <button className="mainPurchaseBtn" onClick={goToCart}>
          구매하기
        </button>
        <button className="subPurchaseBtn">찜하기</button>
        <button className="subPurchaseBtn" onClick={postToCart}>
          장바구니
        </button>
      </div>
    </div>
  );
}

export default PurchaseButton;
