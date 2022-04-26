import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductInfo/ProductInfo.scss';

function ProductInfo({ product }) {
  return (
    <Link to="/category" className="goToDetail">
      <div className="linkWrapper">
        <div className="bestTab">
          <span>Best</span>
        </div>
        <div className="productImg">
          <img className="productThumbnail" alt="제품" src={product.img} />
        </div>
        <div className="productContet">
          <strong>{product.name}</strong>
          <div>
            <span className="price">{product.price}원</span>
          </div>
          <p>
            ※ 본 상품 패키지의 테이프 장식은 종이 소재로 제작되어 배송 중 충격에
            의해 끊어질 수 있으나 제품은 미개봉 상품임을 안내드립니다.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductInfo;
