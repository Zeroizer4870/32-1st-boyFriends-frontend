import React from 'react';
import SectionMiniCard from './SectionMiniCard';
import './SectionCard.scss';

const SectionCard = ({ category, product }) => {
  const miniCard = [1, 2];
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
        miniCard.map(a => {
          return <SectionMiniCard product={category.product[0]} />;
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
