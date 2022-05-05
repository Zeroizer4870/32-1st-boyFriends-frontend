import React, { useState, useEffect } from 'react';
import './CartInProduct.scss';

const InfoMapBox = ({ box, setSum, setSale }) => {
  const [sizeNum, setSizeNum] = useState(box.count);
  const [priceIndividual, setPriceIndividual] = useState(
    box.count * (box.price * ((100 - box.sale) / 100))
  );
  const [salePrice, setSalePrice] = useState(0);

  useEffect(() => {
    setSum(prev => ({ ...prev, [box.name]: priceIndividual }));
    setSale(prev => ({ ...prev, [box.name]: salePrice }));
  }, [priceIndividual, salePrice]);

  const plusCount = size => {
    return (
      setPriceIndividual(prev => prev + box.price * ((100 - box.sale) / 100)),
      setSalePrice(prev => prev + box.price * (box.sale / 100)),
      setSizeNum(sizeNum + 1)
    );
  };
  const minusCount = size => {
    return (
      sizeNum > 0
        ? setPriceIndividual(
            prev => prev - box.price * ((100 - box.sale) / 100)
          )
        : null,
      sizeNum > 0
        ? setSalePrice(prev => prev - box.price * (box.sale / 100))
        : null,
      sizeNum <= 0
        ? alert('0이하는 선택할 수 없습니다.')
        : setSizeNum(sizeNum => sizeNum - 1)
    );
  };

  const selectStock = () => {
    switch (box.option) {
      case 'small':
        return box.size_stock[0].stock;
      case 'medium':
        return box.size_stock[1].stock;
      case 'large':
        return box.size_stock[2].stock;
      case '단품':
        return box.size_stock[0].stock;
      default:
        return null;
    }
  };

  const salePriceIndivisual = box.price * (box.sale / 100);

  return (
    <div className="cartInProduct" key={box.productId}>
      <div className="productContainer">
        <div className="productWrap">
          <input
            className="productCheckBox"
            id={box.productId}
            type="checkbox"
          />
          <label htmlFor={box.productId}>
            <img className="productImage" src={box.img} alt={box.name} />
          </label>

          <div className="productDetail">
            <div className="detailText">{box.name}</div>
            <p className="detailPrice">{box.price.toLocaleString()}원</p>
            {box.sale !== 0 ? (
              <p className="discountText">
                할인 가능 금액
                <span className="discountPrice">
                  {salePriceIndivisual.toLocaleString()}원
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
        <span className="sizeName">사이즈: {box.option}</span>
        <div className="sizeCount"> 수량: </div>
        <div className="quantity">
          <span className="quantityMinus">
            <i
              className="fa-solid fa-minus"
              onClick={() => {
                minusCount();
              }}
            />
          </span>
          <span className="quantityNum">{sizeNum}</span>
          <span className="quantityPlus">
            <i
              className="fa-solid fa-plus"
              onClick={() => {
                plusCount();
              }}
            />
          </span>
          <span className="sizeStock">재고:{selectStock()}</span>
        </div>
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
