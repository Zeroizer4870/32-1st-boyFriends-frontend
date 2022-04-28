import React from 'react';
import '../ProductDetail/ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="layOut">
        <div className="imgWrapper">
          <div className="statusTap">NEw</div>
          <div className="productImg">
            <img
              src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
              alt="인형"
            />
          </div>
          <ul className="imgList">
            <li>이미지</li>
          </ul>
        </div>

        {/* 구분선 */}
        <div className="productPurchase">ProductPurchase</div>
      </div>
    </div>
  );
}

export default ProductDetail;
