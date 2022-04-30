import React from 'react';
import '../ProductTitle/ProductTitle.scss';

function ProductTitle({ productData, salePrice }) {
  return (
    <div className="productTitle">
      <div className="itemTitle">{productData.itemTitle}</div>
      <div className="numberWrapper">
        <span className="saleRatio">{productData.sale} %</span>
        <span className="priceWrapper">
          <span className="beforeSalePrice">
            {productData.price.toLocaleString()}원
          </span>
          <span className="productPrice">{salePrice.toLocaleString()} 원</span>
        </span>
      </div>
    </div>
  );
}

export default ProductTitle;
