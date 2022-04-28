import React from 'react';
import '../ProductImgList/ProductImgList.scss';

function ProductImgList() {
  const DATA = [
    {
      id: 1,
      img: 'https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510',
      alt: '인형',
    },
    {
      id: 1,
      img: 'https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510',
      alt: '인형',
    },
    {
      id: 1,
      img: 'https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510',
      alt: '인형',
    },
    {
      id: 1,
      img: 'https://shop-phinf.pstatic.net/20220426_190/1650958998448KRsls_JPEG/52094832107772977_1629918675.jpg?type=m510',
      alt: '인형',
    },
  ];

  return (
    <div className="productImgList">
      {DATA.map((x, i) => (
        <li key={x.id + i}>
          <img src={x.img} alt={x.alt} />
        </li>
      ))}
    </div>
  );
}

export default ProductImgList;
