import React, { useEffect, useRef, useState } from 'react';
import SectionCard from './SectionCard';
import DirectionBtn from '../common/DirectionBtn';
import CircleBtn from '../common/CircleBtn';
import './Section.scss';

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
          {/* {mainData.map(mainData => {
            return (
              <SectionCard
                id={mainData.categoryId}
                category={mainData}
                key={mainData.categoryId}
              />
            );
          })} */}
        </div>
      </section>

      <div style={gridRowSet} className="sectionCopy">
        {sectionData.id === 4 || (
          <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        )}
        <div className="circleBtnList">
          {sectionData.id === 4 ||
            mainData.map(mainData => {
              return (
                <CircleBtn
                  id={mainData.categoryId}
                  setIndex={setIndex}
                  key={mainData.categoryId}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Section;
