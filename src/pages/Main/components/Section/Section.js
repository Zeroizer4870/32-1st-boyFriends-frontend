import React, { useEffect, useRef, useState } from 'react';
import SectionCard from './SectionCard';
import DirectionBtn from '../common/DirectionBtn';
import CircleBtn from '../common/CircleBtn';
import './Section.scss';
import { useNavigate } from 'react-router-dom';

const Section = ({ sectionData, mainData }) => {
  const carousel = 7;
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const gridRowSet =
    sectionData.id === 1
      ? { gridRow: '2/3' }
      : sectionData.id === 2
      ? { gridRow: '3/4' }
      : sectionData.id === 3
      ? { gridRow: '4/5' }
      : sectionData.id === 4
      ? { gridRow: '5/6' }
      : null;

  useEffect(() => {
    // index === 8
    //   ? (cardRef.current.style.transition = 'none'): // 무한 캐러셀 만들어야ㅏㅎㅁ
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index * 1280}px)`;
  }, [index]);

  const navigate = useNavigate();
  const goToProducts = () => {
    navigate(`/products/${sectionData.id}`);
  };

  return (
    <>
      <section style={gridRowSet} className="section">
        <div className="sectionTitle">
          <h1>{sectionData.title}</h1>
        </div>
        <div
          ref={cardRef}
          className={sectionData.id === 4 ? 'cardListGrid' : 'cardListFlex'}
        >
          {sectionData.id === 1
            ? mainData.map(category => {
                return (
                  <SectionCard
                    category={category}
                    sectionData={sectionData}
                    key={category.categoryId}
                  />
                );
              })
            : mainData.map(category => {
                return category.product.map(product => {
                  return (
                    <SectionCard product={product} key={product.productId} />
                  );
                });
              })}
        </div>
      </section>

      <div onClick={goToProducts} style={gridRowSet} className="sectionCopy">
        {sectionData.id === 4 || (
          <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        )}
        <div className="circleBtnList">
          {sectionData.id === 4 ||
            mainData.map(category => {
              return (
                <CircleBtn
                  id={category.categoryId}
                  setIndex={setIndex}
                  key={category.categoryId}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Section;
