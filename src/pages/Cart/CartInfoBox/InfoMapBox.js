import React, { useState } from 'react';

const InfoMapBox = ({ box }) => {
  const [numS, setNumS] = useState(0);
  const [numM, setNumM] = useState(0);
  const [numL, setNumL] = useState(0);

  const plusOneS = () => {
    setNumS(numS + 1);
  };
  const minusOneS = () => {
    numS === 0 ? alert('0이하는 선택할 수 없습니다.') : setNumS(numS - 1);
  };
  const plusOneM = () => {
    setNumM(numM + 1);
  };
  const minusOneM = () => {
    numM === 0 ? alert('0이하는 선택할 수 없습니다.') : setNumM(numM - 1);
  };
  const plusOneL = () => {
    setNumL(numL + 1);
  };
  const minusOneL = () => {
    numL === 0 ? alert('0이하는 선택할 수 없습니다.') : setNumL(numL - 1);
  };

  return (
    <div className="infoMapBox" key={box.id}>
      <div className="imgFlex">
        <div>
          <input type="checkbox" className="productSelect" />
        </div>
        <div className="infoBox">
          <img src={box.img} alt={box.name} className="pants" />
          <div className="imgText">
            <div className="infoTitle">{box.name}</div>
            <p className="infoPrice">{box.price}원</p>
            <p className="salePriceText">
              할인 가능 금액
              <span className="salePrice">
                {box.price * (box.sale / 100)}원
              </span>
            </p>
            <p className="storeInfo">보이프렌즈 |스마트스토어</p>
          </div>
        </div>
      </div>
      <div className="sizeBox">
        <div className="sizeS">
          size: {box.size[0]}
          <span className="quantityBtnS">
            <span className="quantityMinusS">
              <i className="fa-solid fa-minus" onClick={minusOneS} />
            </span>
            <span className="quantityS">{numS}</span>
            <span className="quantityPlusS">
              <i className="fa-solid fa-plus" onClick={plusOneS} />
            </span>
          </span>
        </div>
        <div className="sizeM">
          size: {box.size[1]}
          <span className="quantityBtnM">
            <span className="quantityMinusM">
              <i className="fa-solid fa-minus" onClick={minusOneM} />
            </span>
            <span className="quantityM">{numM}</span>
            <span className="quantityPlusM">
              <i className="fa-solid fa-plus" onClick={plusOneM} />
            </span>
          </span>
        </div>
        <div className="sizeL">
          size: {box.size[2]}
          <span className="quantityBtnL">
            <span className="quantityMinusL">
              <i className="fa-solid fa-minus" onClick={minusOneL} />
            </span>
            <span className="quantityL">{numL}</span>
            <span className="quantityPlusL">
              <i className="fa-solid fa-plus" onClick={plusOneL} />
            </span>
          </span>
        </div>
      </div>
      <div className="priceBox">
        <p className="productPriceText">상품금액</p>
        <p className="productPrice">
          {box.price - box.price * (box.sale / 100)}원
        </p>
        <p>
          <button className="orderBtn">주문하기</button>
        </p>
      </div>
    </div>
  );
};

export default InfoMapBox;
