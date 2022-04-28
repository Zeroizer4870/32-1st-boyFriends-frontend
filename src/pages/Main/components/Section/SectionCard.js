import React from 'react';
import MiniCard from './MiniCard';

const SectionCard = ({ sectionData }) => {
  return (
    <article className="card">
      <div className="cardImgWrap">
        <img className="cardImg" alt="img" src={sectionData.categorySrc} />
      </div>
      <h3 className="cardTitle">{sectionData.categoryName}</h3>
      {sectionData.categoryProduct.map(sectionData => {
        return <MiniCard sectionData={sectionData} key={Date.now} />;
      })}
    </article>
  );
};

export default SectionCard;
