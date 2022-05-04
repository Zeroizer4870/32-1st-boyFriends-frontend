import React from 'react';

const CartSize = ({ sizeNum, box, minusCount, plusCount, i }) => {
  const size = ['S', 'M', 'L'];

  return (
    <>
      <div className="sizeName">{box.size[i]}</div>
      <div className="stock">재고 ({box.stock[i]})</div>
      <div className="quantity">
        <span className="quantityMinus">
          <i
            className="fa-solid fa-minus"
            onClick={() => {
              minusCount(size[i]);
            }}
          />
        </span>
        <span className="quantityNum">{sizeNum[size[i]]}</span>
        <span className="quantityPlus">
          <i
            className="fa-solid fa-plus"
            onClick={() => {
              plusCount(size[i]);
            }}
          />
        </span>
      </div>
    </>
  );
};

export default CartSize;
