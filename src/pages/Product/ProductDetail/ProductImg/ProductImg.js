import React from 'react';
import '../ProductImg/ProductImg.scss';

function ProductImg() {
  return (
    <div className="productImgWrapper">
      <div className="statusTap">NEw</div>
      <img
        src="https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510"
        alt="인형"
      />
      <ul>
        <li>이미지</li>
      </ul>
    </div>
  );
}

export default ProductImg;
