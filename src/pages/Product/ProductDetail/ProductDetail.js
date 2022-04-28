import React from 'react';
import '../ProductDetail/ProductDetail.scss';
import ProductInfoWrapper from './ProductInfoWrapper/ProductInfoWrapper';
import ProductPurchase from './ProductPurchase/ProductPurchase';

function ProductDetail() {
  // const [price, setPrice] = useState(0);

  return (
    <div className="productDetail">
      <div className="layOut">
        <ProductInfoWrapper />
        <ProductPurchase />
      </div>
    </div>
  );
}

export default ProductDetail;
