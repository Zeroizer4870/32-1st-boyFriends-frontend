import React from 'react';

const SectionCard = ({ sectionData }) => {
  return (
    <article className="card">
      <div className="cardImgWrap">
        <img className="cardImg" alt="img" src={sectionData.src} />
      </div>
      <h3 className="cardTitle">{sectionData.comment}</h3>
      {/* <div className="cardDetailWrap">
        <img
          className="detailImg"
          alt="detailImg"
          src={sectionData.items.srcMiniTop}
        />
        <div>
          <p className="detailTitle">{sectionData.items.item}</p>
          <span className="detailContent">{sectionData.items.price}</span>
          <span className="detailContent">{sectionData.items.percent}</span>
        </div>
      </div>
      <div className="cardDetailWrap">
        <img
          className="detailImg"
          alt="detailImg"
          src={sectionData.items.srcMiniBot}
        />
        <div>
          <p className="detailTitle">{sectionData.items.item}</p>
          <span className="detailContent">{sectionData.items.price}</span>
          <span className="detailContent">{sectionData.items.percent}</span>
        </div>
      </div> */}
    </article>
  );
};

export default SectionCard;
