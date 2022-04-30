import React from 'react';
import SectionMiniCard from './SectionMiniCard';
import './SectionCard.scss';

const SectionCard = ({ category, id }) => {
  return (
    <article className="card">
      <div className={id === 1 ? 'cardThreeImage' : 'cardFourImage'}>
        <img className="cardImage" alt="img" src={category.categorySrc} />
      </div>

      {id === 1 && (
        <strong className="cardTitle">{category.categoryName}</strong>
      )}
      {category.categoryProduct.map(product => {
        return (
          <SectionMiniCard id={id} product={product} key={product.productId} />
        );
      })}
    </article>
  );
};

export default SectionCard;
