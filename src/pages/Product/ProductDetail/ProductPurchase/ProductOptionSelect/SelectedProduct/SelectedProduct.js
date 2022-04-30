import React from 'react';

function SelectedProduct() {
  return (
    <ul className="selectedProduct">
      <li className="selectedStatus">
        <p className="optionTitle">{viewItem.optionTitle}</p>
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
            {itemPrice.toLocaleString()}
            <span> 원</span>
          </span>
        </div>
      </li>
    </ul>
  );
}

export default SelectedProduct;
