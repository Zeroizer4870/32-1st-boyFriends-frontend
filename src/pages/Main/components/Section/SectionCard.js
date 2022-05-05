import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionMiniCard from './SectionMiniCard';
import './SectionCard.scss';

const SectionCard = ({ category, product }) => {
  const miniCard = [1, 2];

  const navigate = useNavigate();
  const goToProducts = () => {
    navigate(`/products/${product.productId}`);
  };

  const goToCategory = () => {
    navigate(`/products`);
  };

  return (
    <article className="card">
      <div className={!!category ? 'cardThreeImage' : 'cardFourImage'}>
        {!!category ? (
          <img
            onClick={goToCategory}
            className="cardImage"
            alt="img"
            src={category.categoryImg}
          />
        ) : (
          <img
            onClick={goToProducts}
            className="cardImage"
            alt="img"
            src={product.productImg}
          />
        )}
      </div>

      {!!category && (
        <strong onClick={goToCategory} className="cardTitle">
          {category.categoryName}
        </strong>
      )}

      {!!category ? (
        miniCard.map(a => {
          return <SectionMiniCard product={category.product} />;
        })
      ) : (
        <div className="fourDetailWrap">
          <div>
            {product.productDiscount === 0 || (
              <span className="detailSale">{product.productDiscount}%</span>
            )}
            <span className="detailPrice">
              {product.productPrice.toLocaleString()}원
            </span>

            <strong onClick={goToProducts} className="detailTitle">
              {product.productName}
            </strong>
          </div>
        </div>
      )}
    </article>
  );
};

export default SectionCard;
