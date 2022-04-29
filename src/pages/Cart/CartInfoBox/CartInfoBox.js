import React, { useState } from 'react';
import InfoMapBox from './InfoMapBox';
import './CartInfoBox.scss';

export default function CartInfoBox({ infoBox }) {
  const [sum, setSum] = useState(0);

  const priceSum = () => {
    let arr = [];
    for (let i = 0; i < infoBox.length; i++) {
      arr.push(infoBox[i].price);
    }

    let sum = arr.reduce((acc, cur) => acc + cur);

    setSum(sum);
  };

  return (
    <>
      <div className="cartInfoBox">
        <div className="allSelect">
          <input type="checkbox" className="navSelect" onClick={priceSum} />
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
            <InfoMapBox box={box} />
          ))}
        </div>
      </div>
      <div className="total">
        <div className="selectPrice">
          <p className="textSizeFourteen">총 선택상품금액</p>
          <p className="textSizeEighteen">{sum}원</p>
        </div>
        <div className="plus">+</div>
        <div className="deliveryPrice">
          <p className="textSizeFourteen">총 배송비</p>
          <p className="textSizeEighteen">3,000원</p>
        </div>
        <div className="minus">-</div>
        <div className="salePrice">
          <p className="finalSaleText">할인예상금액</p>
          <p className="finalSalePrice">0원</p>
        </div>
        <span className="totalPriceText">총 주문금액</span>
        <span className="totalPrice">원</span>
      </div>
      <span className="deliveryInfo">
        배송비는 3,000원이며, 30,000원 이상 구매시 무료입니다.
      </span>
      <div className="finalSelect">
        <button className="finalBtn">총 1건 주문하기</button>
      </div>
    </>
  );
}
