import React from 'react';

const SectionMiniCard = ({ product }) => {
  return (
    <div className="threeDetailWrap">
      <img className="detailImg" alt="detailImg" src={product.productImg} />

      <div>
        <strong className="detailTitle">{product.productName}</strong>
        <span className="detailSale">{product.productDiscount}%</span>
        <span className="detailPrice">
          {product.productPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default SectionMiniCard;
