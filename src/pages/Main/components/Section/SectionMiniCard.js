import React from 'react';
import './SectionMiniCard.scss';

const SectionMiniCard = ({ product, id }) => {
  return (
    <div className="cardDetailWrap">
      {id === 1 && (
        <img className="detailImg" alt="detailImg" src={product.productSrc} />
      )}

      <div>
        <strong className="detailTitle">{product.productName}</strong>
        <span className="detailSale">{product.productSale}%</span>
        <span className="detailPrice">
          {product.productPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default SectionMiniCard;
