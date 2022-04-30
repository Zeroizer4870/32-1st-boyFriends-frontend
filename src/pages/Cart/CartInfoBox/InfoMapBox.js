import React, { useState, useEffect } from 'react';
import './InfoMapBox.scss';

const InfoMapBox = ({ box, setSum, setSale }) => {
  const [numS, setNumS] = useState(0);
  const [numM, setNumM] = useState(0);
  const [numL, setNumL] = useState(0);
  const [priceIndividual, setPriceIndividual] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  useEffect(() => {
    setSum(prev => ({ ...prev, [box.name]: priceIndividual }));
  }, [priceIndividual]);

  useEffect(() => {
    setSale(prev => ({ ...prev, [box.name]: salePrice }));
  }, [salePrice]);

  const plusOneS = () => {
    setNumS(numS + 1);
    setNumM(numM + 1);
    setPriceIndividual(prev => prev + box.price * ((100 - box.sale) / 100));
    setSalePrice(prev => prev + box.price * (box.sale / 100));
  };
  const minusOneS = () => {
    numS <= 0
      ? alert('0이하는 선택할 수 없습니다.')
      : setNumS(numS - 1) ||
        setPriceIndividual(
          prev => prev - box.price * ((100 - box.sale) / 100)
        ) ||
        setSalePrice(prev => prev - box.price * (box.sale / 100));
  };
  const plusOneM = () => {
    setNumM(numM + 1);
    setPriceIndividual(prev => prev + box.price * ((100 - box.sale) / 100)) ||
      setSalePrice(prev => prev + box.price * (box.sale / 100));
  };
  const minusOneM = () => {
    numM <= 0
      ? alert('0이하는 선택할 수 없습니다.')
      : setNumM(numM - 1) ||
        setPriceIndividual(
          prev => prev - box.price * ((100 - box.sale) / 100)
        ) ||
        setSalePrice(prev => prev - box.price * (box.sale / 100));
  };
  const plusOneL = () => {
    setNumL(numL + 1);
    setPriceIndividual(prev => prev + box.price * ((100 - box.sale) / 100)) ||
      setSalePrice(prev => prev + box.price * (box.sale / 100));
  };
  const minusOneL = () => {
    numL <= 0
      ? alert('0이하는 선택할 수 없습니다.')
      : setNumL(numL - 1) ||
        setPriceIndividual(
          prev => prev - box.price * ((100 - box.sale) / 100)
        ) ||
        setSalePrice(prev => prev - box.price * (box.sale / 100));
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
            <p className="infoPrice">{box.price.toLocaleString()}원</p>
            {box.sale !== 0 && (
              <p className="salePriceText">
                할인 가능 금액
                <span className="salePrice">
                  {salePrice.toLocaleString()} 원
                </span>
              </p>
            )}
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
            <span className="stockS">재고: {box.stock[0]}</span>
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
            <span className="stockM">재고: {box.stock[1]}</span>
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
            <span className="stockL">재고: {box.stock[2]}</span>
          </span>
        </div>
      </div>
      <div className="priceBox">
        <p className="productPriceText">상품금액</p>
        <p className="productPrice">{priceIndividual.toLocaleString()}원</p>
        <p>
          <button className="orderBtn" onclick="addSelectPrice">
            주문하기
          </button>
        </p>
      </div>
    </div>
  );
};

export default InfoMapBox;
