import React, { useEffect, useRef, useState } from 'react';
import SectionCard from './SectionCard';
import DirectionBtn from './DirectionBtn';
import './Section.scss';

const Section = ({ sectionData }) => {
  const [carousel, setCarousel] = useState(7);
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const next = () => {
    index >= carousel ? setIndex(0) : setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(carousel) : setIndex(index - 1);
  };
  useEffect(() => {
    // index === 8
    //   ? (cardRef.current.style.transition = 'none'): // 무한 캐러셀 만들어야ㅏㅎㅁ
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index * 427}px)`;
  }, [index]);
  return (
    <>
      <section
        style={
          sectionData.id === 1
            ? { gridRow: '2/3' }
            : sectionData.id === 2
            ? { gridRow: '3/4' }
            : sectionData.id === 3
            ? { gridRow: '4/5' }
            : sectionData.id === 4
            ? { gridRow: '5/6' }
            : null
        }
        className="section"
      >
        <div className="sectionTitle">
          <h1>{sectionData.title}</h1>
        </div>
        <div ref={cardRef} className="cardList">
          {sectionData.category.map(sectionData => {
            return <SectionCard sectionData={sectionData} key={Date.now()} />;
          })}
        </div>
      </section>
      <div
        style={
          sectionData.id === 1
            ? { gridRow: '2/3' }
            : sectionData.id === 2
            ? { gridRow: '3/4' }
            : sectionData.id === 3
            ? { gridRow: '4/5' }
            : sectionData.id === 4
            ? { gridRow: '5/6' }
            : null
        }
        className="sectionZ"
      >
        <DirectionBtn prev={prev} next={next} />
      </div>
    </>
  );
};

export default Section;
