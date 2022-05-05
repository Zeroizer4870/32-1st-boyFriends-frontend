import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetail/ProductDetail.scss';
import ProductInfoWrapper from './ProductInfoWrapper/ProductInfoWrapper';
import ProductPurchase from './ProductPurchase/ProductPurchase';
import Review from './ProductReview/Review';

function ProductDetail() {
  const [productId, setProductId] = useState(null);
  const params = useParams();

  console.log(params);
  useEffect(() => {
    fetch(`http://10.58.5.56:1234/products/${params.id}`, {
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductId(data.results[0]);
      });
  }, [params.id]);
  return (
    <div>
      {productId && (
        <>
          <div className="productDetail">
            <div className="layOut">
              <ProductInfoWrapper productData={productId} />
              <ProductPurchase productData={productId} />
            </div>
          </div>
          <Review review={productId.review} />
        </>
      )}
    </div>
  );
}

export default ProductDetail;
