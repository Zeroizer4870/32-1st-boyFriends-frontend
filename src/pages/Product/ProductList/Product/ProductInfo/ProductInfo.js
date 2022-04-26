import React from 'react';
import '../ProductInfo/ProductInfo.scss';

function ProductInfo() {
  return (
    <a href="/" className="goToDetail">
      <div className="bestTab">
        <span>Best</span>
      </div>
      <div className="productImg">
        <img
          className="productThumbnail"
          alt="제품"
          src="images/productListMock/product1.png"
        />
      </div>
      <strong>라인프렌즈 BT21</strong>
      <div>
        <span className="price">17,000원</span>
      </div>
      <p>
        ※ 본 상품 패키지의 테이프 장식은 종이 소재로 제작되어 배송 중 충격에
        의해 끊어질 수 있으나 제품은 미개봉 상품임을 안내드립니다.
      </p>
    </a>
  );
}

export default ProductInfo;
