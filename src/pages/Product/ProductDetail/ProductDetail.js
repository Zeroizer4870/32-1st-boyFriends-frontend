import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetail/ProductDetail.scss';
import ProductInfoWrapper from './ProductInfoWrapper/ProductInfoWrapper';
import ProductPurchase from './ProductPurchase/ProductPurchase';
import Review from './ProductReview/Review';

function ProductDetail() {
  const [productId, setProductId] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.5.56:1234/products/${params.id}`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY1MTczODI1OX0.Nn1pSmUyXaXxbSxEYRI43tGNZP8-xAMhhtIxLneEKiU',
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
