import React, { useState } from 'react';

function SelectedProduct({
  viewItem,
  salePrice,
  setItemPrice,
  setResultCount,
}) {
  const [itemCount, setItemCount] = useState(0);
  const [priceOption, setPriceOption] = useState(0);

  const onIncrease = () => {
    setItemCount(prev => prev + 1);
    setResultCount(prev => prev + 1);
    setPriceOption(prev => prev + salePrice);
    setItemPrice(prev => prev + salePrice);
  };

  const onDecrease = () => {
    if (itemCount <= 0) {
      alert('0개 이하는 선택할 수 없습니다.');
      return;
    }
    setItemCount(prev => prev - 1);
    setResultCount(prev => prev - 1);
    setPriceOption(prev => prev - salePrice);
    setItemPrice(prev => prev - salePrice);
  };

  return (
    <ul className="selectedProduct">
      <li className="selectedStatus">
        <p className="optionTitle">{viewItem}</p>
        <div className="selectedWrapper">
          <div className="productCount">
            <button className="countBtn" onClick={onDecrease}>
              -
            </button>
            <span className="countValue">{itemCount}</span>
            <button className="countBtn" onClick={onIncrease}>
              +
            </button>
          </div>
          <span className="selectedPrice">
            {priceOption.toLocaleString()}
            <span> 원</span>
          </span>
        </div>
      </li>
    </ul>
  );
}

export default SelectedProduct;
