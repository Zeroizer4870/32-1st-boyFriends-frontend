import React from 'react';
import SectionMiniCard from './SectionMiniCard';

const SectionCard = ({ category, id }) => {
  console.log(id);
  return (
    <article className="card">
      <div className="cardImgWrap">
        <img className="cardImg" alt="img" src={category.categorySrc} />
      </div>
      <h3 className="cardTitle">{category.categoryName}</h3>
      {id === 1 &&
        category.categoryProduct.map(product => {
          return <SectionMiniCard product={product} key={Date.now} />;
        })}
    </article>
  );
};

export default SectionCard;
