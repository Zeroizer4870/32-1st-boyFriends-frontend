import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetail/ProductDetail.scss';
import ProductInfoWrapper from './ProductInfoWrapper/ProductInfoWrapper';
import ProductPurchase from './ProductPurchase/ProductPurchase';

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`http://10.58.1.227:1234/products/${params.id}`, {
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.results[0]);
        setProduct(data.results[0]);
      });
  }, []);

  const PRODUCT_DATA = {
    id: 1,
    itemTitle: '보이프렌즈 후드티 BT21',
    category: 'toy',
    userName: '성용',
    img: 'https://image.fmkorea.com/files/attach/new/20201223/4477817/2069934950/3279324811/e1f621cd14d2c931f6d5cbf5d38a3b18.png',
    price: 42000,
    productOptioin: [
      // { id: 1, size: 'S', stock: 12, category: '의류' },
      // { id: 2, size: 'M', stock: 0, category: '의류' },
      // { id: 3, size: 'L', stock: 342, category: '의류' },
      { id: 4, size: '단품', stock: 1, category: `toy` },
    ],
    sale: 12,
    status: 'New',
    review: [
      {
        id: 1,
        reviewerName: '기성',
        reviewContent: '너무 좋아요',
        reputation: 5,
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
  // console.log(PRODUCT_DATA);
  // console.log(product);

  return (
    <div className="productDetail">
      <div className="layOut">
        <ProductInfoWrapper productData={product} />
        <ProductPurchase productData={product} />
      </div>
    </div>
  );
}

export default ProductDetail;
