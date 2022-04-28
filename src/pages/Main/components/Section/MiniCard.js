import React from 'react';

const MiniCard = ({ sectionData }) => {
  return (
    <div className="cardDetailWrap">
      <img className="detailImg" alt="detailImg" src={sectionData.productSrc} />
      <div>
        <p className="detailTitle">{sectionData.productName}</p>
        <span className="detailContent">{sectionData.productPrice}</span>
        <span className="detailContent">{sectionData.productSale}</span>
      </div>
    </div>
  );
};

export default MiniCard;
