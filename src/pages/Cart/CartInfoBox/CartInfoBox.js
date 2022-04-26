import React from 'react';
import imgA from '../image/pants.jpg';
import './CartInfoBox.scss';

export default function CartInfoBox() {
  return (
    <>
      <div className="selectNav">
        <div className="allSelect">
          <input type="checkbox" className="navSelect" /> 전체 선택
        </div>
        <div>
          <button className="deleteAll">X 선택 삭제</button>
        </div>
      </div>

      <div className="cartInfo">
        <div className="cartInfoBox">
          <div className="infoFirst">
            BoyFriends &nbsp;
            <i class="fa-solid fa-house-chimney" />
          </div>
          <div className="infoSecond">
            <div className="imgFlex">
              <div>
                <input type="checkbox" className="productSelect" />
              </div>
              <div className="infoBox">
                <img src={imgA} className="pants" />
                <div className="imgText">
                  <div className="infoTitle">
                    라인프렌즈 BT21 미니니 퍼플 바지
                  </div>
                  <p className="infoPrice">29,000원</p>
                  <p className="storeInfo">보이프렌즈 |스마트스토어</p>
                </div>
              </div>
            </div>
            <div className="sizeBox">
              <p className="sizeText">사이즈 :M/1개</p>
              <p>
                <button className="modifyBtn">주문수정</button>
              </p>
            </div>
            <div className="priceBox">
              <p className="productPriceText">상품금액</p>
              <p className="productPrice">29,000원</p>
              <p>
                <button className="orderBtn">주문하기</button>
              </p>
            </div>
            <div className="delivery">
              <p className="deliveryPriceText">배송비</p>
              <p className="deliveryPrice">3,000원</p>
              <p className="deliveryFree">(3만원 이상 구매 시 배송비 무료)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="total">
        <div className="selectPrice">
          <p className="sizeFour">총 선택상품금액</p>
          <p className="sizeEight">28,000원</p>
        </div>
        <div className="plus">+</div>
        <div className="deliveryPrice">
          <p className="sizeFour">총 배송비</p>
          <p className="sizeEight">3,000원</p>
        </div>
        <div className="minus">-</div>
        <div className="dcPrice">
          <p className="sizeFourDcText">할인예상금액</p>
          <p className="sizeEightDc">0원</p>
        </div>
        <span className="totalPriceText">총 주문금액</span>
        <span className="totalPrice">31,000원</span>
      </div>
      <div className="finalSelect">
        <button className="finalBtn">총 1건 주문하기</button>
      </div>
    </>
  );
}
