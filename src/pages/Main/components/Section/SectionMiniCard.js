import React from 'react';

const SectionMiniCard = ({ product }) => {
  return (
    <div className="cardDetailWrap">
      <img className="detailImg" alt="detailImg" src={product.productSrc} />
      <div>
        <p className="detailTitle">{product.productName}</p>
        <span className="detailContent">{product.productPrice}</span>
        <span className="detailContent">{product.productSale}</span>
      </div>
    </div>
  );
};

export default SectionMiniCard;
