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
          <button className="delet">X 선택 삭제</button>
        </div>
      </div>

      <div className="cartInfo">
        <div className="cartInfoBox">
          <div className="infoFirst">
            보이프렌즈 &nbsp;
            <i class="fa-solid fa-house-chimney" />
          </div>
          <div className="infoSecond">
            <div className="imgFlex">
              <div>
                <input type="checkbox" className="productSelect" />
              </div>
              <div>
                <img src={imgA} className="pants" />
                라인프렌즈 BT21 미니니 퍼플 바지
                <p>29,000원</p> <p>보이프렌즈 |스마트스토어</p>
              </div>
            </div>
            <div className="sizeBox">
              <p>사이즈 :M/1개</p>
              <p>
                <button>주문수정</button>
              </p>
            </div>
            <div className="priceBox">
              <p>상품금액</p>
              <p>29,000원</p>
              <p>
                <button>주문하기</button>
              </p>
            </div>
            <div className="delivery">
              <p>배송비</p>
              <p>3,000원</p>
              <p>3만원 이상 구매 시 배송비 무료</p>
            </div>
          </div>
        </div>
      </div>

      <div className="total">
        <div className="selectPrice">
          <p>총 선택상품금액</p>
          <p>28,000원</p>
        </div>
        <div className="plus">+</div>
        <div className="deliveryPrice">
          <p>총 배송비</p>
          <p>3,000원</p>
        </div>
        <div className="minus">-</div>
        <div className="dcPrice">
          <p>할인예상금액</p>
          <p>0원</p>
        </div>
        <div className="totalPrice">총 주문금액 31,000원</div>
      </div>
      <div className="finalSelect">
        <button>총 1건 주문하기</button>
      </div>
    </>
  );
}
