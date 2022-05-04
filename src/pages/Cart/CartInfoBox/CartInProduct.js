import React, { useState, useEffect } from 'react';
import CartSize from './CartInProductSize';
import './CartInProduct.scss';

const InfoMapBox = ({ box, setSum, setSale }) => {
  const [sizeNum, setSizeNum] = useState({ S: 0, M: 0, L: 0, F: 0 });
  const mapArr = [1, 2, 3, 4];
  const [priceIndividual, setPriceIndividual] = useState(0);
  const [salePrice, setSalePrice] = useState(0);

  useEffect(() => {
    setSum(prev => ({ ...prev, [box.name]: priceIndividual }));
    setSale(prev => ({ ...prev, [box.name]: salePrice }));
  }, [priceIndividual, salePrice]);

  const plusCount = size => {
    return (
      setPriceIndividual(prev => prev + box.price * ((100 - box.sale) / 100)),
      setSalePrice(prev => prev + box.price * (box.sale / 100)),
      setSizeNum(sizeNum => ({ ...sizeNum, [size]: sizeNum[size] + 1 }))
    );
  };

  const minusCount = size => {
    return (
      sizeNum[size] > 0
        ? setPriceIndividual(
            prev => prev - box.price * ((100 - box.sale) / 100)
          ) || setSalePrice(prev => prev - box.price * (box.sale / 100))
        : null,
      size === 'S'
        ? sizeNum.S <= 0
          ? alert('0이하는 선택할 수 없습니다.')
          : setSizeNum(sizeNum => ({ ...sizeNum, [size]: sizeNum[size] - 1 }))
        : size === 'M'
        ? sizeNum.M <= 0
          ? alert('0이하는 선택할 수 없습니다.')
          : setSizeNum(sizeNum => ({ ...sizeNum, [size]: sizeNum[size] - 1 }))
        : size === 'L'
        ? sizeNum.L <= 0
          ? alert('0이하는 선택할 수 없습니다.')
          : setSizeNum(sizeNum => ({ ...sizeNum, [size]: sizeNum[size] - 1 }))
        : size === 'F'
        ? sizeNum.F <= 0
          ? alert('0이하는 선택할 수 없습니다.')
          : setSizeNum(sizeNum => ({ ...sizeNum, [size]: sizeNum[size] - 1 }))
        : null
    );
  };

  return (
    <div className="cartInProduct" key={box.id}>
      <div className="productContainer">
        <div className="productWrap">
          <input className="productCheckBox" id={box.id} type="checkbox" />
          <label htmlFor={box.id}>
            <img className="productImage" src={box.img} alt={box.name} />
          </label>

          <div className="productDetail">
            <div className="detailText">{box.name}</div>
            <p className="detailPrice">{box.price.toLocaleString()}원</p>
            {box.sale !== 0 ? (
              <p className="discountText">
                할인 가능 금액
                <span className="discountPrice">
                  {salePrice.toLocaleString()}원
                </span>
              </p>
            ) : (
              <p className="discountText">
                <span className="discountPrice" />
              </p>
            )}
            <p className="sellerInfo">보이프렌즈 | 스마트스토어</p>
          </div>
        </div>
      </div>
      <div className="sizeContainer">
        {mapArr.map((a, i) => {
          return (
            <CartSize
              minusCount={minusCount}
              plusCount={plusCount}
              box={box}
              sizeNum={sizeNum}
              i={i}
            />
          );
        })}
      </div>
      <div className="priceContainer">
        <p className="priceText">상품금액</p>
        <p className="price">{priceIndividual.toLocaleString()} 원</p>
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
