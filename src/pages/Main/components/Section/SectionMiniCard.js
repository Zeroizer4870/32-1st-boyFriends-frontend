import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionMiniCard = ({ product }) => {
  const randomNum = Math.random() * 4;
  const wrapNum = Math.floor(randomNum);
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate(`/products/${product[wrapNum].productId}`);
  };

  return (
    <div className="threeDetailWrap">
      <img
        onClick={goToProducts}
        className="detailImg"
        alt="detailImg"
        src={product[wrapNum].productImg}
      />

      <div>
        <strong onClick={goToProducts} className="detailTitle">
          {product[wrapNum].productName}
        </strong>
        {product[wrapNum].productDiscount === 0 || (
          <span className="detailSale">
            {product[wrapNum].productDiscount}%
          </span>
        )}
        <span className="detailPrice">
          {product[wrapNum].productPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default SectionMiniCard;
