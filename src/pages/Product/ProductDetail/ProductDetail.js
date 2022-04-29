import React from 'react';
import '../ProductDetail/ProductDetail.scss';
import ProductInfoWrapper from './ProductInfoWrapper/ProductInfoWrapper';
import ProductPurchase from './ProductPurchase/ProductPurchase';

function ProductDetail() {
  const PRODUCT_DATA = {
    id: 1,
    itemTitle: '후드티',
    category: null,
    userName: '성용',
    img: 'https://image.fmkorea.com/files/attach/new/20201223/4477817/2069934950/3279324811/e1f621cd14d2c931f6d5cbf5d38a3b18.png',
    price: 49000,
    stock: 10,
    size: [{ 1: 'S', 2: 'M', 3: 'L', 4: null }],
    sale: 15,
    status: 'New',
    review: [
      {
        id: 1,
        reviewerName: '기성',
        reviewContent: '너무 좋아요',
        reputation: 4,
        reivewImg:
          'https://file.mk.co.kr/meet/neds/2021/02/image_readtop_2021_26945_16137156464500629.jpg',
      },
      {
        id: 2,
        reviewerName: '성용',
        reviewContent: '너무 좋은데요?',
        reputation: 4,
        reivewImg:
          'https://file.mk.co.kr/meet/neds/2021/02/image_readtop_2021_26945_16137156464500629.jpg',
      },
      {
        id: 3,
        reviewerName: '재관',
        reviewContent: '아름답네요',
        reputation: 2,
        reivewImg:
          'https://file.mk.co.kr/meet/neds/2021/02/image_readtop_2021_26945_16137156464500629.jpg',
      },
      {
        id: 4,
        reviewerName: '훈기',
        reviewContent: '너무 좋아요',
        reputation: 3,
        reivewImg:
          'https://file.mk.co.kr/meet/neds/2021/02/image_readtop_2021_26945_16137156464500629.jpg',
      },
    ],
  };

  return (
    <div className="productDetail">
      <div className="layOut">
        <ProductInfoWrapper productData={PRODUCT_DATA} />
        <ProductPurchase productData={PRODUCT_DATA} />
      </div>
    </div>
  );
}

export default ProductDetail;
