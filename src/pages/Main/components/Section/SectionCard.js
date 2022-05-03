import React from 'react';
import SectionMiniCard from './SectionMiniCard';
import './SectionCard.scss';

const SectionCard = ({ category, product }) => {
  return (
    <article className="card">
      <div className={!!category ? 'cardThreeImage' : 'cardFourImage'}>
        {!!category ? (
          <img className="cardImage" alt="img" src={category.categoryImg} />
        ) : (
          <img className="cardImage" alt="img" src={product.productImg} />
        )}
      </div>

      {!!category && (
        <strong className="cardTitle">{category.categoryName}</strong>
      )}

      {!!category ? (
        category.product.map(product => {
          return <SectionMiniCard product={product} key={product.productId} />;
        })
      ) : (
        <div className="fourDetailWrap">
          <div>
            <span className="detailSale">{product.productDiscount}%</span>
            <span className="detailPrice">
              {product.productPrice.toLocaleString()}원
            </span>

            <strong className="detailTitle">{product.productName}</strong>
          </div>
        </div>
      )}
    </article>
  );
};

export default SectionCard;
