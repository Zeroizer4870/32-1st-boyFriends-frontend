import React from 'react';
import './CartInfoBox.scss';

export default function CartInfoBox({ infoBox }) {
  // let arr = [];
  // for (let i = 0; i < infoBox.length; i++) {
  //   arr.push(infoBox[i].price);
  // }

  // const sum = arr.reduce((acc, cur) => acc + cur);

  return (
    <>
      <div className="cartInfoBox">
        <div className="allSelect">
          <input type="checkbox" className="navSelect" /> 전체 선택
        </div>
        <div>
          <button className="deleteAll">X 선택 삭제</button>
        </div>
      </div>
      <div className="cartInfo">
        <div className="cartInfoMap">
          <div className="bfLogo">
            BoyFriends &nbsp;
            <i class="fa-solid fa-house-chimney" />
          </div>
          {infoBox.map(({ id, img, name, price, size }) => (
            <div className="infoMapBox" key={id}>
              <div className="imgFlex">
                <div>
                  <input type="checkbox" className="productSelect" />
                </div>
                <div className="infoBox">
                  <img src={img} className="pants" />
                  <div className="imgText">
                    <div className="infoTitle">{name}</div>
                    <p className="infoPrice">{price}원</p>
                    <p className="storeInfo">보이프렌즈 |스마트스토어</p>
                  </div>
                </div>
              </div>
              <div className="sizeBox">
                <div className="sizeS">
                  {size[0]} / 0개
                  <span className="quantityBtnS">
                    <span className="quantityMinusS">
                      <i class="fa-solid fa-minus" />
                    </span>
                    <span className="quantityS">수량</span>
                    <span className="quantityPlusS">
                      <i class="fa-solid fa-plus" />
                    </span>
                  </span>
                </div>
                <div className="sizeM">
                  {size[1]} / 0개
                  <span className="quantityBtnM">
                    <span className="quantityMinusM">
                      <i class="fa-solid fa-minus" />
                    </span>
                    <span className="quantityM">수량</span>
                    <span className="quantityPlusM">
                      <i class="fa-solid fa-plus" />
                    </span>
                  </span>
                </div>
                <div className="sizeL">
                  {size[2]} / 0개
                  <span className="quantityBtnL">
                    <span className="quantityMinusL">
                      <i class="fa-solid fa-minus" />
                    </span>
                    <span className="quantityL">수량</span>
                    <span className="quantityPlusL">
                      <i class="fa-solid fa-plus" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="priceBox">
                <p className="productPriceText">상품금액</p>
                <p className="productPrice">{price}원</p>
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
          ))}
        </div>
      </div>
      <div className="total">
        <div className="selectPrice">
          <p className="sizeFour">총 선택상품금액</p>
          <p className="sizeEight">원</p>
        </div>
        <div className="plus">+</div>
        <div className="deliveryPrice">
          <p className="sizeFour">총 배송비</p>
          <p className="sizeEight">3,000원</p>
        </div>
        <div className="minus">-</div>
        <div className="dcPrice">
          <p className="sizeFourSaleText">할인예상금액</p>
          <p className="sizeEightSale">0원</p>
        </div>
        <span className="totalPriceText">총 주문금액</span>
        <span className="totalPrice">원</span>
      </div>
      <div className="finalSelect">
        <button className="finalBtn">총 1건 주문하기</button>
      </div>
    </>
  );
}
